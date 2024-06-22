import { ElementType, Listeners } from "../types.js";

type EventListeners = {
  delete: Listeners<Event>;
  cancel: Listeners<Event>;
};

export default class DeleteModal {
  private eventListeners: EventListeners = {
    delete: [],
    cancel: [],
  };

  on<E extends keyof EventListeners>(
    event: E,
    listener: ElementType<EventListeners[E]>
  ) {
    this.eventListeners[event].push(listener);
  }

  constructor() {}

  show(name: string, description: string): HTMLDialogElement {
    const dialog = document.createElement("dialog");
    dialog.classList.add("modal");
    document.body.appendChild(dialog);
    dialog.addEventListener("close", () => {
      dialog.remove();
    });

    const dialogBox = document.createElement("div");
    dialogBox.classList.add("modal-box");
    dialog.appendChild(dialogBox);

    const dialogTitle = document.createElement("h3");
    dialogTitle.classList.add("font-bold", "text-lg");
    dialogTitle.textContent = `Delete ${name}?`;
    dialogBox.appendChild(dialogTitle);

    const dialogContent = document.createElement("p");
    dialogContent.classList.add("py-4");
    dialogContent.textContent = description;
    dialogBox.appendChild(dialogContent);

    const dialogAction = document.createElement("div");
    dialogAction.classList.add("modal-action");
    dialogBox.appendChild(dialogAction);

    const dialogForm = document.createElement("form");
    dialogForm.classList.add("flex", "gap-4", "w-full");
    dialogForm.method = "dialog";
    dialogAction.appendChild(dialogForm);

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("btn", "btn-outline", "flex-1");
    cancelButton.textContent = "Cancel";
    dialogForm.appendChild(cancelButton);
    cancelButton.addEventListener("click", (event) => {
      this.eventListeners.cancel.forEach((listener) => listener(event));
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-error", "flex-1");
    deleteButton.textContent = "Delete";
    dialogForm.appendChild(deleteButton);
    deleteButton.addEventListener("click", (event) => {
      this.eventListeners.delete.forEach((listener) => listener(event));
    });

    dialog.showModal();

    return dialog;
  }
}
