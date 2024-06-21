import { Ingredient } from "../types.js";
import { Component } from "./component.js";
import ListItem from "./listItem.js";
import { ElementType, Listeners } from "../types.js";

class IngredientListItemInner extends Component {
  private ingredient: Ingredient;
  constructor(ingredient: Ingredient) {
    super();
    this.ingredient = ingredient;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const element = document.createElement("div");
    element.classList.add("flex", "items-center", "justify-between");

    const name = document.createElement("span");
    name.textContent = this.ingredient.name;
    element.appendChild(name);

    const quantity = document.createElement("span");
    quantity.textContent = this.ingredient.quantity.toString();
    element.appendChild(quantity);

    if (rootElement) {
      rootElement.appendChild(element);
    }

    return element;
  }
}

type EventListeners = {
  edit: Listeners<Event>;
  delete: Listeners<Event>;
};

export default class IngredientListItem extends Component {
  private ingredient: Ingredient;

  private eventListeners: EventListeners = {
    edit: [],
    delete: [],
  };

  on(
    event: keyof EventListeners,
    listener: ElementType<EventListeners[keyof EventListeners]>
  ) {
    this.eventListeners[event].push(listener);
  }

  constructor(ingredient: Ingredient) {
    super();
    this.ingredient = ingredient;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const listItem = new ListItem(new IngredientListItemInner(this.ingredient));

    const element = listItem.render(rootElement);
    listItem.on("edit", () => {
      this.eventListeners.edit.forEach((listener) =>
        listener(new Event("edit"))
      );
    });

    listItem.on("delete", () => {
      this.eventListeners.delete.forEach((listener) =>
        listener(new Event("delete"))
      );
    });
    
    return element;
  }
}
