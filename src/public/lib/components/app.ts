import { Recipe, RecipeInfo } from "../types.js";
import { Component } from "./component.js";
import Editor from "./editor.js";
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

const defaultRecipe: Recipe = {
    info: {
        name: "Vanilla Ice Cream",
        description: "A very simple vanilla ice cream recipe. Based on the recipe from the amazing David Lebovitz.",
        yield: 2,
        yieldUnit: "pt",
    },
    ingredients: [],
    steps: [],
};

export class App {
    private rootElement: HTMLElement;
    private activeRecipe: Recipe | null;
    private editor: Editor;

    constructor(rootElement: HTMLElement) {
        this.rootElement = rootElement;

        this.activeRecipe = defaultRecipe;
        this.editor = new Editor(this.activeRecipe);

        rerenderListeners.push(() => this.render());
    }
    
    render() {
        this.rootElement.innerHTML = "";
        
        const div = document.createElement("div");
        div.classList.add("flex", "flex-1", "h-full", "flex-col", "gap-4", "p-4");
        this.rootElement.appendChild(div);

        const editorElement = this.editor.render(div);
    }
}
