import { ElementType, Listeners } from "@types";
import Icon from "./icon";
import { CircleCheck, CircleX, Info, TriangleAlert } from "lucide";
// <div class="toast toast-top toast-start">
//   <div class="alert alert-info">
//     <span>New mail arrived.</span>
//   </div>
//   <div class="alert alert-success">
//     <span>Message sent successfully.</span>
//   </div>
// </div>

export type ToastStatus = "info" | "success" | "warning" | "error";

const altertStatusClasses: Record<ToastStatus, string> = {
    info: "alert-info",
    success: "alert-success",
    warning: "alert-warning",
    error: "alert-error",
};

export default class Toast {
    private toastHolder: HTMLElement;

    constructor() {
        const toastHolder = document.createElement("div");
        toastHolder.classList.add("toast", "toast-top", "toast-center");
        document.body.appendChild(toastHolder);

        this.toastHolder = toastHolder;
    }

    private getIcon(status: ToastStatus) {
        switch (status) {
            case "info":
                return new Icon(Info);
            case "success":
                return new Icon(CircleCheck);
            case "warning":
                return new Icon(TriangleAlert);
            case "error":
                return new Icon(CircleX);
        }
    }

    async toast(status: ToastStatus, text: string) {
        const alert = document.createElement("div");
        alert.classList.add("alert", `${altertStatusClasses[status]}`, "animate-fade-down", "animate-once");
        const icon = this.getIcon(status);
        await icon.render(alert);
        const span = document.createElement("span");
        span.textContent = text;
        alert.appendChild(span);
        this.toastHolder.appendChild(alert);

        let initalized = false;

        alert.onanimationend = () => {
            if (initalized) {
                alert.remove();
            } else {
                alert.classList.remove("animate-fade-down", "animate-once");
                setTimeout(() => {
                    initalized = true;
                    alert.classList.add("animate-reverse", "animate-fade-down", "animate-once");
                }, 5000);
            }
        }
    }
}

const toast = new Toast();
export function getToast() {
    return toast;
}