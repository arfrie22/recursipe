import { Pencil, Delete, GripVertical } from "lucide";
import IconButton from "@components/iconButton";
import Icon from "@components/icon";
import { ElementType, Listeners, Component } from "@types";

type EventListeners = {
  edit: Listeners<Event>;
  delete: Listeners<Event>;
};

export default class ListItem extends Component {
  private inner: Component;
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

  constructor(inner: Component) {
    super();
    this.inner = inner;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const element = document.createElement("div");
    element.classList.add(
      "flex",
      "items-center",
      "p-2",
      "border",
      "border-neutral-content",
      "rounded-md",
      "shadow-sm",
      "gap-4"
    );

    const textDiv = document.createElement("div");
    textDiv.classList.add("flex-grow");
    element.appendChild(textDiv);
    this.inner.render(textDiv);

    const interactionDiv = document.createElement("div");
    interactionDiv.classList.add("flex", "gap-4");
    element.appendChild(interactionDiv);

    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("flex", "gap-2");
    interactionDiv.appendChild(iconsDiv);

    const editButton = new IconButton(Pencil).render(iconsDiv);
    interactionDiv.appendChild(editButton);
    editButton.addEventListener("click", (event) => {
      this.eventListeners.edit.forEach((listener) => {
        listener(event);
      });
    });

    const deleteButton = new IconButton(Delete).render(iconsDiv);
    interactionDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", (event) => {
      this.eventListeners.delete.forEach((listener) => {
        listener(event);
      });
    });

    const gripDiv = document.createElement("div");
    gripDiv.classList.add(
      "cursor-move",
      "height-full",
      "w-6",
      "flex",
      "items-center",
      "justify-center"
    );
    interactionDiv.appendChild(gripDiv);

    const gripIcon = new Icon(GripVertical);
    gripIcon.render(gripDiv).classList;

    if (rootElement) {
      rootElement.appendChild(element);
    }

    return element;
  }
}
