import { Component, ElementType, Listeners, Recipe } from "@types";
import RecipeCard from "@components/recipeCard";

interface CardEvent extends Event {
  detail: {
    recipe: Recipe;
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

  public async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
    const div = document.createElement("div");
    div.classList.add("flex", "flex-col", "gap-4");

    const grid = document.createElement("div");
    grid.classList.add(
      "grid",
      "flex-1",
      "center-content",
      "justify-items-center",
      "gap-4",
      "grid-cols-1",
      "lg:grid-cols-2",
      "xl:grid-cols-3"
    );
    div.appendChild(grid);

    // Add new recipe card with event listeners
    for (const recipe of this.recipes) {
      const card = new RecipeCard(recipe.info());
      card.on("edit", (event) => {
        this.eventListeners.edit.forEach((listener) =>
          listener(
            new CustomEvent("edit", {
              detail: {
                recipe,
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
                recipe,
              },
            })
          )
        );
      });

      await card.render(grid);
    }

    if (rootElement) {
      rootElement.appendChild(div);
    }

    return div;
  }
}
