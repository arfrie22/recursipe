import { Component, Step, TimeType, ElementType, Listeners } from "@types";
import ListItem from "@components/listItem";
import Icon from "@components/icon";
import { Carrot, CookingPot, IconNode, Timer } from "lucide";

class StepListItemInner extends Component {
  private step: Step;
  constructor(step: Step) {
    super();
    this.step = step;
  }

  public async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
    const element = document.createElement("div");
    element.classList.add("flex", "items-center", "justify-between");

    const name = document.createElement("span");
    name.textContent = this.step.direction;
    element.appendChild(name);

    const time = document.createElement("div");
    time.classList.add("flex", "gap-4");
    element.appendChild(time);

    const timeValue = document.createElement("span");
    // Time is in seconds, convert to xx:xx format or xx:xx:xx format
    const hours = Math.floor(this.step.time / 3600);
    const hoursString = hours > 0 ? `${hours}:` : "";
    const minutes = Math.floor((this.step.time % 3600) / 60);
    const minutesString =
      hours > 0 ? minutes.toString().padStart(2, "0") : minutes.toString();
    const seconds = this.step.time % 60;
    const secondsString = seconds.toString().padStart(2, "0");
    timeValue.textContent = `${hoursString}${minutesString}:${secondsString}`;
    time.appendChild(timeValue);

    let cookingIcon: IconNode;
    switch (this.step.timeType) {
      case TimeType.Cooking:
        cookingIcon = CookingPot;
        break;
      case TimeType.Preparation:
        cookingIcon = Carrot;
        break;
      case TimeType.Waiting:
        cookingIcon = Timer;
        break;
    }

    const icon = new Icon(cookingIcon);
    await icon.render(time);

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

  on<E extends keyof EventListeners>(
    event: E,
    listener: ElementType<EventListeners[E]>
  ) {
    this.eventListeners[event].push(listener);
  }

  constructor(step: Step) {
    super();
    this.step = step;
  }

  public async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
    const listItem = new ListItem(new StepListItemInner(this.step));
    const element = await listItem.render(rootElement);
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
