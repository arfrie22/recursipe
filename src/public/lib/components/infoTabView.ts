import { RecipeInfo } from "../types.js";
import { Component } from "./component.js";
import { ElementType, Listeners } from "../types.js";

interface UpdateInfoEvent extends Event {
  detail: RecipeInfo;
}

type EventListeners = {
  update: Listeners<UpdateInfoEvent>;
  save: Listeners<Event>;
};

export default class InfoTabView extends Component {
  private recipeInfo: RecipeInfo;

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
      detail: this.recipeInfo,
    });
    this.eventListeners.update.forEach((listener) => listener(event));
  }

  constructor(recipeInfo: RecipeInfo) {
    super();
    this.recipeInfo = recipeInfo;
  }

  updateInfo(recipeInfo: RecipeInfo) {
    this.recipeInfo = recipeInfo;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const element = document.createElement("form");
    element.classList.add("flex", "flex-col", "gap-4");
    element.addEventListener("submit", (event) => {
      event.preventDefault();
      this.eventListeners.save.forEach((listener) => listener(event));
    });

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = this.recipeInfo.name;
    nameInput.placeholder = "Name";
    nameInput.classList.add("input", "input-bordered", "w-full", "max-w-full");
    nameInput.addEventListener("input", (event) => {
      this.recipeInfo.name = (event.target as HTMLInputElement).value;
      this.update();
    });
    element.appendChild(nameInput);

    const descriptionInput = document.createElement("textarea");
    descriptionInput.rows = 4;
    descriptionInput.value = this.recipeInfo.description;
    descriptionInput.placeholder = "Description";
    descriptionInput.classList.add("textarea", "textarea-bordered", "w-full");
    descriptionInput.addEventListener("input", (event) => {
      this.recipeInfo.description = (event.target as HTMLTextAreaElement).value;
      this.update();
    });
    element.appendChild(descriptionInput);

    const yieldInput = document.createElement("input");
    yieldInput.type = "number";
    yieldInput.min = "0";
    yieldInput.step = "any";
    yieldInput.value = this.recipeInfo.yield.toString();
    yieldInput.placeholder = "Yield";
    yieldInput.classList.add("input", "input-bordered", "w-full", "max-w-full");
    yieldInput.addEventListener("input", (event) => {
      this.recipeInfo.yield = parseFloat(
        (event.target as HTMLInputElement).value
      );
      this.update();
    });
    element.appendChild(yieldInput);

    const yieldUnitInput = document.createElement("input");
    yieldUnitInput.type = "text";
    yieldUnitInput.value = this.recipeInfo.yieldUnit;
    yieldUnitInput.placeholder = "Yield Unit";
    yieldUnitInput.classList.add(
      "input",
      "input-bordered",
      "w-full",
      "max-w-full"
    );
    yieldUnitInput.addEventListener("input", (event) => {
      this.recipeInfo.yieldUnit = (event.target as HTMLInputElement).value;
      this.update();
    });
    element.appendChild(yieldUnitInput);

    const saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.textContent = "Save";
    saveButton.classList.add("btn", "btn-primary");
    element.appendChild(saveButton);

    if (rootElement) {
      rootElement.appendChild(element);
    }

    return element;
  }
}
