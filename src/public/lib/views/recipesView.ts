import { ElementType, Listeners, Recipe } from "../types.js";
import { rerender } from "../../app.js";
import { Component } from "../components/component.js";
import InfoTabView from "../components/infoTabView.js";
import RecipeCard from "../components/recipeCard.js";

interface CardEvent extends Event {
  detail: {
    index: number;
  };
}

type EventListeners = {
  edit: Listeners<CardEvent>;
  delete: Listeners<CardEvent>;
  new: Listeners<Event>;
};

export default class RecipesView extends Component {
  private eventListeners: EventListeners = {
    edit: [],
    delete: [],
    new: [],
  };

  on<E extends keyof EventListeners>(
    event: E,
    listener: ElementType<EventListeners[E]>
  ) {
    this.eventListeners[event].push(listener as any);
  }

  private recipes: Recipe[];

  constructor(recipes: Recipe[]) {
    super();

    this.recipes = recipes;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const div = document.createElement("div");
    div.classList.add(
      "grid",
      "gap-4",
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-3"
    );

    this.recipes.forEach((recipe, index) => {
      const card = new RecipeCard(recipe.info);
      card.on("edit", (event) => {
        this.eventListeners.edit.forEach((listener) =>
          listener(
            new CustomEvent("edit", {
              detail: {
                index,
              },
            })
          )
        );
      });

      card.on("delete", (event) => {
        this.eventListeners.delete.forEach((listener) =>
          listener(
            new CustomEvent("delete", {
              detail: {
                index,
              },
            })
          )
        );
      });

      card.render(div);
    });

    if (rootElement) {
      rootElement.appendChild(div);
    }

    return div;
  }
}
