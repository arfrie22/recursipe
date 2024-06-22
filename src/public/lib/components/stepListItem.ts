import { Step } from "../types.js";
import { Component } from "./component.js";
import ListItem from "./listItem.js";
import { ElementType, Listeners } from "../types.js";

class StepListItemInner extends Component {
  private step: Step;
  constructor(step: Step) {
    super();
    this.step = step;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const element = document.createElement("div");
    element.classList.add("flex", "items-center", "justify-between");

    const name = document.createElement("span");
    name.textContent = this.step.direction;
    element.appendChild(name);

    const quantity = document.createElement("span");
    quantity.textContent = this.step.time.toString();
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

export default class StepListItem extends Component {
  private step: Step;

  private eventListeners: EventListeners = {
    edit: [],
    delete: [],
  };

  on<
    E extends keyof EventListeners
  >(
    event: E,
    listener: ElementType<EventListeners[E]>
  ) {
    this.eventListeners[event].push(listener);
  }

  constructor(step: Step) {
    super();
    this.step = step;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const listItem = new ListItem(new StepListItemInner(this.step));
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
