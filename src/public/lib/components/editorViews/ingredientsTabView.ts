import { Ingredient } from "../../types.js";
import { Component } from "../component.js";
import { ElementType, Listeners } from "../../types.js";
import SortableList from "../sortableList.js";
import IngredientListItem from "../ingredientListItem.js";
import DeleteModal from "../deleteModal.js";
import { rerender } from "../../../app.js";

interface UpdateInfoEvent extends Event {
  detail: Ingredient[];
}

type EventListeners = {
  update: Listeners<UpdateInfoEvent>;
  save: Listeners<Event>;
};

export default class IngredientsTabView extends Component {
  private ingredients: Ingredient[];
  private activeDeleteIndex: number = 0;
  private deleteOpen: boolean = false;

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
      detail: this.ingredients,
    });
    this.eventListeners.update.forEach((listener) => listener(event));
  }

  constructor(ingredients: Ingredient[]) {
    super();
    this.ingredients = ingredients;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const element = document.createElement("div");
    element.classList.add("flex", "flex-col", "gap-4");

    const deleteModal = new DeleteModal();
    deleteModal.on("delete", (event) => {
      this.deleteOpen = false;
      this.ingredients.splice(this.activeDeleteIndex, 1);
      this.update();
      rerender();
    });

    deleteModal.on("cancel", (event) => {
      this.deleteOpen = false;
    });

    const deleteIngredient = () => {
      return deleteModal.show(this.ingredients[this.activeDeleteIndex]?.name || "", `Are you sure you want to delete ${this.ingredients[this.activeDeleteIndex]?.name}?`);
    }

    if (this.deleteOpen) {
      console.log("delete");
      deleteIngredient();
    }


    document.getElementById("ingredient-dialog")?.remove();

    const dialog = document.createElement("dialog");
    dialog.classList.add("modal");
    dialog.id = "ingredient-dialog";
    document.body.appendChild(dialog);

    const dialogBox = document.createElement("div");
    dialogBox.classList.add("modal-box", "w-11/12", "max-w-5xl", "flex", "flex-col", "gap-4", "p-4");
    dialog.appendChild(dialogBox);

    let editIndex = 0;
    let editing = false;

    const dialogTitle = document.createElement("h3");
    dialogTitle.classList.add("font-bold", "text-lg");
    dialogTitle.textContent = "Add Ingredient";
    dialogBox.appendChild(dialogTitle);

    const dialogContent = document.createElement("form");
    dialogContent.method = "dialog";
    dialogContent.classList.add("flex", "flex-col", "gap-4");
    dialogContent.addEventListener("submit", (event) => {
      event.preventDefault();
      const tempIngredient: Ingredient = {
        name: nameInput.value,
        quantity: parseFloat(quantityInput.value) || 0,
        unit: unitInput.value,
      };

      if (editing) {
        this.ingredients[editIndex] = tempIngredient;
        editing = false;
      } else {
        this.ingredients.push(tempIngredient);
      }

      this.update();
      rerender();
    });
    dialogBox.appendChild(dialogContent);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = "";
    nameInput.placeholder = "Name";
    nameInput.classList.add("input", "input-bordered", "w-full", "max-w-full");
    dialogContent.appendChild(nameInput);

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "0";
    quantityInput.step = "any";
    quantityInput.value = "0";
    quantityInput.placeholder = "Quantity";
    quantityInput.classList.add("input", "input-bordered", "w-full", "max-w-full");
    dialogContent.appendChild(quantityInput);

    const unitInput = document.createElement("input");
    unitInput.type = "text";
    unitInput.value = "";
    unitInput.placeholder = "Unit";
    unitInput.classList.add(
      "input",
      "input-bordered",
      "w-full",
      "max-w-full"
    );
    dialogContent.appendChild(unitInput);

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
    createButton.classList.add("btn", "btn-secondary", "w-full", "max-w-xl");
    createButton.textContent = "Add Ingredient";
    createButton.addEventListener("click", (event) => {
      editing = false;
      addButton.textContent = "Add";
      nameInput.value = "";
      quantityInput.value = "0";
      unitInput.value = "";
      dialog.showModal();
    });
    element.appendChild(createButton);
    
    const indexs = this.ingredients.map((ingredient, index) => index);
    const ingredients = this.ingredients.map((ingredient, index) => {
      const item = new IngredientListItem(ingredient);
      item.on("delete", (event) => {
        this.activeDeleteIndex = indexs.indexOf(index);
        this.deleteOpen = true;
        deleteIngredient();
      });

      item.on("edit", (event) => {
        editIndex = indexs.indexOf(index);
        editing = true;
        addButton.textContent = "Save";
        nameInput.value = ingredient.name;
        quantityInput.value = ingredient.quantity.toString();
        unitInput.value = ingredient.unit;
        dialog.showModal();
      });

      return item;
    });
    const sortableList = new SortableList(ingredients);
    sortableList.on("sort", (event) => {
      const item = this.ingredients.splice(event.oldIndex, 1)[0];
      this.ingredients.splice(event.newIndex, 0, item);

      const index = indexs.splice(event.oldIndex, 1)[0];
      indexs.splice(event.newIndex, 0, index);
      
      this.update();
    });
    sortableList.render(element);

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
