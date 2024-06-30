import ListItem from "@components/listItem";
import {
    RecursiveIngredient,
    ElementType,
    Listeners,
    Component,
    RecipeCache,
} from "@types";
import { getToast } from "./toast";

class RecursiveListItemInner extends Component {
    private recursiveIngredient: RecursiveIngredient;
    private recipeCache: RecipeCache
    
    constructor(recursiveIngredient: RecursiveIngredient, recipeCache: RecipeCache) {
        super();
        this.recursiveIngredient = recursiveIngredient;
        this.recipeCache = recipeCache;
    }

    private getRecipeName = async () => {
        try {
            return await this.recipeCache.get(this.recursiveIngredient.id).then(recipe => recipe.name);
        } catch (error) {
            console.error(error);
            await getToast().toast("error", "Failed to get recipe name");
            return "";
        }
    }

    async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
        const element = document.createElement("div");
        element.classList.add("flex", "items-center", "gap-2");

        const quantity = document.createElement("span");
        quantity.textContent = this.recursiveIngredient.quantity.toString();
        element.appendChild(quantity);

        const name = document.createElement("span");
        name.textContent = await this.getRecipeName();
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

export default class RecursiveListItem extends Component {
    private recursiveIngredient: RecursiveIngredient;
    private recipeCache: RecipeCache;

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

    constructor(
        recursiveIngredient: RecursiveIngredient,
        recipeCache: RecipeCache
    ) {
        super();
        this.recursiveIngredient = recursiveIngredient;
        this.recipeCache = recipeCache;
    }

    public async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
        const listItem = new ListItem(
            new RecursiveListItemInner(this.recursiveIngredient, this.recipeCache)
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
