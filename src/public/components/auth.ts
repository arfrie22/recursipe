import { Component } from "./component.js";

export class SignInButton extends Component {
    constructor() {
        super();
    }

    render(element: HTMLElement): void {
        const form = document.createElement("form");
        form.action = "/auth/signin";
        form.method = "GET";

        const button = document.createElement("button");
        button.className = "btn btn-primary";
        button.type = "submit";
        button.innerText = "Signin";
        form.appendChild(button);

        element.appendChild(form);
    }
}

export class SignOutButton extends Component {
    constructor() {
        super();
    }

    render(element: HTMLElement): void {
        const form = document.createElement("form");
        form.action = "/auth/signout";
        form.method = "GET";

        const button = document.createElement("button");
        button.className = "btn btn-primary";
        button.type = "submit";
        button.innerText = "Signout";
        form.appendChild(button);

        element.appendChild(form);
    }
}