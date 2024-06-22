import { ElementType, Listeners, Recipe } from "../types.js";
import { rerender } from "../../app.js";
import { Component } from "../components/component.js";
import InfoTabView from "../components/editorViews/infoTabView.js";
import IngredientsTabView from "../components/editorViews/ingredientsTabView.js";

interface SaveEvent extends Event {
  detail: Recipe;
}

type EventListeners = {
  save: Listeners<SaveEvent>;
  cancel: Listeners<Event>;
};

enum View {
  Info,
  Ingredients,
  Recursion,
  Steps,
}

export default class Editor extends Component {
  private eventListeners: EventListeners = {
    save: [],
    cancel: [],
  };

  on<E extends keyof EventListeners>(
    event: E,
    listener: ElementType<EventListeners[E]>
  ) {
    this.eventListeners[event].push(listener as any);
  }

  private view: View;

  private infoTabView: InfoTabView;
  private ingredientsTabView: IngredientsTabView;

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

    const save = () => {
        this.eventListeners.save.forEach((listener) =>
            listener(
                new CustomEvent("save", {
                detail: this.recipe,
                })
            )
        );
    }

    this.infoTabView = new InfoTabView(this.recipe.info);
    this.infoTabView.on("update", (event) => {
      this.recipe.info = event.detail;
      sessionStorage.setItem("editorRecipe", JSON.stringify(this.recipe));
    });

    this.infoTabView.on("save", (event) => {
        save();
    });

    this.ingredientsTabView = new IngredientsTabView(this.recipe.ingredients);
    this.ingredientsTabView.on("update", (event) => {
      this.recipe.ingredients = event.detail;
      sessionStorage.setItem("editorRecipe", JSON.stringify(this.recipe));
    });

    this.ingredientsTabView.on("save", (event) => {
        save();
    });
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    sessionStorage.setItem("editorActiveTab", this.view.toString());
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

    const recursionTab = document.createElement("a");
    recursionTab.classList.add("tab", "tab-disabled");
    recursionTab.textContent = "Recursion";
    const recursionTabElement = tabs.appendChild(recursionTab);
    recursionTabElement.addEventListener("click", () => {
    //   this.view = View.Recursion;
    //   rerender();
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
        const ingredients = this.ingredientsTabView.render(div);
        break;
    case View.Recursion:
        recursionTabElement.classList.add("tab-active");
        const recursion = document.createElement("div");
        recursion.textContent = "Recursion";
        div.appendChild(recursion);
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
