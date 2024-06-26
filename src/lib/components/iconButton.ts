import { IconNode } from "lucide";
import Icon from "@components/icon";
import { ElementType, Listeners, Component } from "@types";

type EventListeners = {
  click: Listeners<Event>;
};

export default class IconButton extends Component {
  private eventListeners: EventListeners = {
    click: [],
  };

  on<E extends keyof EventListeners>(
    event: E,
    listener: ElementType<EventListeners[E]>
  ) {
    this.eventListeners[event].push(listener);
  }

  private icon: IconNode;
  constructor(icon: IconNode) {
    super();
    this.icon = icon;
  }

  public async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
    const element = document.createElement("button");
    element.classList.add("btn", "btn-square", "btn-outline");
    element.addEventListener("click", (event) => {
      this.eventListeners.click.forEach((listener) => listener(event));
    });

    const icon = await new Icon(this.icon).render(element);

    if (rootElement) {
      rootElement.appendChild(element);
    }

    return element;
  }
}
