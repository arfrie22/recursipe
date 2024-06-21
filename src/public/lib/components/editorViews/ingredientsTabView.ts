import { Ingredient } from "../../types.js";
import { Component } from "../component.js";
import { ElementType, Listeners } from "../../types.js";
import SortableList from "../sortableList.js";
import IngredientListItem from "../ingredientListItem.js";

interface UpdateInfoEvent extends Event {
  detail: Ingredient[];
}

type EventListeners = {
  update: Listeners<UpdateInfoEvent>;
  save: Listeners<Event>;
};

export default class IngredientsTabView extends Component {
  private ingredients: Ingredient[];

  private eventListeners: EventListeners = {
    update: [],
    save: [],
  };

  on<E extends keyof EventListeners>(
    event: E,
    listener: ElementType<EventListeners[E]>
  ) {
    this.eventListeners[event].push(listener as any);
  }

  private update() {
    const event = new CustomEvent("update", {
      detail: this.ingredients,
    });
    this.eventListeners.update.forEach((listener) => listener(event));
  }

  constructor(ingredients: Ingredient[]) {
    super();
    this.ingredients = ingredients;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const element = document.createElement("div");
    element.classList.add("flex", "flex-col", "gap-4");

    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary", "w-full");
    button.textContent = "Save";
    button.addEventListener("click", (event) => {
      this.eventListeners.save.forEach((listener) => listener(event));
    });
    element.appendChild(button);

    
    const ingredients = this.ingredients.map((ingredient) => new IngredientListItem(ingredient));
    const sortableList = new SortableList(ingredients);
    // sortableList.on("update", (event) => {
    //   this.ingredients = event.detail;
    //   this.update();
    // });
    sortableList.render(element);
    
    if (rootElement) {
      rootElement.appendChild(element);
    }

    return element;
  }
}
