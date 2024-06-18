import { Pencil, Delete, GripVertical } from 'lucide';
import { Component } from './component.js';
import IconButton from './iconButton.js';
import Icon from './icon.js';


export default class ListItem extends Component {
    private inner: Component;
    constructor(inner: Component) {
        super();
        this.inner = inner;
    }

    render(rootElement: HTMLElement | undefined = undefined): Element {
    const element = document.createElement('div');
    element.classList.add('flex', 'items-center', 'p-2', 'border', 'border-neutral-content', 'rounded-md', 'shadow-sm', 'gap-4');
    
    const textDiv = document.createElement('div');
    textDiv.classList.add('flex-grow');
    element.appendChild(textDiv);
    this.inner.render(textDiv);

    const interactionDiv = document.createElement('div');
    interactionDiv.classList.add('flex', 'gap-4');
    element.appendChild(interactionDiv);

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('flex', 'gap-2');
    interactionDiv.appendChild(iconsDiv);
    

    const editButton = new IconButton(Pencil);
    editButton.render(iconsDiv);

    const deleteButton = new IconButton(Delete);
    deleteButton.render(iconsDiv);

    const gripDiv = document.createElement('div');
    gripDiv.classList.add('cursor-move', 'height-full', 'w-6', 'flex', 'items-center', 'justify-center');
    interactionDiv.appendChild(gripDiv);

    const gripIcon = new Icon(GripVertical);
    gripIcon.render(gripDiv).classList;


    if (rootElement) {
        rootElement.appendChild(element);
    }

    return element;
  }
}