import { Component } from "@types";
import { IconNode, createElement } from "lucide";

export default class Icon extends Component {
  private icon: IconNode;
  constructor(icon: IconNode) {
    super();
    this.icon = icon;
  }

  public async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
    const element = createElement(this.icon);
    element.classList.add("h-6", "w-6");

    if (rootElement) {
      rootElement.appendChild(element);
    }

    return element;
  }
}
