import { Component } from "./component.js";
import { IconNode, createElement } from 'lucide';

export default class Icon extends Component {
    private icon: IconNode;
    constructor(icon: IconNode) {
        super();
        this.icon = icon;
    }

    render(rootElement: HTMLElement): Element {
        const icon = createElement(this.icon);
        icon.classList.add('h-6', 'w-6');
        rootElement.appendChild(icon);

        return icon;
    }
}