import "reflect-metadata";
import { ArrowLeft, Plus } from "lucide";
import IconButton from "@components/iconButton";
import { Recipe, TimeType } from "@types";
import Editor from "@views/editor";
import RecipesView from "@views/recipesView";
import { addRerenderListener, rerender } from "@lib";
import { getToast } from "@components/toast";

function makeDefaultRecipe(): Recipe {
    return new Recipe(
        {
            name: "",
            description: "",
            yield: 0,
            yieldUnit: "",
        },
        [],
        []
    );
}

export class App {
    private rootElement: HTMLElement;
    private recipes: Recipe[] = [];
    private editing: boolean;
    private editNew: boolean;
    private editor: Editor | null;

    constructor(rootElement: HTMLElement) {
        this.rootElement = rootElement;

        // Get editing state from session storage
        const localEditing = sessionStorage.getItem("editing");
        this.editing = localEditing === "true";

        const localEditNew = sessionStorage.getItem("editNew");
        this.editNew = localEditNew === "true";

        this.editor = null;

        // If editing, set up the editor
        if (this.editing) {
            this.edit();
        } else {
            sessionStorage.removeItem("editorRecipe");
            sessionStorage.removeItem("editorActiveTab");
        }

        addRerenderListener(() => this.render());
    }

    async init() {
        await this.getRecipes();
    }

    private edit(recipe?: Recipe) {
        // Set up the editor to edit the recipe at the given index
        this.editing = true;
        sessionStorage.setItem("editing", "true");
        sessionStorage.setItem("editNew", this.editNew ? "true" : "false");
        this.editor = new Editor(recipe || makeDefaultRecipe());

        this.editor.on("save", async (event) => {
            try {
                if (this.editNew) {
                    const res = await fetch("/api/recipes", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(event.detail),
                    });

                    if (res.status !== 200) {
                        throw new Error("Failed to save recipe");
                    }

                    getToast().toast("success", "Recipe created");
                } else {
                    const res = await fetch("/api/recipes/" + event.detail.id, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(event.detail),
                    });

                    if (res.status !== 200) {
                        throw new Error("Failed to save recipe");
                    }

                    getToast().toast("success", "Recipe updated");
                }
            } catch (error) {
                getToast().toast("error", "Failed to save recipe");
                console.error(error);
                return;
            }
            this.editing = false;
            sessionStorage.setItem("editing", "false");
            sessionStorage.removeItem("editorRecipe");
            sessionStorage.removeItem("editorActiveTab");
            this.editor = null;

            await this.getRecipes();
            rerender();
        });

        this.editor.on("cancel", async () => {
            this.editing = false;
            sessionStorage.setItem("editing", "false");
            sessionStorage.setItem("editNew", "false");
            sessionStorage.removeItem("editorRecipe");
            sessionStorage.removeItem("editorActiveTab");

            this.editor = null;
            await this.getRecipes();
            rerender();
        });

        rerender();
    }

    private async getRecipes() {
        try {
            const res = await fetch("/api/recipes");
            if (res.status !== 200) {
                throw new Error("Failed to load recipes");
            }
            this.recipes = await res.json();
        } catch (error) {
            console.error(error);
            getToast().toast("error", "Failed to load recipes");
        }
    }

    render() {
        this.rootElement.innerHTML = "";

        const div = document.createElement("div");
        div.classList.add(
            "flex",
            "flex-1",
            "h-full",
            "flex-col",
            "gap-4",
            "p-4"
        );
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

        // If editing, show a cancel button otherwise show a new button to add a new recipe
        if (this.editing) {
            const cancelButton = new IconButton(ArrowLeft);
            cancelButton.on("click", async () => {
                this.editing = false;
                sessionStorage.setItem("editing", "false");
                sessionStorage.setItem("editNew", "false");
                sessionStorage.removeItem("editorRecipe");
                sessionStorage.removeItem("editorActiveTab");
                this.editor = null;

                await this.getRecipes();
                rerender();
            });

            cancelButton.render(navbar);
        } else {
            const newButton = new IconButton(Plus);
            newButton.on("click", () => {
                this.editNew = true;
                this.edit();
                rerender();
            });

            newButton.render(navbar);
        }

        // If editing, render the editor otherwise render the recipes view
        if (this.editor) {
            this.editor.render(div);
        } else {
            const recipeView = new RecipesView(this.recipes);

            // Set up event listeners for the recipes view
            recipeView.on("edit", (event) => {
                this.editNew = false;
                this.edit(event.detail.recipe);
                rerender();
            });

            recipeView.on("delete", async (event) => {
                try {
                    const res = await fetch("/api/recipes/" + event.detail.recipe.id, {
                        method: "DELETE",
                    });

                    if (res.status !== 200) {
                        throw new Error("Failed to delete recipe");
                    }
                } catch (error) {
                    getToast().toast("error", "Failed to delete recipe");
                    console.error(error);
                    return;
                }

                getToast().toast("success", "Recipe deleted");
                await this.getRecipes();
                rerender();
            });

            recipeView.on("new", () => {
                this.editNew = true;
                this.edit();
                rerender();
            });

            recipeView.render(div);
        }
    }
}