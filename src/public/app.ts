import { ArrowLeft, Plus } from "lucide";
import IconButton from "./lib/components/iconButton.js";
import { Recipe, TimeType } from "./lib/types.js";
import Editor from "./lib/views/editor.js";
import RecipesView from "./lib/views/recipesView.js";

const rerenderListeners: Array<() => void> = [];

export function rerender() {
  rerenderListeners.forEach(listener => listener());
}

const demoRecipe: Recipe = {
    info: {
        name: "Vanilla Ice Cream",
        description: "A very simple vanilla ice cream recipe. Based on the recipe from the amazing David Lebovitz.",
        yield: 2,
        yieldUnit: "pt",
    },
    ingredients: [
        {
            name: "heavy cream",
            quantity: 2,
            unit: "c",
        },
        {
            name: "whole milk",
            quantity: 1,
            unit: "c",
        },
        {
            name: "sugar",
            quantity: 0.75,
            unit: "c",
        },
        {
            name: "salt",
            quantity: 0.125,
            unit: "tsp",
        },
        {
            name: "vanilla extract",
            quantity: 1,
            unit: "tsp",
        }
    ],
    steps: [
        {
            direction: "In a medium saucepan, warm 1 cup of the cream with the sugar, and salt till simmering.",
            time: 60*5,
            timeType: TimeType.Cooking,
        },
        {
            direction: "Turn off the heat and let steep for 1 hour.",
            time: 60*60,
            timeType: TimeType.Waiting,
        },
        {
            direction: "In a medium bowl, pour the remaining 1 cup of cream and set a mesh strainer on top.",
            time: 10,
            timeType: TimeType.Preparation,
        },
    ],
};

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
    private editNew: boolean;
    private editor: Editor | null;

    constructor(rootElement: HTMLElement) {
        this.rootElement = rootElement;

        const localRecipes = localStorage.getItem("recipes");
        if (localRecipes) {
            try {
                this.recipes = JSON.parse(localRecipes);
            } catch (error) {
                this.recipes = [demoRecipe];
            }
        } else {
            this.recipes = [demoRecipe];
        }

        const localEditing = sessionStorage.getItem("editing");
        this.editing = localEditing === "true";

        const localEditNew = sessionStorage.getItem("editNew");
        this.editNew = localEditNew === "true";

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
        sessionStorage.setItem("editNew", this.editNew ? "true" : "false");
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

        this.editor.on("cancel", () => {
            this.editing = false;
            sessionStorage.setItem("editing", "false");
            sessionStorage.setItem("editNew", "false");
            sessionStorage.removeItem("editorRecipe");
            sessionStorage.removeItem("editorActiveTab");

            if (this.editNew) {
                this.recipes.pop();
                this.editNew = false;
                localStorage.setItem("recipes", JSON.stringify(this.recipes));
            }

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

        const navbar = document.createElement("div");
        navbar.classList.add("navbar", "bg-base-100");
        div.appendChild(navbar);
        
        const title = document.createElement("div");
        title.classList.add("flex-1");
        navbar.appendChild(title);

        const titleText = document.createElement("a");
        titleText.classList.add("btn", "btn-ghost", "text-xl");
        titleText.textContent = "Recursipe";
        title.appendChild(titleText);

        if (this.editing) {
            const cancelButton = new IconButton(ArrowLeft);
            cancelButton.on("click", () => {
                this.editing = false;
                sessionStorage.setItem("editing", "false");
                sessionStorage.setItem("editNew", "false");
                sessionStorage.removeItem("editorRecipe");
                sessionStorage.removeItem("editorActiveTab");
                this.editor = null;

                if (this.editNew) {
                    this.recipes.pop();
                    this.editNew = false;
                    localStorage.setItem("recipes", JSON.stringify(this.recipes));
                }
                rerender();
            });

            cancelButton.render(navbar);
        } else {
            const newButton = new IconButton(Plus);
            newButton.on("click", () => {
                this.recipes.push(defaultRecipe);
                localStorage.setItem("recipes", JSON.stringify(this.recipes));
                this.editNew = true;
                this.edit(this.recipes.length - 1);
                rerender();
            });

            newButton.render(navbar);
        }

        if (this.editor) {
            this.editor.render(div);
        } else {
            const recipeView = new RecipesView(this.recipes);

            recipeView.on("edit", (event) => {
                this.editNew = false;
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
