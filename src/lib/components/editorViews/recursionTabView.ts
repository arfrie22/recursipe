import {
    RecursiveIngredient,
    Component,
    ElementType,
    Listeners,
    RecipeCache,
} from "@types";
import SortableList from "@components/sortableList";
import RecursiveListItem from "@components/recursiveListItem";
import DeleteModal from "@components/deleteModal";
import { rerender } from "@lib";
import { getToast } from "@components/toast";

interface UpdateInfoEvent extends Event {
    detail: RecursiveIngredient[];
}

type EventListeners = {
    update: Listeners<UpdateInfoEvent>;
    save: Listeners<Event>;
};

export default class RecursionTabView extends Component {
    private recursiveIngredients: RecursiveIngredient[];
    private activeDeleteIndex: number = 0;
    private deleteOpen: boolean = false;

    private recipeCache: RecipeCache;

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
            detail: this.recursiveIngredients,
        });
        this.eventListeners.update.forEach((listener) => listener(event));
    }

    constructor(recursiveIngredients: RecursiveIngredient[], recipeCache: RecipeCache) {
        super();
        this.recursiveIngredients = recursiveIngredients;
        this.recipeCache = recipeCache;
    }

    public async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
        const element = document.createElement("div");
        element.classList.add("flex", "flex-col", "gap-4");

        const deleteModal = new DeleteModal();
        deleteModal.on("delete", (event) => {
            this.deleteOpen = false;
            this.recursiveIngredients.splice(this.activeDeleteIndex, 1);
            this.update();
            rerender();
        });

        deleteModal.on("cancel", (event) => {
            this.deleteOpen = false;
        });

        const getName = async (
            recursiveIngredient: RecursiveIngredient | undefined
        ): Promise<string | undefined> => {
            if (!recursiveIngredient) {
                return undefined;
            }

            const id = recursiveIngredient.id;

            try {
                return (await this.recipeCache.get(id)).name;
            } catch (error) {
                await getToast().toast("error", "Failed to get ingredient name");
                console.error(`Failed to get ingredient name: ${error}`);
            }
            return id.toString();
        }

        const deleteIngredient = async () => {
            const name = await getName(this.recursiveIngredients[this.activeDeleteIndex]);
            return deleteModal.show(
                name || "",
                `Are you sure you want to delete ${
                    name
                }?`
            );
        };

        if (this.deleteOpen) {
            deleteIngredient();
        }

        document.getElementById("ingredient-dialog")?.remove();

        const dialog = document.createElement("dialog");
        dialog.classList.add("modal");
        dialog.id = "ingredient-dialog";
        document.body.appendChild(dialog);

        const dialogBox = document.createElement("div");
        dialogBox.classList.add(
            "modal-box",
            "w-11/12",
            "max-w-5xl",
            "flex",
            "flex-col",
            "gap-4",
            "p-4"
        );
        dialog.appendChild(dialogBox);

        let editIndex = 0;
        let editing = false;

        const dialogTitle = document.createElement("h3");
        dialogTitle.classList.add("font-bold", "text-lg");
        dialogTitle.textContent = "Add Recursive Ingredient";
        dialogBox.appendChild(dialogTitle);

        const dialogContent = document.createElement("form");
        dialogContent.method = "dialog";
        dialogContent.classList.add("flex", "flex-col", "gap-4");
        dialogContent.addEventListener("submit", (event) => {
            event.preventDefault();
            const tempRecursiveIngredient: RecursiveIngredient = {
                id: parseInt(idInput.value) || 0,
                quantity: parseFloat(quantityInput.value) || 0,
            };

            if (editing) {
                this.recursiveIngredients[editIndex] = tempRecursiveIngredient;
                editing = false;
            } else {
                this.recursiveIngredients.push(tempRecursiveIngredient);
            }

            this.update();
            rerender();
        });
        dialogBox.appendChild(dialogContent);

        // TODO: Add a search bar to search for ingredients (typeahead)
        const idInput = document.createElement("input");
        idInput.type = "number";
        idInput.min = "0";
        idInput.value = "0";
        idInput.placeholder = "ID";
        idInput.classList.add(
            "input",
            "input-bordered",
            "w-full",
            "max-w-full"
        );
        dialogContent.appendChild(idInput);

        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = "0";
        quantityInput.step = "any";
        quantityInput.value = "0";
        quantityInput.placeholder = "Quantity";
        quantityInput.classList.add(
            "input",
            "input-bordered",
            "w-full",
            "max-w-full"
        );
        dialogContent.appendChild(quantityInput);

        const dialogAction = document.createElement("div");
        dialogAction.classList.add("modal-action", "flex", "gap-4");
        dialogContent.appendChild(dialogAction);

        const cancelButton = document.createElement("button");
        cancelButton.classList.add("btn", "btn-outline", "flex-1");
        cancelButton.textContent = "Cancel";
        dialogAction.appendChild(cancelButton);

        const addButton = document.createElement("button");
        addButton.textContent = "Add";
        addButton.type = "submit";
        addButton.classList.add("btn", "btn-primary", "flex-1");
        dialogAction.appendChild(addButton);

        const createButton = document.createElement("button");
        createButton.classList.add(
            "btn",
            "btn-secondary",
            "w-full",
            "max-w-xl"
        );
        createButton.textContent = "Add Recursive Ingredient";
        createButton.addEventListener("click", (event) => {
            editing = false;
            addButton.textContent = "Add";
            idInput.value = "0";
            quantityInput.value = "0";
            dialog.showModal();
        });
        element.appendChild(createButton);

        // Save index list to allow the buttons to find the correct index after sorting
        const indexs = this.recursiveIngredients.map((recursiveIngrediens, index) => index);
        const ingredients = this.recursiveIngredients.map((recursiveIngredient, index) => {
            const item = new RecursiveListItem(recursiveIngredient, this.recipeCache);
            item.on("delete", (event) => {
                this.activeDeleteIndex = indexs.indexOf(index);
                this.deleteOpen = true;
                deleteIngredient();
            });

            item.on("edit", (event) => {
                editIndex = indexs.indexOf(index);
                editing = true;
                addButton.textContent = "Save";
                idInput.value = recursiveIngredient.id.toString();
                quantityInput.value = recursiveIngredient.quantity.toString();
                dialog.showModal();
            });

            return item;
        });
        const sortableList = new SortableList(ingredients);
        sortableList.on("sort", (event) => {
            const item = this.recursiveIngredients.splice(event.oldIndex, 1)[0];
            this.recursiveIngredients.splice(event.newIndex, 0, item);

            const index = indexs.splice(event.oldIndex, 1)[0];
            indexs.splice(event.newIndex, 0, index);

            this.update();
        });
        await sortableList.render(element);

        const saveButton = document.createElement("button");
        saveButton.classList.add("btn", "btn-primary", "w-full");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", (event) => {
            this.eventListeners.save.forEach((listener) => listener(event));
        });
        element.appendChild(saveButton);

        if (rootElement) {
            rootElement.appendChild(element);
        }

        return element;
    }
}
