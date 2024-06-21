import { RecipeInfo } from "../types.js";
import { Component } from "./component.js";
import InfoTabView from "./infoTabView.js";

const rerenderListeners: Array<() => void> = [];

export function rerender() {
  rerenderListeners.forEach(listener => listener());
}

enum View {
    Info,
    Ingredients,
    Steps,
}

const defaultRecipeInfo: RecipeInfo = {
    name: "Vanilla Ice Cream",
    description: "A very simple vanilla ice cream recipe. Based on the recipe from the amazing David Lebovitz.",
    yield: 2,
    yieldUnit: "pt",
};

export class App {
    private rootElement: HTMLElement;
    private view: View = View.Info;

    private infoTabView: InfoTabView;

    private recipeInfo: RecipeInfo;
    
    constructor(rootElement: HTMLElement) {
        this.rootElement = rootElement;

        const localRecipeInfo = sessionStorage.getItem("recipeInfo");
        if (localRecipeInfo) {
            try {
                this.recipeInfo = JSON.parse(localRecipeInfo);
            } catch (error) {
                this.recipeInfo = defaultRecipeInfo;
            }
        } else {
            this.recipeInfo = defaultRecipeInfo;
        }

        sessionStorage.setItem("recipeInfo", JSON.stringify(this.recipeInfo));

        this.infoTabView = new InfoTabView(this.recipeInfo);
        this.infoTabView.on("update", (event) => {
            this.recipeInfo = event.detail;
            sessionStorage.setItem("recipeInfo", JSON.stringify(this.recipeInfo));
        });

        rerenderListeners.push(() => this.render());
    }
    
    render() {
        this.rootElement.innerHTML = "";
        
        const div = document.createElement("div");
        div.classList.add("flex", "flex-1", "h-full", "flex-col", "gap-4", "p-4");
        this.rootElement.appendChild(div);

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
    }
}
