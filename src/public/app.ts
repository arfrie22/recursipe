import { Recipe } from "./lib/types.js";
import Editor from "./lib/views/editor.js";
import RecipesView from "./lib/views/recipesView.js";

const rerenderListeners: Array<() => void> = [];

export function rerender() {
  rerenderListeners.forEach(listener => listener());
}

const defaultRecipe: Recipe = {
    info: {
        name: "",
        description: "",
        yield: 0,
        yieldUnit: "",
    },
    ingredients: [],
    steps: [],
};

export class App {
    private rootElement: HTMLElement;
    private recipes: Recipe[];
    private activeIndex: number;
    private editing: boolean;
    private editor: Editor | null;

    constructor(rootElement: HTMLElement) {
        this.rootElement = rootElement;

        const localRecipes = localStorage.getItem("recipes");
        if (localRecipes) {
            try {
                this.recipes = JSON.parse(localRecipes);
            } catch (error) {
                this.recipes = [];
            }
        } else {
            this.recipes = [];
        }

        const localEditing = sessionStorage.getItem("editing");
        this.editing = localEditing === "true";

        const localActiveRecipeIndex = sessionStorage.getItem("activeRecipeIndex");
        if (localActiveRecipeIndex) {
            this.activeIndex = parseInt(localActiveRecipeIndex);
            if (this.activeIndex < 0 || this.activeIndex >= this.recipes.length) {
                this.activeIndex = 0;
            }
        } else {
            this.activeIndex = 0;
        }

        this.editor = null;

        if (this.editing) {
            this.edit(this.activeIndex);
        } else {
            sessionStorage.removeItem("editorRecipe");
            sessionStorage.removeItem("editorActiveTab");
        }
        
        rerenderListeners.push(() => this.render());
    }

    private edit(index: number) {
        this.activeIndex = index;
        this.editing = true;
        sessionStorage.setItem("activeRecipeIndex", this.activeIndex.toString());
        sessionStorage.setItem("editing", "true");
        this.editor = new Editor(this.recipes[this.activeIndex]);

        this.editor.on("save", (event) => {
            this.recipes[this.activeIndex] = event.detail;
            localStorage.setItem("recipes", JSON.stringify(this.recipes));
            this.editing = false;
            sessionStorage.setItem("editing", "false");
            sessionStorage.removeItem("editorRecipe");
            sessionStorage.removeItem("editorActiveTab");
            this.editor = null;
            rerender();
        });

        rerender();
    }
    
    render() {
        this.rootElement.innerHTML = "";
        
        const div = document.createElement("div");
        div.classList.add("flex", "flex-1", "h-full", "flex-col", "gap-4", "p-4");
        this.rootElement.appendChild(div);

        if (this.editor) {
            this.editor.render(div);
        } else {
            const recipeView = new RecipesView(this.recipes);

            recipeView.on("edit", (event) => {
                this.edit(event.detail.index);
                rerender();
            });

            recipeView.on("delete", (event) => {
                this.recipes.splice(event.detail.index, 1);
                localStorage.setItem("recipes", JSON.stringify(this.recipes));
                rerender();
            });

            recipeView.on("new", () => {
                this.recipes.push(defaultRecipe);
                localStorage.setItem("recipes", JSON.stringify(this.recipes));
                this.edit(this.recipes.length - 1);
                rerender();
            });

            recipeView.render(div);
        }
    }
}
