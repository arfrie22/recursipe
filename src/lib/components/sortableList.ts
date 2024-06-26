import { Component, ElementType, Listeners } from "@types";
import { Sortable, Plugins, SortableSortedEvent } from "@shopify/draggable";

type EventListeners = {
  sort: Listeners<SortableSortedEvent>;
};

export default class SortableList extends Component {
  private items: Component[];

  private eventListeners: EventListeners = {
    sort: [],
  };

  on<E extends keyof EventListeners>(
    event: E,
    listener: ElementType<EventListeners[E]>
  ) {
    this.eventListeners[event].push(listener);
  }

  constructor(items: Component[]) {
    super();
    this.items = items;
  }

  public async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
    const element = document.createElement("ul");
    element.classList.add(
      "flex",
      "items-center",
      "p-2",
      "flex-col",
      "border",
      "border-neutral",
      "rounded-md",
      "shadow-sm",
      "gap-4",
      "w-full"
    );

    for (const item of this.items) {
      const listItem = document.createElement("li");
      listItem.classList.add("flex", "flex-1", "w-full", "bg-neutral");
      element.appendChild(listItem);

      const renderedItem = await item.render(listItem);
      renderedItem.classList.add("flex-1", "w-full");
    }

    const sortable = new Sortable(element, {
      draggable: "li",
      plugins: [Plugins.SortAnimation],
      handle: ".cursor-move",
    });

    sortable.on("sortable:sorted", (evt) => {
      this.eventListeners.sort.forEach((element) => {
        element(evt);
      });
    });

    if (rootElement) {
      rootElement.appendChild(element);
    }

    return element;
  }
}
