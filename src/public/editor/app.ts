import "reflect-metadata";
import { ArrowLeft, Plus } from "lucide";
import IconButton from "@components/iconButton";
import { Recipe, RecipeData, TimeType } from "@types";
import Editor from "@views/editor";
import RecipesView from "@views/recipesView";
import { addRerenderListener, rerender } from "@lib";
import { getToast } from "@components/toast";

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
        this.editor = new Editor(recipe || new Recipe());

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

                    if (!res.ok) {
                        throw new Error("Failed to save recipe");
                    }

                    await getToast().toast("success", "Recipe created");
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

                    await getToast().toast("success", "Recipe updated");
                }
            } catch (error) {
                await getToast().toast("error", "Failed to save recipe");
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
            if (!res.ok) {
                throw new Error("Failed to load recipes");
            }
            const data = await res.json() as RecipeData[];
            this.recipes = data.map((r) => new Recipe(r));
        } catch (error) {
            console.error(error);
            await getToast().toast("error", "Failed to load recipes");
        }
    }

    async render() {
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
        navbar.classList.add("navbar", "bg-base-100", "justify-between", "g-4");
        div.appendChild(navbar);

        const actionButton = document.createElement("div");
        navbar.appendChild(actionButton);

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

            await cancelButton.render(actionButton);
        } else {
            const newButton = new IconButton(Plus);
            newButton.on("click", () => {
                this.editNew = true;
                this.edit();
                rerender();
            });

            await newButton.render(actionButton);
        }

        const title = document.createElement("div");
        navbar.appendChild(title);

        const titleText = document.createElement("span");
        titleText.classList.add("text-xl", "font-bold");
        titleText.textContent = "Recursipe";
        title.appendChild(titleText);

        const signOut = document.createElement("a");
        signOut.classList.add("btn", "btn-primary");
        signOut.role = "button";
        signOut.textContent = "Sign Out";
        signOut.href = "/auth/signout";
        navbar.appendChild(signOut);
        
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

                    if (!res.ok) {
                        throw new Error("Failed to delete recipe");
                    }
                } catch (error) {
                    await getToast().toast("error", "Failed to delete recipe");
                    console.error(error);
                    return;
                }

                await getToast().toast("success", "Recipe deleted");
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
