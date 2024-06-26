import { Pencil, Delete } from "lucide";
import IconButton from "@components/iconButton";
import { Component, ElementType, Listeners, RecipeInfo } from "@types";

type EventListeners = {
  edit: Listeners<Event>;
  delete: Listeners<Event>;
};

export default class RecipeCard extends Component {
  private recipeInfo: RecipeInfo;
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

  constructor(recipeInfo: RecipeInfo) {
    super();
    this.recipeInfo = recipeInfo;
  }

  public async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
    const element = document.createElement("div");
    element.classList.add(
      "card",
      "card-compact",
      "w-96",
      "bg-base-100",
      "shadow-xl"
    );

    const figure = document.createElement("figure");
    element.appendChild(figure);

    const img = document.createElement("img");
    img.src = this.recipeInfo.photo || "https://placehold.co/600x400/EEE/31343C";
    img.alt = this.recipeInfo.name;
    figure.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    element.appendChild(cardBody);

    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = this.recipeInfo.name;
    cardBody.appendChild(title);

    const description = document.createElement("p");
    description.textContent = this.recipeInfo.description;
    cardBody.appendChild(description);

    const cardActions = document.createElement("div");
    cardActions.classList.add("card-actions", "justify-end");
    cardBody.appendChild(cardActions);

    const editButton = await new IconButton(Pencil).render(cardActions);
    editButton.addEventListener("click", (event) => {
      this.eventListeners.edit.forEach((listener) => listener(event));
    });

    const deleteButton = await new IconButton(Delete).render(cardActions);
    deleteButton.addEventListener("click", (event) => {
      this.eventListeners.delete.forEach((listener) => listener(event));
    });

    if (rootElement) {
      rootElement.appendChild(element);
    }

    return element;
  }
}
