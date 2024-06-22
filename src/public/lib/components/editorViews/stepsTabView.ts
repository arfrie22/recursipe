import { Step } from "../../types.js";
import { Component } from "../component.js";
import { ElementType, Listeners } from "../../types.js";
import SortableList from "../sortableList.js";
import DeleteModal from "../deleteModal.js";
import { rerender } from "../../../app.js";
import StepListItem from "../stepListItem.js";

interface UpdateInfoEvent extends Event {
  detail: Step[];
}

type EventListeners = {
  update: Listeners<UpdateInfoEvent>;
  save: Listeners<Event>;
};

export default class StepsTabView extends Component {
  private steps: Step[];
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
      detail: this.steps,
    });
    this.eventListeners.update.forEach((listener) => listener(event));
  }

  constructor(steps: Step[]) {
    super();
    this.steps = steps;
  }

  render(rootElement: HTMLElement | undefined = undefined): Element {
    const element = document.createElement("div");
    element.classList.add("flex", "flex-col", "gap-4");

    const deleteModal = new DeleteModal();
    deleteModal.on("delete", (event) => {
      this.deleteOpen = false;
      this.steps.splice(this.activeDeleteIndex, 1);
      this.update();
      rerender();
    });

    deleteModal.on("cancel", (event) => {
      this.deleteOpen = false;
    });

    const deleteStep = () => {
      return deleteModal.show("this", `Are you sure you want to delete ${this.steps[this.activeDeleteIndex]?.direction}?`);
    }

    if (this.deleteOpen) {
      console.log("delete");
      deleteStep();
    }


    document.getElementById("step-dialog")?.remove();

    const dialog = document.createElement("dialog");
    dialog.classList.add("modal");
    dialog.id = "step-dialog";
    document.body.appendChild(dialog);

    const dialogBox = document.createElement("div");
    dialogBox.classList.add("modal-box", "w-11/12", "max-w-5xl", "flex", "flex-col", "gap-4", "p-4");
    dialog.appendChild(dialogBox);

    let editIndex = 0;
    let editing = false;

    const dialogTitle = document.createElement("h3");
    dialogTitle.classList.add("font-bold", "text-lg");
    dialogTitle.textContent = "Add Step";
    dialogBox.appendChild(dialogTitle);

    const dialogContent = document.createElement("form");
    dialogContent.method = "dialog";
    dialogContent.classList.add("flex", "flex-col", "gap-4");
    dialogContent.addEventListener("submit", (event) => {
      event.preventDefault();
      const tempStep: Step = {
        name: nameInput.value,
        quantity: parseFloat(quantityInput.value) || 0,
        unit: unitInput.value,
      };

      if (editing) {
        this.steps[editIndex] = tempStep;
        editing = false;
      } else {
        this.steps.push(tempStep);
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
    createButton.textContent = "Add Step";
    createButton.addEventListener("click", (event) => {
      editing = false;
      addButton.textContent = "Add";
      nameInput.value = "";
      quantityInput.value = "0";
      unitInput.value = "";
      dialog.showModal();
    });
    element.appendChild(createButton);
    
    const indexs = this.steps.map((step, index) => index);
    const steps = this.steps.map((step, index) => {
      const item = new StepListItem(step);
      item.on("delete", (event) => {
        this.activeDeleteIndex = indexs.indexOf(index);
        this.deleteOpen = true;
        deleteStep();
      });

      item.on("edit", (event) => {
        editIndex = indexs.indexOf(index);
        editing = true;
        addButton.textContent = "Save";
        nameInput.value = step.name;
        quantityInput.value = step.quantity.toString();
        unitInput.value = step.unit;
        dialog.showModal();
      });

      return item;
    });
    const sortableList = new SortableList(steps);
    sortableList.on("sort", (event) => {
      const item = this.steps.splice(event.oldIndex, 1)[0];
      this.steps.splice(event.newIndex, 0, item);

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
