import ListItem from "@components/listItem";
import { Ingredient, ElementType, Listeners, Component } from "@types";

class IngredientListItemInner extends Component {
    private ingredient: Ingredient;
    constructor(ingredient: Ingredient) {
        super();
        this.ingredient = ingredient;
    }

    public async render(
        rootElement: HTMLElement | undefined = undefined
    ): Promise<Element> {
        const element = document.createElement("div");
        element.classList.add("flex", "items-center", "gap-2");

        const quantity = document.createElement("span");
        quantity.textContent = this.ingredient.quantity.toString();
        element.appendChild(quantity);

        const unit = document.createElement("span");
        unit.textContent = this.ingredient.unit;
        element.appendChild(unit);

        const name = document.createElement("span");
        name.textContent = this.ingredient.name;
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

export default class IngredientListItem extends Component {
    private ingredient: Ingredient;

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

    constructor(ingredient: Ingredient) {
        super();
        this.ingredient = ingredient;
    }

    public async render(
        rootElement: HTMLElement | undefined = undefined
    ): Promise<Element> {
        const listItem = new ListItem(
            new IngredientListItemInner(this.ingredient)
        );

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
