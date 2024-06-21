export abstract class Component {
  public render(rootElement: HTMLElement | undefined = undefined): Element {
    return document.createElement("div");
  }
}
