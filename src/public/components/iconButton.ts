import { Component } from "./component.js";
import { IconNode } from 'lucide';
import Icon from "./icon.js";

export default class IconButton extends Component {
    private icon: IconNode;
    constructor(icon: IconNode) {
        super();
        this.icon = icon;
    }

    render(rootElement: HTMLElement | undefined = undefined): Element {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-square', 'btn-outline');

        const icon = new Icon(this.icon).render(button);
        button.appendChild(icon);

        if (rootElement) {
            rootElement.appendChild(button);
        }

        return button;
    }
}