import ListItem from "@components/listItem";
import { RecursiveIngredient, ElementType, Listeners, Component } from "@types";

class RecursiveListItemInner extends Component {
    private recursiveIngredient: RecursiveIngredient;
  constructor(recursiveIngredient: RecursiveIngredient) {
    super();
    this.recursiveIngredient = recursiveIngredient;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const element = document.createElement("div");
    element.classList.add("flex", "items-center", "gap-2");

    const quantity = document.createElement("span");
    quantity.textContent = this.recursiveIngredient.quantity.toString();
    element.appendChild(quantity);

    const name = document.createElement("span");
    name.textContent = this.recursiveIngredient.id.toString();
    element.appendChild(name);

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

export default class RecursiveListItem extends Component {
  private recursiveIngredient: RecursiveIngredient;

  private eventListeners: EventListeners = {
    edit: [],
    delete: [],
  };

  on<E extends keyof EventListeners>(
    event: E,
    listener: ElementType<EventListeners[E]>
  ) {
    this.eventListeners[event].push(listener);
  }

  constructor(recursiveIngredient: RecursiveIngredient) {
    super();
    this.recursiveIngredient = recursiveIngredient;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const listItem = new ListItem(new RecursiveListItemInner(this.recursiveIngredient));

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
