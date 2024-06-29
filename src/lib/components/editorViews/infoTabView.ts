import { getToast } from "@components/toast";
import {
    RecipeInfo,
    Component,
    ElementType,
    Listeners,
    UploadResponseData,
} from "@types";
import Dropzone from "dropzone";

interface UpdateInfoEvent extends Event {
    detail: RecipeInfo;
}

type EventListeners = {
    update: Listeners<UpdateInfoEvent>;
    save: Listeners<Event>;
};

export default class InfoTabView extends Component {
    private recipeInfo: RecipeInfo;

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
            detail: this.recipeInfo,
        });
        this.eventListeners.update.forEach((listener) => listener(event));
    }

    constructor(recipeInfo: RecipeInfo) {
        super();
        this.recipeInfo = recipeInfo;
    }

    public async render(
        rootElement: HTMLElement | undefined = undefined
    ): Promise<Element> {
        const element = document.createElement("form");
        element.classList.add("flex", "flex-col", "gap-4");
        element.addEventListener("submit", (event) => {
            event.preventDefault();
            this.eventListeners.save.forEach((listener) => listener(event));
        });

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = this.recipeInfo.name;
        nameInput.placeholder = "Name";
        nameInput.classList.add(
            "input",
            "input-bordered",
            "w-full",
            "max-w-full"
        );
        nameInput.addEventListener("input", (event) => {
            this.recipeInfo.name = (event.target as HTMLInputElement).value;
            this.update();
        });
        element.appendChild(nameInput);

        const descriptionInput = document.createElement("textarea");
        descriptionInput.rows = 4;
        descriptionInput.value = this.recipeInfo.description;
        descriptionInput.placeholder = "Description";
        descriptionInput.classList.add(
            "textarea",
            "textarea-bordered",
            "w-full"
        );
        descriptionInput.addEventListener("input", (event) => {
            this.recipeInfo.description = (
                event.target as HTMLTextAreaElement
            ).value;
            this.update();
        });
        element.appendChild(descriptionInput);

        // Image
        let dropzoneContiner = document.createElement("div");
        dropzoneContiner.classList.add(
            "w-full",
            "max-w-full",
            "h-64",
            "border",
            "border-dashed",
            "border-gray-300",
            "rounded-lg"
        );
        let dropzone = new Dropzone(dropzoneContiner, {
            url: "/api/photo",
            paramName: "image",
            maxFiles: 1,
            acceptedFiles: "image/*",
        });

        dropzone.on("success", async (file, response) => {
            await getToast().toast("success", "Image uploaded successfully");
            const res = response as UploadResponseData;
            this.recipeInfo.photo = res.path;
            this.update();
        });

        dropzone.on("addedfile", (file) => {
            console.log(`File added: ${file.name}`);
        });
        element.appendChild(dropzoneContiner);

        const yieldInput = document.createElement("input");
        yieldInput.type = "number";
        yieldInput.min = "0";
        yieldInput.step = "any";
        yieldInput.value = this.recipeInfo.yield.toString();
        yieldInput.placeholder = "Yield";
        yieldInput.classList.add(
            "input",
            "input-bordered",
            "w-full",
            "max-w-full"
        );
        yieldInput.addEventListener("input", (event) => {
            this.recipeInfo.yield = parseFloat(
                (event.target as HTMLInputElement).value
            );
            this.update();
        });
        element.appendChild(yieldInput);

        const yieldUnitInput = document.createElement("input");
        yieldUnitInput.type = "text";
        yieldUnitInput.value = this.recipeInfo.yieldUnit;
        yieldUnitInput.placeholder = "Yield Unit";
        yieldUnitInput.classList.add(
            "input",
            "input-bordered",
            "w-full",
            "max-w-full"
        );
        yieldUnitInput.addEventListener("input", (event) => {
            this.recipeInfo.yieldUnit = (
                event.target as HTMLInputElement
            ).value;
            this.update();
        });
        element.appendChild(yieldUnitInput);

        const saveButton = document.createElement("button");
        saveButton.type = "submit";
        saveButton.textContent = "Save";
        saveButton.classList.add("btn", "btn-primary");
        element.appendChild(saveButton);

        dropzone.on("addedfiles", (files) => {
            saveButton.disabled = true;
        });

        dropzone.on("success", (file) => {
            saveButton.disabled = false;
        });

        if (rootElement) {
            rootElement.appendChild(element);
        }

        return element;
    }
}
