import { ElementType, Listeners, Recipe, RecipeInfo } from "../types.js";
import { rerender } from "./app.js";
import { Component } from "./component.js";
import InfoTabView from "./infoTabView.js";

interface SaveEvent extends Event {
    detail: Recipe;
}

type EventListeners = {
  save: Listeners<SaveEvent>;
};

enum View {
    Info,
    Ingredients,
    Steps,
}

export default class Editor extends Component {
    private eventListeners: EventListeners = {
        save: [],
      };
    
      on<
        E extends keyof EventListeners
      >(
        event: E,
        listener: ElementType<EventListeners[E]>
      ) {
        this.eventListeners[event].push(listener as any);
      }
      
    private view: View;

    private infoTabView: InfoTabView;

    private recipe: Recipe;
    
    constructor(recipe: Recipe) {
        super();

        const localActiveTab = sessionStorage.getItem("editorActiveTab");
        if (localActiveTab) {
            this.view = parseInt(localActiveTab);
            if (this.view < View.Info || this.view > View.Steps) {
                this.view = View.Info;
            }
        } else {
            this.view = View.Info;
        }

        const localRecipe = sessionStorage.getItem("editorRecipe");
        if (localRecipe) {
            try {
                this.recipe = JSON.parse(localRecipe);
            } catch (error) {
                this.recipe = recipe;
            }
        } else {
            this.recipe = recipe;
        }

        this.infoTabView = new InfoTabView(this.recipe.info);
        this.infoTabView.on("update", (event) => {
            this.recipe.info = event.detail;
            sessionStorage.setItem("editorRecipe", JSON.stringify(this.recipe));
        });
    }
    
    render(rootElement: HTMLElement | undefined = undefined): Element {
        sessionStorage.setItem("editorActiveTab", this.view.toString());
        console.log("editorActiveTab", this.view);
        const div = document.createElement("div");
        div.classList.add("flex", "flex-1", "h-full", "flex-col", "gap-4");

        const tabs = document.createElement("div");
        tabs.classList.add("tabs", "tabs-bordered");
        div.appendChild(tabs);

        const infoTab = document.createElement("a");
        infoTab.classList.add("tab");
        infoTab.textContent = "Info";
        const infoTabElement = tabs.appendChild(infoTab);
        infoTabElement.addEventListener("click", () => {
            this.view = View.Info;
            rerender();
        });

        const ingredientsTab = document.createElement("a");
        ingredientsTab.classList.add("tab");
        ingredientsTab.textContent = "Ingredients";
        const ingredientsTabElement = tabs.appendChild(ingredientsTab);
        ingredientsTabElement.addEventListener("click", () => {
            this.view = View.Ingredients;
            rerender();
        });

        const stepsTab = document.createElement("a");
        stepsTab.classList.add("tab");
        stepsTab.textContent = "Steps";
        const stepsTabElement = tabs.appendChild(stepsTab);
        stepsTabElement.addEventListener("click", () => {
            this.view = View.Steps;
            rerender();
        });

        switch (this.view) {
            case View.Info:
                infoTabElement.classList.add("tab-active");
                const info = this.infoTabView.render(div);
                break;
            case View.Ingredients:
                ingredientsTabElement.classList.add("tab-active");
                const ingredients = document.createElement("div");
                ingredients.textContent = "Ingredients";
                div.appendChild(ingredients);
                break;
            case View.Steps:
                stepsTabElement.classList.add("tab-active");
                const steps = document.createElement("div");
                steps.textContent = "Steps";
                div.appendChild(steps);
                break;
        }

        if (rootElement) {
            rootElement.appendChild(div);
        }

        return div;
    }
}
