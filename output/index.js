/**
 * @license lucide v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const createElement = (tag, attrs, children = []) => {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.keys(attrs).forEach((name) => {
    element.setAttribute(name, String(attrs[name]));
  });
  if (children.length) {
    children.forEach((child) => {
      const childElement = createElement(...child);
      element.appendChild(childElement);
    });
  }
  return element;
};
var createElement$1 = ([tag, attrs, children]) => createElement(tag, attrs, children);

/**
 * @license lucide v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

/**
 * @license lucide v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m12 19-7-7 7-7" }],
    ["path", { d: "M19 12H5" }]
  ]
];

/**
 * @license lucide v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Carrot = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
      }
    ],
    ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }],
    ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" }]
  ]
];

/**
 * @license lucide v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CookingPot = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 12h20" }],
    ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }],
    ["path", { d: "m4 8 16-4" }],
    ["path", { d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }]
  ]
];

/**
 * @license lucide v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Delete = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" }],
    ["line", { x1: "18", x2: "12", y1: "9", y2: "15" }],
    ["line", { x1: "12", x2: "18", y1: "9", y2: "15" }]
  ]
];

/**
 * @license lucide v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const GripVertical = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "9", cy: "12", r: "1" }],
    ["circle", { cx: "9", cy: "5", r: "1" }],
    ["circle", { cx: "9", cy: "19", r: "1" }],
    ["circle", { cx: "15", cy: "12", r: "1" }],
    ["circle", { cx: "15", cy: "5", r: "1" }],
    ["circle", { cx: "15", cy: "19", r: "1" }]
  ]
];

/**
 * @license lucide v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Pencil = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
      }
    ],
    ["path", { d: "m15 5 4 4" }]
  ]
];

/**
 * @license lucide v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Plus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 12h14" }],
    ["path", { d: "M12 5v14" }]
  ]
];

/**
 * @license lucide v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Timer = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "10", x2: "14", y1: "2", y2: "2" }],
    ["line", { x1: "12", x2: "15", y1: "14", y2: "11" }],
    ["circle", { cx: "12", cy: "14", r: "8" }]
  ]
];

var TimeType = /* @__PURE__ */ ((TimeType2) => {
  TimeType2["Cooking"] = "Cooking";
  TimeType2["Preparation"] = "Preparation";
  TimeType2["Waiting"] = "Waiting";
  return TimeType2;
})(TimeType || {});
class Component {
  render(rootElement = void 0) {
    return document.createElement("div");
  }
}

var __defProp$d = Object.defineProperty;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$d = (obj, key, value) => __defNormalProp$d(obj, key + "" , value);
class Icon extends Component {
  constructor(icon) {
    super();
    __publicField$d(this, "icon");
    this.icon = icon;
  }
  render(rootElement = void 0) {
    const element = createElement$1(this.icon);
    element.classList.add("h-6", "w-6");
    if (rootElement) {
      rootElement.appendChild(element);
    }
    return element;
  }
}

var __defProp$c = Object.defineProperty;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$c = (obj, key, value) => __defNormalProp$c(obj, typeof key !== "symbol" ? key + "" : key, value);
class IconButton extends Component {
  constructor(icon) {
    super();
    __publicField$c(this, "eventListeners", {
      click: []
    });
    __publicField$c(this, "icon");
    this.icon = icon;
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  render(rootElement = void 0) {
    const element = document.createElement("button");
    element.classList.add("btn", "btn-square", "btn-outline");
    element.addEventListener("click", (event) => {
      this.eventListeners.click.forEach((listener) => listener(event));
    });
    new Icon(this.icon).render(element);
    if (rootElement) {
      rootElement.appendChild(element);
    }
    return element;
  }
}

const rerenderListeners = [];
function addRerenderListener(listener) {
  rerenderListeners.push(listener);
}
function rerender() {
  rerenderListeners.forEach((listener) => listener());
}

var __defProp$b = Object.defineProperty;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$b = (obj, key, value) => __defNormalProp$b(obj, typeof key !== "symbol" ? key + "" : key, value);
class InfoTabView extends Component {
  constructor(recipeInfo) {
    super();
    __publicField$b(this, "recipeInfo");
    __publicField$b(this, "eventListeners", {
      update: [],
      save: []
    });
    this.recipeInfo = recipeInfo;
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  update() {
    const event = new CustomEvent("update", {
      detail: this.recipeInfo
    });
    this.eventListeners.update.forEach((listener) => listener(event));
  }
  render(rootElement = void 0) {
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
    nameInput.classList.add("input", "input-bordered", "w-full", "max-w-full");
    nameInput.addEventListener("input", (event) => {
      this.recipeInfo.name = event.target.value;
      this.update();
    });
    element.appendChild(nameInput);
    const descriptionInput = document.createElement("textarea");
    descriptionInput.rows = 4;
    descriptionInput.value = this.recipeInfo.description;
    descriptionInput.placeholder = "Description";
    descriptionInput.classList.add("textarea", "textarea-bordered", "w-full");
    descriptionInput.addEventListener("input", (event) => {
      this.recipeInfo.description = event.target.value;
      this.update();
    });
    element.appendChild(descriptionInput);
    const yieldInput = document.createElement("input");
    yieldInput.type = "number";
    yieldInput.min = "0";
    yieldInput.step = "any";
    yieldInput.value = this.recipeInfo.yield.toString();
    yieldInput.placeholder = "Yield";
    yieldInput.classList.add("input", "input-bordered", "w-full", "max-w-full");
    yieldInput.addEventListener("input", (event) => {
      this.recipeInfo.yield = parseFloat(
        event.target.value
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
      this.recipeInfo.yieldUnit = event.target.value;
      this.update();
    });
    element.appendChild(yieldUnitInput);
    const saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.textContent = "Save";
    saveButton.classList.add("btn", "btn-primary");
    element.appendChild(saveButton);
    if (rootElement) {
      rootElement.appendChild(element);
    }
    return element;
  }
}

class AbstractEvent {

  constructor(data) {

    this._canceled = false;
    this.data = data;
  }

  get type() {
    return this.constructor.type;
  }

  get cancelable() {
    return this.constructor.cancelable;
  }

  cancel() {
    this._canceled = true;
  }

  canceled() {
    return this._canceled;
  }

  clone(data) {
    return new this.constructor({
      ...this.data,
      ...data
    });
  }
}

AbstractEvent.type = 'event';

AbstractEvent.cancelable = false;

class AbstractPlugin {

  constructor(draggable) {
    this.draggable = draggable;
  }

  attach() {
    throw new Error('Not Implemented');
  }

  detach() {
    throw new Error('Not Implemented');
  }
}

const defaultDelay = {
  mouse: 0,
  drag: 0,
  touch: 100
};

class Sensor {

  constructor(containers = [], options = {}) {

    this.containers = [...containers];

    this.options = {
      ...options
    };

    this.dragging = false;

    this.currentContainer = null;

    this.originalSource = null;

    this.startEvent = null;

    this.delay = calcDelay(options.delay);
  }

  attach() {
    return this;
  }

  detach() {
    return this;
  }

  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
  }

  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
  }

  trigger(element, sensorEvent) {
    const event = document.createEvent('Event');
    event.detail = sensorEvent;
    event.initEvent(sensorEvent.type, true, true);
    element.dispatchEvent(event);
    this.lastEvent = sensorEvent;
    return sensorEvent;
  }
}

function calcDelay(optionsDelay) {
  const delay = {};
  if (optionsDelay === undefined) {
    return {
      ...defaultDelay
    };
  }
  if (typeof optionsDelay === 'number') {
    for (const key in defaultDelay) {
      if (Object.prototype.hasOwnProperty.call(defaultDelay, key)) {
        delay[key] = optionsDelay;
      }
    }
    return delay;
  }
  for (const key in defaultDelay) {
    if (Object.prototype.hasOwnProperty.call(defaultDelay, key)) {
      if (optionsDelay[key] === undefined) {
        delay[key] = defaultDelay[key];
      } else {
        delay[key] = optionsDelay[key];
      }
    }
  }
  return delay;
}

function closest(node, value) {
  if (node == null) {
    return null;
  }
  function conditionFn(currentNode) {
    if (currentNode == null || value == null) {
      return false;
    } else if (isSelector(value)) {
      return Element.prototype.matches.call(currentNode, value);
    } else if (isNodeList(value)) {
      return [...value].includes(currentNode);
    } else if (isElement(value)) {
      return value === currentNode;
    } else if (isFunction(value)) {
      return value(currentNode);
    } else {
      return false;
    }
  }
  let current = node;
  do {
    current = current.correspondingUseElement || current.correspondingElement || current;
    if (conditionFn(current)) {
      return current;
    }
    current = current?.parentNode || null;
  } while (current != null && current !== document.body && current !== document);
  return null;
}
function isSelector(value) {
  return Boolean(typeof value === 'string');
}
function isNodeList(value) {
  return Boolean(value instanceof NodeList || value instanceof Array);
}
function isElement(value) {
  return Boolean(value instanceof Node);
}
function isFunction(value) {
  return Boolean(typeof value === 'function');
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

class SensorEvent extends AbstractEvent {

  get originalEvent() {
    return this.data.originalEvent;
  }

  get clientX() {
    return this.data.clientX;
  }

  get clientY() {
    return this.data.clientY;
  }

  get target() {
    return this.data.target;
  }

  get container() {
    return this.data.container;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get pressure() {
    return this.data.pressure;
  }
}

class DragStartSensorEvent extends SensorEvent {}

DragStartSensorEvent.type = 'drag:start';
class DragMoveSensorEvent extends SensorEvent {}

DragMoveSensorEvent.type = 'drag:move';
class DragStopSensorEvent extends SensorEvent {}

DragStopSensorEvent.type = 'drag:stop';
class DragPressureSensorEvent extends SensorEvent {}
DragPressureSensorEvent.type = 'drag:pressure';

const onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');
const onMouseDown = Symbol('onMouseDown');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');
const startDrag$1 = Symbol('startDrag');
const onDistanceChange$1 = Symbol('onDistanceChange');

class MouseSensor extends Sensor {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.mouseDownTimeout = null;

    this.pageX = null;

    this.pageY = null;
    this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
    this[startDrag$1] = this[startDrag$1].bind(this);
    this[onDistanceChange$1] = this[onDistanceChange$1].bind(this);
  }

  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  [onMouseDown](event) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey) {
      return;
    }
    const container = closest(event.target, this.containers);
    if (!container) {
      return;
    }
    if (this.options.handle && event.target && !closest(event.target, this.options.handle)) {
      return;
    }
    const originalSource = closest(event.target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const {
      delay
    } = this;
    const {
      pageX,
      pageY
    } = event;
    Object.assign(this, {
      pageX,
      pageY
    });
    this.onMouseDownAt = Date.now();
    this.startEvent = event;
    this.currentContainer = container;
    this.originalSource = originalSource;
    document.addEventListener('mouseup', this[onMouseUp]);
    document.addEventListener('dragstart', preventNativeDragStart);
    document.addEventListener('mousemove', this[onDistanceChange$1]);
    this.mouseDownTimeout = window.setTimeout(() => {
      this[onDistanceChange$1]({
        pageX: this.pageX,
        pageY: this.pageY
      });
    }, delay.mouse);
  }

  [startDrag$1]() {
    const startEvent = this.startEvent;
    const container = this.currentContainer;
    const originalSource = this.originalSource;
    const dragStartEvent = new DragStartSensorEvent({
      clientX: startEvent.clientX,
      clientY: startEvent.clientY,
      target: startEvent.target,
      container,
      originalSource,
      originalEvent: startEvent
    });
    this.trigger(this.currentContainer, dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (this.dragging) {
      document.addEventListener('contextmenu', this[onContextMenuWhileDragging], true);
      document.addEventListener('mousemove', this[onMouseMove]);
    }
  }

  [onDistanceChange$1](event) {
    const {
      pageX,
      pageY
    } = event;
    const {
      distance: distance$1
    } = this.options;
    const {
      startEvent,
      delay
    } = this;
    Object.assign(this, {
      pageX,
      pageY
    });
    if (!this.currentContainer) {
      return;
    }
    const timeElapsed = Date.now() - this.onMouseDownAt;
    const distanceTravelled = distance(startEvent.pageX, startEvent.pageY, pageX, pageY) || 0;
    clearTimeout(this.mouseDownTimeout);
    if (timeElapsed < delay.mouse) {

      document.removeEventListener('mousemove', this[onDistanceChange$1]);
    } else if (distanceTravelled >= distance$1) {
      document.removeEventListener('mousemove', this[onDistanceChange$1]);
      this[startDrag$1]();
    }
  }

  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragMoveEvent = new DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onMouseUp](event) {
    clearTimeout(this.mouseDownTimeout);
    if (event.button !== 0) {
      return;
    }
    document.removeEventListener('mouseup', this[onMouseUp]);
    document.removeEventListener('dragstart', preventNativeDragStart);
    document.removeEventListener('mousemove', this[onDistanceChange$1]);
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragStopEvent = new DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    document.removeEventListener('contextmenu', this[onContextMenuWhileDragging], true);
    document.removeEventListener('mousemove', this[onMouseMove]);
    this.currentContainer = null;
    this.dragging = false;
    this.startEvent = null;
  }

  [onContextMenuWhileDragging](event) {
    event.preventDefault();
  }
}
function preventNativeDragStart(event) {
  event.preventDefault();
}

function touchCoords(event) {
  const {
    touches,
    changedTouches
  } = event;
  return touches && touches[0] || changedTouches && changedTouches[0];
}

const onTouchStart = Symbol('onTouchStart');
const onTouchEnd = Symbol('onTouchEnd');
const onTouchMove = Symbol('onTouchMove');
const startDrag = Symbol('startDrag');
const onDistanceChange = Symbol('onDistanceChange');

let preventScrolling = false;

window.addEventListener('touchmove', event => {
  if (!preventScrolling) {
    return;
  }

  event.preventDefault();
}, {
  passive: false
});

class TouchSensor extends Sensor {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.currentScrollableParent = null;

    this.tapTimeout = null;

    this.touchMoved = false;

    this.pageX = null;

    this.pageY = null;
    this[onTouchStart] = this[onTouchStart].bind(this);
    this[onTouchEnd] = this[onTouchEnd].bind(this);
    this[onTouchMove] = this[onTouchMove].bind(this);
    this[startDrag] = this[startDrag].bind(this);
    this[onDistanceChange] = this[onDistanceChange].bind(this);
  }

  attach() {
    document.addEventListener('touchstart', this[onTouchStart]);
  }

  detach() {
    document.removeEventListener('touchstart', this[onTouchStart]);
  }

  [onTouchStart](event) {
    const container = closest(event.target, this.containers);
    if (!container) {
      return;
    }
    if (this.options.handle && event.target && !closest(event.target, this.options.handle)) {
      return;
    }
    const originalSource = closest(event.target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const {
      distance = 0
    } = this.options;
    const {
      delay
    } = this;
    const {
      pageX,
      pageY
    } = touchCoords(event);
    Object.assign(this, {
      pageX,
      pageY
    });
    this.onTouchStartAt = Date.now();
    this.startEvent = event;
    this.currentContainer = container;
    this.originalSource = originalSource;
    document.addEventListener('touchend', this[onTouchEnd]);
    document.addEventListener('touchcancel', this[onTouchEnd]);
    document.addEventListener('touchmove', this[onDistanceChange]);
    container.addEventListener('contextmenu', onContextMenu);
    if (distance) {
      preventScrolling = true;
    }
    this.tapTimeout = window.setTimeout(() => {
      this[onDistanceChange]({
        touches: [{
          pageX: this.pageX,
          pageY: this.pageY
        }]
      });
    }, delay.touch);
  }

  [startDrag]() {
    const startEvent = this.startEvent;
    const container = this.currentContainer;
    const touch = touchCoords(startEvent);
    const originalSource = this.originalSource;
    const dragStartEvent = new DragStartSensorEvent({
      clientX: touch.pageX,
      clientY: touch.pageY,
      target: startEvent.target,
      container,
      originalSource,
      originalEvent: startEvent
    });
    this.trigger(this.currentContainer, dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (this.dragging) {
      document.addEventListener('touchmove', this[onTouchMove]);
    }
    preventScrolling = this.dragging;
  }

  [onDistanceChange](event) {
    const {
      distance: distance$1
    } = this.options;
    const {
      startEvent,
      delay
    } = this;
    const start = touchCoords(startEvent);
    const current = touchCoords(event);
    const timeElapsed = Date.now() - this.onTouchStartAt;
    const distanceTravelled = distance(start.pageX, start.pageY, current.pageX, current.pageY);
    Object.assign(this, current);
    clearTimeout(this.tapTimeout);
    if (timeElapsed < delay.touch) {

      document.removeEventListener('touchmove', this[onDistanceChange]);
    } else if (distanceTravelled >= distance$1) {
      document.removeEventListener('touchmove', this[onDistanceChange]);
      this[startDrag]();
    }
  }

  [onTouchMove](event) {
    if (!this.dragging) {
      return;
    }
    const {
      pageX,
      pageY
    } = touchCoords(event);
    const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
    const dragMoveEvent = new DragMoveSensorEvent({
      clientX: pageX,
      clientY: pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onTouchEnd](event) {
    clearTimeout(this.tapTimeout);
    preventScrolling = false;
    document.removeEventListener('touchend', this[onTouchEnd]);
    document.removeEventListener('touchcancel', this[onTouchEnd]);
    document.removeEventListener('touchmove', this[onDistanceChange]);
    if (this.currentContainer) {
      this.currentContainer.removeEventListener('contextmenu', onContextMenu);
    }
    if (!this.dragging) {
      return;
    }
    document.removeEventListener('touchmove', this[onTouchMove]);
    const {
      pageX,
      pageY
    } = touchCoords(event);
    const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
    event.preventDefault();
    const dragStopEvent = new DragStopSensorEvent({
      clientX: pageX,
      clientY: pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    this.currentContainer = null;
    this.dragging = false;
    this.startEvent = null;
  }
}
function onContextMenu(event) {
  event.preventDefault();
  event.stopPropagation();
}

class CollidableEvent extends AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
CollidableEvent.type = 'collidable';

class CollidableInEvent extends CollidableEvent {

  get collidingElement() {
    return this.data.collidingElement;
  }
}
CollidableInEvent.type = 'collidable:in';

class CollidableOutEvent extends CollidableEvent {

  get collidingElement() {
    return this.data.collidingElement;
  }
}
CollidableOutEvent.type = 'collidable:out';

function createAddInitializerMethod(e, t) {
  return function (r) {
    assertNotFinished(t, "addInitializer"), assertCallable(r, "An initializer"), e.push(r);
  };
}
function assertInstanceIfPrivate(e, t) {
  if (!e(t)) throw new TypeError("Attempted to access private element on non-instance");
}
function memberDec(e, t, r, a, n, i, s, o, c, l, u) {
  var f;
  switch (i) {
    case 1:
      f = "accessor";
      break;
    case 2:
      f = "method";
      break;
    case 3:
      f = "getter";
      break;
    case 4:
      f = "setter";
      break;
    default:
      f = "field";
  }
  var d,
    p,
    h = {
      kind: f,
      name: o ? "#" + r : r,
      static: s,
      private: o,
      metadata: u
    },
    v = {
      v: !1
    };
  if (0 !== i && (h.addInitializer = createAddInitializerMethod(n, v)), o || 0 !== i && 2 !== i) {
    if (2 === i) d = function (e) {
      return assertInstanceIfPrivate(l, e), a.value;
    };else {
      var y = 0 === i || 1 === i;
      (y || 3 === i) && (d = o ? function (e) {
        return assertInstanceIfPrivate(l, e), a.get.call(e);
      } : function (e) {
        return a.get.call(e);
      }), (y || 4 === i) && (p = o ? function (e, t) {
        assertInstanceIfPrivate(l, e), a.set.call(e, t);
      } : function (e, t) {
        a.set.call(e, t);
      });
    }
  } else d = function (e) {
    return e[r];
  }, 0 === i && (p = function (e, t) {
    e[r] = t;
  });
  var m = o ? l.bind() : function (e) {
    return r in e;
  };
  h.access = d && p ? {
    get: d,
    set: p,
    has: m
  } : d ? {
    get: d,
    has: m
  } : {
    set: p,
    has: m
  };
  try {
    return e.call(t, c, h);
  } finally {
    v.v = !0;
  }
}
function assertNotFinished(e, t) {
  if (e.v) throw new Error("attempted to call " + t + " after decoration was finished");
}
function assertCallable(e, t) {
  if ("function" != typeof e) throw new TypeError(t + " must be a function");
}
function assertValidReturnValue(e, t) {
  var r = typeof t;
  if (1 === e) {
    if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
    void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
  } else if ("function" !== r) {
    var a;
    throw a = 0 === e ? "field" : 5 === e ? "class" : "method", new TypeError(a + " decorators must return a function or void 0");
  }
}
function curryThis1(e) {
  return function () {
    return e(this);
  };
}
function curryThis2(e) {
  return function (t) {
    e(this, t);
  };
}
function applyMemberDec(e, t, r, a, n, i, s, o, c, l, u) {
  var f,
    d,
    p,
    h,
    v,
    y,
    m = r[0];
  a || Array.isArray(m) || (m = [m]), o ? f = 0 === i || 1 === i ? {
    get: curryThis1(r[3]),
    set: curryThis2(r[4])
  } : 3 === i ? {
    get: r[3]
  } : 4 === i ? {
    set: r[3]
  } : {
    value: r[3]
  } : 0 !== i && (f = Object.getOwnPropertyDescriptor(t, n)), 1 === i ? p = {
    get: f.get,
    set: f.set
  } : 2 === i ? p = f.value : 3 === i ? p = f.get : 4 === i && (p = f.set);
  for (var g = a ? 2 : 1, b = m.length - 1; b >= 0; b -= g) {
    var I;
    if (void 0 !== (h = memberDec(m[b], a ? m[b - 1] : void 0, n, f, c, i, s, o, p, l, u))) assertValidReturnValue(i, h), 0 === i ? I = h : 1 === i ? (I = h.init, v = h.get || p.get, y = h.set || p.set, p = {
      get: v,
      set: y
    }) : p = h, void 0 !== I && (void 0 === d ? d = I : "function" == typeof d ? d = [d, I] : d.push(I));
  }
  if (0 === i || 1 === i) {
    if (void 0 === d) d = function (e, t) {
      return t;
    };else if ("function" != typeof d) {
      var w = d;
      d = function (e, t) {
        for (var r = t, a = w.length - 1; a >= 0; a--) r = w[a].call(e, r);
        return r;
      };
    } else {
      var M = d;
      d = function (e, t) {
        return M.call(e, t);
      };
    }
    e.push(d);
  }
  0 !== i && (1 === i ? (f.get = p.get, f.set = p.set) : 2 === i ? f.value = p : 3 === i ? f.get = p : 4 === i && (f.set = p), o ? 1 === i ? (e.push(function (e, t) {
    return p.get.call(e, t);
  }), e.push(function (e, t) {
    return p.set.call(e, t);
  })) : 2 === i ? e.push(p) : e.push(function (e, t) {
    return p.call(e, t);
  }) : Object.defineProperty(t, n, f));
}
function applyMemberDecs(e, t, r, a) {
  for (var n, i, s, o = [], c = new Map(), l = new Map(), u = 0; u < t.length; u++) {
    var f = t[u];
    if (Array.isArray(f)) {
      var d,
        p,
        h = f[1],
        v = f[2],
        y = f.length > 3,
        m = 16 & h,
        g = !!(8 & h),
        b = r;
      if (h &= 7, g ? (d = e, 0 !== h && (p = i = i || []), y && !s && (s = function (t) {
        return _checkInRHS(t) === e;
      }), b = s) : (d = e.prototype, 0 !== h && (p = n = n || [])), 0 !== h && !y) {
        var I = g ? l : c,
          w = I.get(v) || 0;
        if (!0 === w || 3 === w && 4 !== h || 4 === w && 3 !== h) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + v);
        I.set(v, !(!w && h > 2) || h);
      }
      applyMemberDec(o, d, f, m, v, h, g, y, p, b, a);
    }
  }
  return pushInitializers(o, n), pushInitializers(o, i), o;
}
function pushInitializers(e, t) {
  t && e.push(function (e) {
    for (var r = 0; r < t.length; r++) t[r].call(e);
    return e;
  });
}
function applyClassDecs(e, t, r, a) {
  if (t.length) {
    for (var n = [], i = e, s = e.name, o = 1, c = t.length - 1; c >= 0; c -= o) {
      var l = {
        v: !1
      };
      try {
        var u = t[c].call(r ? t[c - 1] : void 0, i, {
          kind: "class",
          name: s,
          addInitializer: createAddInitializerMethod(n, l),
          metadata: a
        });
      } finally {
        l.v = !0;
      }
      void 0 !== u && (assertValidReturnValue(5, u), i = u);
    }
    return [defineMetadata(i, a), function () {
      for (var e = 0; e < n.length; e++) n[e].call(i);
    }];
  }
}
function defineMetadata(e, t) {
  return Object.defineProperty(e, Symbol.metadata || Symbol.for("Symbol.metadata"), {
    configurable: !0,
    enumerable: !0,
    value: t
  });
}
function _applyDecs2305(e, t, r, a, n, i) {
  if (arguments.length >= 6) var s = i[Symbol.metadata || Symbol.for("Symbol.metadata")];
  var o = Object.create(void 0 === s ? null : s),
    c = applyMemberDecs(e, t, n, o);
  return r.length || defineMetadata(e, o), {
    e: c,
    get c() {
      return applyClassDecs(e, r, a, o);
    }
  };
}
function _checkInRHS(e) {
  if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? typeof e : "null"));
  return e;
}

function AutoBind(originalMethod, {
  name,
  addInitializer
}) {
  addInitializer(function () {

    this[name] = originalMethod.bind(this);

  });
}

function requestNextAnimationFrame(callback) {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}

class DragEvent extends AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get source() {
    return this.data.source;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get mirror() {
    return this.data.mirror;
  }

  get sourceContainer() {
    return this.data.sourceContainer;
  }

  get sensorEvent() {
    return this.data.sensorEvent;
  }

  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }
    return null;
  }
}

DragEvent.type = 'drag';
class DragStartEvent extends DragEvent {}

DragStartEvent.type = 'drag:start';
DragStartEvent.cancelable = true;
class DragMoveEvent extends DragEvent {}

DragMoveEvent.type = 'drag:move';

class DragOverEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }

  get over() {
    return this.data.over;
  }
}
DragOverEvent.type = 'drag:over';
DragOverEvent.cancelable = true;
function isDragOverEvent(event) {
  return event.type === DragOverEvent.type;
}

class DragOutEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }

  get over() {
    return this.data.over;
  }
}

DragOutEvent.type = 'drag:out';

class DragOverContainerEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }
}

DragOverContainerEvent.type = 'drag:over:container';

class DragOutContainerEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }
}

DragOutContainerEvent.type = 'drag:out:container';

class DragPressureEvent extends DragEvent {

  get pressure() {
    return this.data.pressure;
  }
}

DragPressureEvent.type = 'drag:pressure';
class DragStopEvent extends DragEvent {}

DragStopEvent.type = 'drag:stop';
DragStopEvent.cancelable = true;
class DragStoppedEvent extends DragEvent {}
DragStoppedEvent.type = 'drag:stopped';

var _initProto$1, _class$1;

class ResizeMirror extends AbstractPlugin {

  constructor(draggable) {
    _initProto$1(super(draggable));

    this.lastWidth = 0;

    this.lastHeight = 0;

    this.mirror = null;
  }

  attach() {
    this.draggable.on('mirror:created', this.onMirrorCreated).on('drag:over', this.onDragOver).on('drag:over:container', this.onDragOver);
  }

  detach() {
    this.draggable.off('mirror:created', this.onMirrorCreated).off('mirror:destroy', this.onMirrorDestroy).off('drag:over', this.onDragOver).off('drag:over:container', this.onDragOver);
  }

  getOptions() {
    return this.draggable.options.resizeMirror || {};
  }

  onMirrorCreated({
    mirror
  }) {
    this.mirror = mirror;
  }

  onMirrorDestroy() {
    this.mirror = null;
  }

  onDragOver(dragEvent) {
    this.resize(dragEvent);
  }

  resize(dragEvent) {
    requestAnimationFrame(() => {
      let over = null;
      const {
        overContainer
      } = dragEvent;
      if (this.mirror == null || this.mirror.parentNode == null) {
        return;
      }
      if (this.mirror.parentNode !== overContainer) {
        overContainer.appendChild(this.mirror);
      }
      if (isDragOverEvent(dragEvent)) {
        over = dragEvent.over;
      }
      const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];
      if (!overElement) {
        return;
      }
      requestNextAnimationFrame(() => {
        const overRect = overElement.getBoundingClientRect();
        if (this.mirror == null || this.lastHeight === overRect.height && this.lastWidth === overRect.width) {
          return;
        }
        this.mirror.style.width = `${overRect.width}px`;
        this.mirror.style.height = `${overRect.height}px`;
        this.lastWidth = overRect.width;
        this.lastHeight = overRect.height;
      });
    });
  }
}
_class$1 = ResizeMirror;
[_initProto$1] = _applyDecs2305(_class$1, [[AutoBind, 2, "onMirrorCreated"], [AutoBind, 2, "onMirrorDestroy"], [AutoBind, 2, "onDragOver"]], [], 0, void 0, AbstractPlugin).e;

class SnapEvent extends AbstractEvent {

  get dragEvent() {
    return this.data.dragEvent;
  }

  get snappable() {
    return this.data.snappable;
  }
}

SnapEvent.type = 'snap';
class SnapInEvent extends SnapEvent {}

SnapInEvent.type = 'snap:in';
SnapInEvent.cancelable = true;
class SnapOutEvent extends SnapEvent {}
SnapOutEvent.type = 'snap:out';
SnapOutEvent.cancelable = true;

var _initProto, _class;

const defaultOptions$6 = {
  duration: 150,
  easingFunction: 'ease-in-out',
  horizontal: false
};

class SwapAnimation extends AbstractPlugin {

  constructor(draggable) {
    _initProto(super(draggable));

    this.options = {
      ...defaultOptions$6,
      ...this.getOptions()
    };

    this.lastAnimationFrame = null;
  }

  attach() {
    this.draggable.on('sortable:sorted', this.onSortableSorted);
  }

  detach() {
    this.draggable.off('sortable:sorted', this.onSortableSorted);
  }

  getOptions() {
    return this.draggable.options.swapAnimation || {};
  }

  onSortableSorted({
    oldIndex,
    newIndex,
    dragEvent
  }) {
    const {
      source,
      over
    } = dragEvent;
    if (this.lastAnimationFrame) {
      cancelAnimationFrame(this.lastAnimationFrame);
    }

    this.lastAnimationFrame = requestAnimationFrame(() => {
      if (oldIndex >= newIndex) {
        animate$1(source, over, this.options);
      } else {
        animate$1(over, source, this.options);
      }
    });
  }
}

_class = SwapAnimation;
[_initProto] = _applyDecs2305(_class, [[AutoBind, 2, "onSortableSorted"]], [], 0, void 0, AbstractPlugin).e;
function animate$1(from, to, {
  duration,
  easingFunction,
  horizontal
}) {
  for (const element of [from, to]) {
    element.style.pointerEvents = 'none';
  }
  if (horizontal) {
    const width = from.offsetWidth;
    from.style.transform = `translate3d(${width}px, 0, 0)`;
    to.style.transform = `translate3d(-${width}px, 0, 0)`;
  } else {
    const height = from.offsetHeight;
    from.style.transform = `translate3d(0, ${height}px, 0)`;
    to.style.transform = `translate3d(0, -${height}px, 0)`;
  }
  requestAnimationFrame(() => {
    for (const element of [from, to]) {
      element.addEventListener('transitionend', resetElementOnTransitionEnd$1);
      element.style.transition = `transform ${duration}ms ${easingFunction}`;
      element.style.transform = '';
    }
  });
}

function resetElementOnTransitionEnd$1(event) {
  if (event.target == null || !isHTMLElement(event.target)) {
    return;
  }
  event.target.style.transition = '';
  event.target.style.pointerEvents = '';
  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd$1);
}
function isHTMLElement(eventTarget) {
  return Boolean('style' in eventTarget);
}

const onSortableSorted = Symbol('onSortableSorted');
const onSortableSort = Symbol('onSortableSort');

const defaultOptions$5 = {
  duration: 150,
  easingFunction: 'ease-in-out'
};

class SortAnimation extends AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions$5,
      ...this.getOptions()
    };

    this.lastAnimationFrame = null;
    this.lastElements = [];
    this[onSortableSorted] = this[onSortableSorted].bind(this);
    this[onSortableSort] = this[onSortableSort].bind(this);
  }

  attach() {
    this.draggable.on('sortable:sort', this[onSortableSort]);
    this.draggable.on('sortable:sorted', this[onSortableSorted]);
  }

  detach() {
    this.draggable.off('sortable:sort', this[onSortableSort]);
    this.draggable.off('sortable:sorted', this[onSortableSorted]);
  }

  getOptions() {
    return this.draggable.options.sortAnimation || {};
  }

  [onSortableSort]({
    dragEvent
  }) {
    const {
      sourceContainer
    } = dragEvent;
    const elements = this.draggable.getDraggableElementsForContainer(sourceContainer);
    this.lastElements = Array.from(elements).map(el => {
      return {
        domEl: el,
        offsetTop: el.offsetTop,
        offsetLeft: el.offsetLeft
      };
    });
  }

  [onSortableSorted]({
    oldIndex,
    newIndex
  }) {
    if (oldIndex === newIndex) {
      return;
    }
    const effectedElements = [];
    let start;
    let end;
    let num;
    if (oldIndex > newIndex) {
      start = newIndex;
      end = oldIndex - 1;
      num = 1;
    } else {
      start = oldIndex + 1;
      end = newIndex;
      num = -1;
    }
    for (let i = start; i <= end; i++) {
      const from = this.lastElements[i];
      const to = this.lastElements[i + num];
      effectedElements.push({
        from,
        to
      });
    }
    cancelAnimationFrame(this.lastAnimationFrame);

    this.lastAnimationFrame = requestAnimationFrame(() => {
      effectedElements.forEach(element => animate(element, this.options));
    });
  }
}

function animate({
  from,
  to
}, {
  duration,
  easingFunction
}) {
  const domEl = from.domEl;
  const x = from.offsetLeft - to.offsetLeft;
  const y = from.offsetTop - to.offsetTop;
  domEl.style.pointerEvents = 'none';
  domEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  requestAnimationFrame(() => {
    domEl.addEventListener('transitionend', resetElementOnTransitionEnd);
    domEl.style.transition = `transform ${duration}ms ${easingFunction}`;
    domEl.style.transform = '';
  });
}

function resetElementOnTransitionEnd(event) {
  event.target.style.transition = '';
  event.target.style.pointerEvents = '';
  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
}

const onInitialize$1 = Symbol('onInitialize');
const onDestroy$1 = Symbol('onDestroy');
const announceEvent = Symbol('announceEvent');
const announceMessage = Symbol('announceMessage');
const ARIA_RELEVANT = 'aria-relevant';
const ARIA_ATOMIC = 'aria-atomic';
const ARIA_LIVE = 'aria-live';
const ROLE = 'role';

const defaultOptions$4 = {
  expire: 7000
};

class Announcement extends AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions$4,
      ...this.getOptions()
    };

    this.originalTriggerMethod = this.draggable.trigger;
    this[onInitialize$1] = this[onInitialize$1].bind(this);
    this[onDestroy$1] = this[onDestroy$1].bind(this);
  }

  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize$1]);
  }

  detach() {
    this.draggable.off('draggable:destroy', this[onDestroy$1]);
  }

  getOptions() {
    return this.draggable.options.announcements || {};
  }

  [announceEvent](event) {
    const message = this.options[event.type];
    if (message && typeof message === 'string') {
      this[announceMessage](message);
    }
    if (message && typeof message === 'function') {
      this[announceMessage](message(event));
    }
  }

  [announceMessage](message) {
    announce(message, {
      expire: this.options.expire
    });
  }

  [onInitialize$1]() {

    this.draggable.trigger = event => {
      try {
        this[announceEvent](event);
      } finally {

        this.originalTriggerMethod.call(this.draggable, event);
      }
    };
  }

  [onDestroy$1]() {
    this.draggable.trigger = this.originalTriggerMethod;
  }
}

const liveRegion = createRegion();

function announce(message, {
  expire
}) {
  const element = document.createElement('div');
  element.textContent = message;
  liveRegion.appendChild(element);
  return setTimeout(() => {
    liveRegion.removeChild(element);
  }, expire);
}

function createRegion() {
  const element = document.createElement('div');
  element.setAttribute('id', 'draggable-live-region');
  element.setAttribute(ARIA_RELEVANT, 'additions');
  element.setAttribute(ARIA_ATOMIC, 'true');
  element.setAttribute(ARIA_LIVE, 'assertive');
  element.setAttribute(ROLE, 'log');
  element.style.position = 'fixed';
  element.style.width = '1px';
  element.style.height = '1px';
  element.style.top = '-1px';
  element.style.overflow = 'hidden';
  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(liveRegion);
});

const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');

const defaultOptions$3 = {};

class Focusable extends AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions$3,
      ...this.getOptions()
    };
    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);
  }

  detach() {
    this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);

    this[onDestroy]();
  }

  getOptions() {
    return this.draggable.options.focusable || {};
  }

  getElements() {
    return [...this.draggable.containers, ...this.draggable.getDraggableElements()];
  }

  [onInitialize]() {

    requestAnimationFrame(() => {
      this.getElements().forEach(element => decorateElement(element));
    });
  }

  [onDestroy]() {

    requestAnimationFrame(() => {
      this.getElements().forEach(element => stripElement(element));
    });
  }
}

const elementsWithMissingTabIndex = [];

function decorateElement(element) {
  const hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);
  if (hasMissingTabIndex) {
    elementsWithMissingTabIndex.push(element);
    element.tabIndex = 0;
  }
}

function stripElement(element) {
  const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);
  if (tabIndexElementPosition !== -1) {
    element.tabIndex = -1;
    elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
  }
}

class MirrorEvent extends AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get source() {
    return this.data.source;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get sourceContainer() {
    return this.data.sourceContainer;
  }

  get sensorEvent() {
    return this.data.sensorEvent;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }

  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }
    return null;
  }
}

class MirrorCreateEvent extends MirrorEvent {}
MirrorCreateEvent.type = 'mirror:create';

class MirrorCreatedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorCreatedEvent.type = 'mirror:created';

class MirrorAttachedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorAttachedEvent.type = 'mirror:attached';

class MirrorMoveEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }

  get passedThreshX() {
    return this.data.passedThreshX;
  }

  get passedThreshY() {
    return this.data.passedThreshY;
  }
}
MirrorMoveEvent.type = 'mirror:move';
MirrorMoveEvent.cancelable = true;

class MirrorMovedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }

  get passedThreshX() {
    return this.data.passedThreshX;
  }

  get passedThreshY() {
    return this.data.passedThreshY;
  }
}
MirrorMovedEvent.type = 'mirror:moved';

class MirrorDestroyEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorDestroyEvent.type = 'mirror:destroy';
MirrorDestroyEvent.cancelable = true;

const onDragStart$3 = Symbol('onDragStart');
const onDragMove$2 = Symbol('onDragMove');
const onDragStop$3 = Symbol('onDragStop');
const onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorMove = Symbol('onMirrorMove');
const onScroll = Symbol('onScroll');
const getAppendableContainer = Symbol('getAppendableContainer');

const defaultOptions$2 = {
  constrainDimensions: false,
  xAxis: true,
  yAxis: true,
  cursorOffsetX: null,
  cursorOffsetY: null,
  thresholdX: null,
  thresholdY: null
};

class Mirror extends AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions$2,
      ...this.getOptions()
    };

    this.scrollOffset = {
      x: 0,
      y: 0
    };

    this.initialScrollOffset = {
      x: window.scrollX,
      y: window.scrollY
    };
    this[onDragStart$3] = this[onDragStart$3].bind(this);
    this[onDragMove$2] = this[onDragMove$2].bind(this);
    this[onDragStop$3] = this[onDragStop$3].bind(this);
    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorMove] = this[onMirrorMove].bind(this);
    this[onScroll] = this[onScroll].bind(this);
  }

  attach() {
    this.draggable.on('drag:start', this[onDragStart$3]).on('drag:move', this[onDragMove$2]).on('drag:stop', this[onDragStop$3]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);
  }

  detach() {
    this.draggable.off('drag:start', this[onDragStart$3]).off('drag:move', this[onDragMove$2]).off('drag:stop', this[onDragStop$3]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);
  }

  getOptions() {
    return this.draggable.options.mirror || {};
  }
  [onDragStart$3](dragEvent) {
    if (dragEvent.canceled()) {
      return;
    }
    if ('ontouchstart' in window) {
      document.addEventListener('scroll', this[onScroll], true);
    }
    this.initialScrollOffset = {
      x: window.scrollX,
      y: window.scrollY
    };
    const {
      source,
      originalSource,
      sourceContainer,
      sensorEvent
    } = dragEvent;

    this.lastMirrorMovedClient = {
      x: sensorEvent.clientX,
      y: sensorEvent.clientY
    };
    const mirrorCreateEvent = new MirrorCreateEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent
    });
    this.draggable.trigger(mirrorCreateEvent);
    if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
      return;
    }
    const appendableContainer = this[getAppendableContainer](source) || sourceContainer;
    this.mirror = source.cloneNode(true);
    const mirrorCreatedEvent = new MirrorCreatedEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });
    const mirrorAttachedEvent = new MirrorAttachedEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });
    this.draggable.trigger(mirrorCreatedEvent);
    appendableContainer.appendChild(this.mirror);
    this.draggable.trigger(mirrorAttachedEvent);
  }
  [onDragMove$2](dragEvent) {
    if (!this.mirror || dragEvent.canceled()) {
      return;
    }
    const {
      source,
      originalSource,
      sourceContainer,
      sensorEvent
    } = dragEvent;
    let passedThreshX = true;
    let passedThreshY = true;
    if (this.options.thresholdX || this.options.thresholdY) {
      const {
        x: lastX,
        y: lastY
      } = this.lastMirrorMovedClient;
      if (Math.abs(lastX - sensorEvent.clientX) < this.options.thresholdX) {
        passedThreshX = false;
      } else {
        this.lastMirrorMovedClient.x = sensorEvent.clientX;
      }
      if (Math.abs(lastY - sensorEvent.clientY) < this.options.thresholdY) {
        passedThreshY = false;
      } else {
        this.lastMirrorMovedClient.y = sensorEvent.clientY;
      }
      if (!passedThreshX && !passedThreshY) {
        return;
      }
    }
    const mirrorMoveEvent = new MirrorMoveEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror,
      passedThreshX,
      passedThreshY
    });
    this.draggable.trigger(mirrorMoveEvent);
  }
  [onDragStop$3](dragEvent) {
    if ('ontouchstart' in window) {
      document.removeEventListener('scroll', this[onScroll], true);
    }
    this.initialScrollOffset = {
      x: 0,
      y: 0
    };
    this.scrollOffset = {
      x: 0,
      y: 0
    };
    if (!this.mirror) {
      return;
    }
    const {
      source,
      sourceContainer,
      sensorEvent
    } = dragEvent;
    const mirrorDestroyEvent = new MirrorDestroyEvent({
      source,
      mirror: this.mirror,
      sourceContainer,
      sensorEvent,
      dragEvent
    });
    this.draggable.trigger(mirrorDestroyEvent);
    if (!mirrorDestroyEvent.canceled()) {
      this.mirror.remove();
    }
  }
  [onScroll]() {
    this.scrollOffset = {
      x: window.scrollX - this.initialScrollOffset.x,
      y: window.scrollY - this.initialScrollOffset.y
    };
  }

  [onMirrorCreated]({
    mirror,
    source,
    sensorEvent
  }) {
    const mirrorClasses = this.draggable.getClassNamesFor('mirror');
    const setState = ({
      mirrorOffset,
      initialX,
      initialY,
      ...args
    }) => {
      this.mirrorOffset = mirrorOffset;
      this.initialX = initialX;
      this.initialY = initialY;
      this.lastMovedX = initialX;
      this.lastMovedY = initialY;
      return {
        mirrorOffset,
        initialX,
        initialY,
        ...args
      };
    };
    mirror.style.display = 'none';
    const initialState = {
      mirror,
      source,
      sensorEvent,
      mirrorClasses,
      scrollOffset: this.scrollOffset,
      options: this.options,
      passedThreshX: true,
      passedThreshY: true
    };
    return Promise.resolve(initialState)

    .then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({
      initial: true
    })).then(removeMirrorID).then(setState);
  }

  [onMirrorMove](mirrorEvent) {
    if (mirrorEvent.canceled()) {
      return null;
    }
    const setState = ({
      lastMovedX,
      lastMovedY,
      ...args
    }) => {
      this.lastMovedX = lastMovedX;
      this.lastMovedY = lastMovedY;
      return {
        lastMovedX,
        lastMovedY,
        ...args
      };
    };
    const triggerMoved = args => {
      const mirrorMovedEvent = new MirrorMovedEvent({
        source: mirrorEvent.source,
        originalSource: mirrorEvent.originalSource,
        sourceContainer: mirrorEvent.sourceContainer,
        sensorEvent: mirrorEvent.sensorEvent,
        dragEvent: mirrorEvent.dragEvent,
        mirror: this.mirror,
        passedThreshX: mirrorEvent.passedThreshX,
        passedThreshY: mirrorEvent.passedThreshY
      });
      this.draggable.trigger(mirrorMovedEvent);
      return args;
    };
    const initialState = {
      mirror: mirrorEvent.mirror,
      sensorEvent: mirrorEvent.sensorEvent,
      mirrorOffset: this.mirrorOffset,
      options: this.options,
      initialX: this.initialX,
      initialY: this.initialY,
      scrollOffset: this.scrollOffset,
      passedThreshX: mirrorEvent.passedThreshX,
      passedThreshY: mirrorEvent.passedThreshY,
      lastMovedX: this.lastMovedX,
      lastMovedY: this.lastMovedY
    };
    return Promise.resolve(initialState).then(positionMirror({
      raf: true
    })).then(setState).then(triggerMoved);
  }

  [getAppendableContainer](source) {
    const appendTo = this.options.appendTo;
    if (typeof appendTo === 'string') {
      return document.querySelector(appendTo);
    } else if (appendTo instanceof HTMLElement) {
      return appendTo;
    } else if (typeof appendTo === 'function') {
      return appendTo(source);
    } else {
      return source.parentNode;
    }
  }
}

function computeMirrorDimensions({
  source,
  ...args
}) {
  return withPromise(resolve => {
    const sourceRect = source.getBoundingClientRect();
    resolve({
      source,
      sourceRect,
      ...args
    });
  });
}

function calculateMirrorOffset({
  sensorEvent,
  sourceRect,
  options,
  ...args
}) {
  return withPromise(resolve => {
    const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
    const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;
    const mirrorOffset = {
      top,
      left
    };
    resolve({
      sensorEvent,
      sourceRect,
      mirrorOffset,
      options,
      ...args
    });
  });
}

function resetMirror({
  mirror,
  source,
  options,
  ...args
}) {
  return withPromise(resolve => {
    let offsetHeight;
    let offsetWidth;
    if (options.constrainDimensions) {
      const computedSourceStyles = getComputedStyle(source);
      offsetHeight = computedSourceStyles.getPropertyValue('height');
      offsetWidth = computedSourceStyles.getPropertyValue('width');
    }
    mirror.style.display = null;
    mirror.style.position = 'fixed';
    mirror.style.pointerEvents = 'none';
    mirror.style.top = 0;
    mirror.style.left = 0;
    mirror.style.margin = 0;
    if (options.constrainDimensions) {
      mirror.style.height = offsetHeight;
      mirror.style.width = offsetWidth;
    }
    resolve({
      mirror,
      source,
      options,
      ...args
    });
  });
}

function addMirrorClasses({
  mirror,
  mirrorClasses,
  ...args
}) {
  return withPromise(resolve => {
    mirror.classList.add(...mirrorClasses);
    resolve({
      mirror,
      mirrorClasses,
      ...args
    });
  });
}

function removeMirrorID({
  mirror,
  ...args
}) {
  return withPromise(resolve => {
    mirror.removeAttribute('id');
    delete mirror.id;
    resolve({
      mirror,
      ...args
    });
  });
}

function positionMirror({
  withFrame = false,
  initial = false
} = {}) {
  return ({
    mirror,
    sensorEvent,
    mirrorOffset,
    initialY,
    initialX,
    scrollOffset,
    options,
    passedThreshX,
    passedThreshY,
    lastMovedX,
    lastMovedY,
    ...args
  }) => {
    return withPromise(resolve => {
      const result = {
        mirror,
        sensorEvent,
        mirrorOffset,
        options,
        ...args
      };
      if (mirrorOffset) {
        const x = passedThreshX ? Math.round((sensorEvent.clientX - mirrorOffset.left - scrollOffset.x) / (options.thresholdX || 1)) * (options.thresholdX || 1) : Math.round(lastMovedX);
        const y = passedThreshY ? Math.round((sensorEvent.clientY - mirrorOffset.top - scrollOffset.y) / (options.thresholdY || 1)) * (options.thresholdY || 1) : Math.round(lastMovedY);
        if (options.xAxis && options.yAxis || initial) {
          mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        } else if (options.xAxis && !options.yAxis) {
          mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;
        } else if (options.yAxis && !options.xAxis) {
          mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;
        }
        if (initial) {
          result.initialX = x;
          result.initialY = y;
        }
        result.lastMovedX = x;
        result.lastMovedY = y;
      }
      resolve(result);
    }, {
      frame: withFrame
    });
  };
}

function withPromise(callback, {
  raf = false
} = {}) {
  return new Promise((resolve, reject) => {
    if (raf) {
      requestAnimationFrame(() => {
        callback(resolve, reject);
      });
    } else {
      callback(resolve, reject);
    }
  });
}

function isNativeDragEvent(sensorEvent) {
  return /^drag/.test(sensorEvent.originalEvent.type);
}

const onDragStart$2 = Symbol('onDragStart');
const onDragMove$1 = Symbol('onDragMove');
const onDragStop$2 = Symbol('onDragStop');
const scroll = Symbol('scroll');

const defaultOptions$1 = {
  speed: 6,
  sensitivity: 50,
  scrollableElements: []
};

class Scrollable extends AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions$1,
      ...this.getOptions()
    };

    this.currentMousePosition = null;

    this.scrollAnimationFrame = null;

    this.scrollableElement = null;

    this.findScrollableElementFrame = null;
    this[onDragStart$2] = this[onDragStart$2].bind(this);
    this[onDragMove$1] = this[onDragMove$1].bind(this);
    this[onDragStop$2] = this[onDragStop$2].bind(this);
    this[scroll] = this[scroll].bind(this);
  }

  attach() {
    this.draggable.on('drag:start', this[onDragStart$2]).on('drag:move', this[onDragMove$1]).on('drag:stop', this[onDragStop$2]);
  }

  detach() {
    this.draggable.off('drag:start', this[onDragStart$2]).off('drag:move', this[onDragMove$1]).off('drag:stop', this[onDragStop$2]);
  }

  getOptions() {
    return this.draggable.options.scrollable || {};
  }

  getScrollableElement(target) {
    if (this.hasDefinedScrollableElements()) {
      return closest(target, this.options.scrollableElements) || document.documentElement;
    } else {
      return closestScrollableElement(target);
    }
  }

  hasDefinedScrollableElements() {
    return Boolean(this.options.scrollableElements.length !== 0);
  }

  [onDragStart$2](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.source);
    });
  }

  [onDragMove$1](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);
    });
    if (!this.scrollableElement) {
      return;
    }
    const sensorEvent = dragEvent.sensorEvent;
    const scrollOffset = {
      x: 0,
      y: 0
    };
    if ('ontouchstart' in window) {
      scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }
    this.currentMousePosition = {
      clientX: sensorEvent.clientX - scrollOffset.x,
      clientY: sensorEvent.clientY - scrollOffset.y
    };
    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }

  [onDragStop$2]() {
    cancelAnimationFrame(this.scrollAnimationFrame);
    cancelAnimationFrame(this.findScrollableElementFrame);
    this.scrollableElement = null;
    this.scrollAnimationFrame = null;
    this.findScrollableElementFrame = null;
    this.currentMousePosition = null;
  }

  [scroll]() {
    if (!this.scrollableElement || !this.currentMousePosition) {
      return;
    }
    cancelAnimationFrame(this.scrollAnimationFrame);
    const {
      speed,
      sensitivity
    } = this.options;
    const rect = this.scrollableElement.getBoundingClientRect();
    const bottomCutOff = rect.bottom > window.innerHeight;
    const topCutOff = rect.top < 0;
    const cutOff = topCutOff || bottomCutOff;
    const documentScrollingElement = getDocumentScrollingElement();
    const scrollableElement = this.scrollableElement;
    const clientX = this.currentMousePosition.clientX;
    const clientY = this.currentMousePosition.clientY;
    if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
      const {
        offsetHeight,
        offsetWidth
      } = scrollableElement;
      if (rect.top + offsetHeight - clientY < sensitivity) {
        scrollableElement.scrollTop += speed;
      } else if (clientY - rect.top < sensitivity) {
        scrollableElement.scrollTop -= speed;
      }
      if (rect.left + offsetWidth - clientX < sensitivity) {
        scrollableElement.scrollLeft += speed;
      } else if (clientX - rect.left < sensitivity) {
        scrollableElement.scrollLeft -= speed;
      }
    } else {
      const {
        innerHeight,
        innerWidth
      } = window;
      if (clientY < sensitivity) {
        documentScrollingElement.scrollTop -= speed;
      } else if (innerHeight - clientY < sensitivity) {
        documentScrollingElement.scrollTop += speed;
      }
      if (clientX < sensitivity) {
        documentScrollingElement.scrollLeft -= speed;
      } else if (innerWidth - clientX < sensitivity) {
        documentScrollingElement.scrollLeft += speed;
      }
    }
    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }
}

function hasOverflow(element) {
  const overflowRegex = /(auto|scroll)/;
  const computedStyles = getComputedStyle(element, null);
  const overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');
  return overflowRegex.test(overflow);
}

function isStaticallyPositioned(element) {
  const position = getComputedStyle(element).getPropertyValue('position');
  return position === 'static';
}

function closestScrollableElement(element) {
  if (!element) {
    return getDocumentScrollingElement();
  }
  const position = getComputedStyle(element).getPropertyValue('position');
  const excludeStaticParents = position === 'absolute';
  const scrollableElement = closest(element, parent => {
    if (excludeStaticParents && isStaticallyPositioned(parent)) {
      return false;
    }
    return hasOverflow(parent);
  });
  if (position === 'fixed' || !scrollableElement) {
    return getDocumentScrollingElement();
  } else {
    return scrollableElement;
  }
}

function getDocumentScrollingElement() {
  return document.scrollingElement || document.documentElement;
}

class Emitter {
  constructor() {
    this.callbacks = {};
  }

  on(type, ...callbacks) {
    if (!this.callbacks[type]) {
      this.callbacks[type] = [];
    }
    this.callbacks[type].push(...callbacks);
    return this;
  }

  off(type, callback) {
    if (!this.callbacks[type]) {
      return null;
    }
    const copy = this.callbacks[type].slice(0);
    for (let i = 0; i < copy.length; i++) {
      if (callback === copy[i]) {
        this.callbacks[type].splice(i, 1);
      }
    }
    return this;
  }

  trigger(event) {
    if (!this.callbacks[event.type]) {
      return null;
    }
    const callbacks = [...this.callbacks[event.type]];
    const caughtErrors = [];
    for (let i = callbacks.length - 1; i >= 0; i--) {
      const callback = callbacks[i];
      try {
        callback(event);
      } catch (error) {
        caughtErrors.push(error);
      }
    }
    if (caughtErrors.length) {

      console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);

    }

    return this;
  }
}

class DraggableEvent extends AbstractEvent {

  get draggable() {
    return this.data.draggable;
  }
}

DraggableEvent.type = 'draggable';
class DraggableInitializedEvent extends DraggableEvent {}

DraggableInitializedEvent.type = 'draggable:initialize';
class DraggableDestroyEvent extends DraggableEvent {}
DraggableDestroyEvent.type = 'draggable:destroy';

const onDragStart$1 = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop$1 = Symbol('onDragStop');
const onDragPressure = Symbol('onDragPressure');
const dragStop = Symbol('dragStop');

const defaultAnnouncements$1 = {
  'drag:start': event => `Picked up ${event.source.textContent.trim() || event.source.id || 'draggable element'}`,
  'drag:stop': event => `Released ${event.source.textContent.trim() || event.source.id || 'draggable element'}`
};
const defaultClasses = {
  'container:dragging': 'draggable-container--is-dragging',
  'source:dragging': 'draggable-source--is-dragging',
  'source:placed': 'draggable-source--placed',
  'container:placed': 'draggable-container--placed',
  'body:dragging': 'draggable--is-dragging',
  'draggable:over': 'draggable--over',
  'container:over': 'draggable-container--over',
  'source:original': 'draggable--original',
  mirror: 'draggable-mirror'
};
const defaultOptions = {
  draggable: '.draggable-source',
  handle: null,
  delay: {},
  distance: 0,
  placedTimeout: 800,
  plugins: [],
  sensors: [],
  exclude: {
    plugins: [],
    sensors: []
  }
};

class Draggable {

  constructor(containers = [document.body], options = {}) {

    if (containers instanceof NodeList || containers instanceof Array) {
      this.containers = [...containers];
    } else if (containers instanceof HTMLElement) {
      this.containers = [containers];
    } else {
      throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');
    }
    this.options = {
      ...defaultOptions,
      ...options,
      classes: {
        ...defaultClasses,
        ...(options.classes || {})
      },
      announcements: {
        ...defaultAnnouncements$1,
        ...(options.announcements || {})
      },
      exclude: {
        plugins: options.exclude && options.exclude.plugins || [],
        sensors: options.exclude && options.exclude.sensors || []
      }
    };

    this.emitter = new Emitter();

    this.dragging = false;

    this.plugins = [];

    this.sensors = [];
    this[onDragStart$1] = this[onDragStart$1].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop$1] = this[onDragStop$1].bind(this);
    this[onDragPressure] = this[onDragPressure].bind(this);
    this[dragStop] = this[dragStop].bind(this);
    document.addEventListener('drag:start', this[onDragStart$1], true);
    document.addEventListener('drag:move', this[onDragMove], true);
    document.addEventListener('drag:stop', this[onDragStop$1], true);
    document.addEventListener('drag:pressure', this[onDragPressure], true);
    const defaultPlugins = Object.values(Draggable.Plugins).filter(Plugin => !this.options.exclude.plugins.includes(Plugin));
    const defaultSensors = Object.values(Draggable.Sensors).filter(sensor => !this.options.exclude.sensors.includes(sensor));
    this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);
    this.addSensor(...[...defaultSensors, ...this.options.sensors]);
    const draggableInitializedEvent = new DraggableInitializedEvent({
      draggable: this
    });
    this.on('mirror:created', ({
      mirror
    }) => this.mirror = mirror);
    this.on('mirror:destroy', () => this.mirror = null);
    this.trigger(draggableInitializedEvent);
  }

  destroy() {
    document.removeEventListener('drag:start', this[onDragStart$1], true);
    document.removeEventListener('drag:move', this[onDragMove], true);
    document.removeEventListener('drag:stop', this[onDragStop$1], true);
    document.removeEventListener('drag:pressure', this[onDragPressure], true);
    const draggableDestroyEvent = new DraggableDestroyEvent({
      draggable: this
    });
    this.trigger(draggableDestroyEvent);
    this.removePlugin(...this.plugins.map(plugin => plugin.constructor));
    this.removeSensor(...this.sensors.map(sensor => sensor.constructor));
  }

  addPlugin(...plugins) {
    const activePlugins = plugins.map(Plugin => new Plugin(this));
    activePlugins.forEach(plugin => plugin.attach());
    this.plugins = [...this.plugins, ...activePlugins];
    return this;
  }

  removePlugin(...plugins) {
    const removedPlugins = this.plugins.filter(plugin => plugins.includes(plugin.constructor));
    removedPlugins.forEach(plugin => plugin.detach());
    this.plugins = this.plugins.filter(plugin => !plugins.includes(plugin.constructor));
    return this;
  }

  addSensor(...sensors) {
    const activeSensors = sensors.map(Sensor => new Sensor(this.containers, this.options));
    activeSensors.forEach(sensor => sensor.attach());
    this.sensors = [...this.sensors, ...activeSensors];
    return this;
  }

  removeSensor(...sensors) {
    const removedSensors = this.sensors.filter(sensor => sensors.includes(sensor.constructor));
    removedSensors.forEach(sensor => sensor.detach());
    this.sensors = this.sensors.filter(sensor => !sensors.includes(sensor.constructor));
    return this;
  }

  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
    this.sensors.forEach(sensor => sensor.addContainer(...containers));
    return this;
  }

  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
    this.sensors.forEach(sensor => sensor.removeContainer(...containers));
    return this;
  }

  on(type, ...callbacks) {
    this.emitter.on(type, ...callbacks);
    return this;
  }

  off(type, callback) {
    this.emitter.off(type, callback);
    return this;
  }

  trigger(event) {
    this.emitter.trigger(event);
    return this;
  }

  getClassNameFor(name) {
    return this.getClassNamesFor(name)[0];
  }

  getClassNamesFor(name) {
    const classNames = this.options.classes[name];
    if (classNames instanceof Array) {
      return classNames;
    } else if (typeof classNames === 'string' || classNames instanceof String) {
      return [classNames];
    } else {
      return [];
    }
  }

  isDragging() {
    return Boolean(this.dragging);
  }

  getDraggableElements() {
    return this.containers.reduce((current, container) => {
      return [...current, ...this.getDraggableElementsForContainer(container)];
    }, []);
  }

  getDraggableElementsForContainer(container) {
    const allDraggableElements = container.querySelectorAll(this.options.draggable);
    return [...allDraggableElements].filter(childElement => {
      return childElement !== this.originalSource && childElement !== this.mirror;
    });
  }

  cancel() {
    this[dragStop]();
  }

  [onDragStart$1](event) {
    const sensorEvent = getSensorEvent(event);
    const {
      target,
      container,
      originalSource
    } = sensorEvent;
    if (!this.containers.includes(container)) {
      return;
    }
    if (this.options.handle && target && !closest(target, this.options.handle)) {
      sensorEvent.cancel();
      return;
    }
    this.originalSource = originalSource;
    this.sourceContainer = container;
    if (this.lastPlacedSource && this.lastPlacedContainer) {
      clearTimeout(this.placedTimeoutID);
      this.lastPlacedSource.classList.remove(...this.getClassNamesFor('source:placed'));
      this.lastPlacedContainer.classList.remove(...this.getClassNamesFor('container:placed'));
    }
    this.source = this.originalSource.cloneNode(true);
    this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
    this.originalSource.style.display = 'none';
    const dragStartEvent = new DragStartEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });
    this.trigger(dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (dragStartEvent.canceled()) {
      this.source.remove();
      this.originalSource.style.display = null;
      return;
    }
    this.originalSource.classList.add(...this.getClassNamesFor('source:original'));
    this.source.classList.add(...this.getClassNamesFor('source:dragging'));
    this.sourceContainer.classList.add(...this.getClassNamesFor('container:dragging'));
    document.body.classList.add(...this.getClassNamesFor('body:dragging'));
    applyUserSelect(document.body, 'none');
    requestAnimationFrame(() => {
      const oldSensorEvent = getSensorEvent(event);
      const newSensorEvent = oldSensorEvent.clone({
        target: this.source
      });
      this[onDragMove]({
        ...event,
        detail: newSensorEvent
      });
    });
  }

  [onDragMove](event) {
    if (!this.dragging) {
      return;
    }
    const sensorEvent = getSensorEvent(event);
    const {
      container
    } = sensorEvent;
    let target = sensorEvent.target;
    const dragMoveEvent = new DragMoveEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });
    this.trigger(dragMoveEvent);
    if (dragMoveEvent.canceled()) {
      sensorEvent.cancel();
    }
    target = closest(target, this.options.draggable);
    const withinCorrectContainer = closest(sensorEvent.target, this.containers);
    const overContainer = sensorEvent.overContainer || withinCorrectContainer;
    const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
    const isLeavingDraggable = this.currentOver && target !== this.currentOver;
    const isOverContainer = overContainer && this.currentOverContainer !== overContainer;
    const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;
    if (isLeavingDraggable) {
      const dragOutEvent = new DragOutEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        over: this.currentOver,
        overContainer: this.currentOverContainer
      });
      this.currentOver.classList.remove(...this.getClassNamesFor('draggable:over'));
      this.currentOver = null;
      this.trigger(dragOutEvent);
    }
    if (isLeavingContainer) {
      const dragOutContainerEvent = new DragOutContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer: this.currentOverContainer
      });
      this.currentOverContainer.classList.remove(...this.getClassNamesFor('container:over'));
      this.currentOverContainer = null;
      this.trigger(dragOutContainerEvent);
    }
    if (isOverContainer) {
      overContainer.classList.add(...this.getClassNamesFor('container:over'));
      const dragOverContainerEvent = new DragOverContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer
      });
      this.currentOverContainer = overContainer;
      this.trigger(dragOverContainerEvent);
    }
    if (isOverDraggable) {
      target.classList.add(...this.getClassNamesFor('draggable:over'));
      const dragOverEvent = new DragOverEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer,
        over: target
      });
      this.currentOver = target;
      this.trigger(dragOverEvent);
    }
  }

  [dragStop](event) {
    if (!this.dragging) {
      return;
    }
    this.dragging = false;
    const dragStopEvent = new DragStopEvent({
      source: this.source,
      originalSource: this.originalSource,
      sensorEvent: event ? event.sensorEvent : null,
      sourceContainer: this.sourceContainer
    });
    this.trigger(dragStopEvent);
    if (!dragStopEvent.canceled()) this.source.parentNode.insertBefore(this.originalSource, this.source);
    this.source.remove();
    this.originalSource.style.display = '';
    this.source.classList.remove(...this.getClassNamesFor('source:dragging'));
    this.originalSource.classList.remove(...this.getClassNamesFor('source:original'));
    this.originalSource.classList.add(...this.getClassNamesFor('source:placed'));
    this.sourceContainer.classList.add(...this.getClassNamesFor('container:placed'));
    this.sourceContainer.classList.remove(...this.getClassNamesFor('container:dragging'));
    document.body.classList.remove(...this.getClassNamesFor('body:dragging'));
    applyUserSelect(document.body, '');
    if (this.currentOver) {
      this.currentOver.classList.remove(...this.getClassNamesFor('draggable:over'));
    }
    if (this.currentOverContainer) {
      this.currentOverContainer.classList.remove(...this.getClassNamesFor('container:over'));
    }
    this.lastPlacedSource = this.originalSource;
    this.lastPlacedContainer = this.sourceContainer;
    this.placedTimeoutID = setTimeout(() => {
      if (this.lastPlacedSource) {
        this.lastPlacedSource.classList.remove(...this.getClassNamesFor('source:placed'));
      }
      if (this.lastPlacedContainer) {
        this.lastPlacedContainer.classList.remove(...this.getClassNamesFor('container:placed'));
      }
      this.lastPlacedSource = null;
      this.lastPlacedContainer = null;
    }, this.options.placedTimeout);
    const dragStoppedEvent = new DragStoppedEvent({
      source: this.source,
      originalSource: this.originalSource,
      sensorEvent: event ? event.sensorEvent : null,
      sourceContainer: this.sourceContainer
    });
    this.trigger(dragStoppedEvent);
    this.source = null;
    this.originalSource = null;
    this.currentOverContainer = null;
    this.currentOver = null;
    this.sourceContainer = null;
  }

  [onDragStop$1](event) {
    this[dragStop](event);
  }

  [onDragPressure](event) {
    if (!this.dragging) {
      return;
    }
    const sensorEvent = getSensorEvent(event);
    const source = this.source || closest(sensorEvent.originalEvent.target, this.options.draggable);
    const dragPressureEvent = new DragPressureEvent({
      sensorEvent,
      source,
      pressure: sensorEvent.pressure
    });
    this.trigger(dragPressureEvent);
  }
}

Draggable.Plugins = {
  Announcement,
  Focusable,
  Mirror,
  Scrollable
};

Draggable.Sensors = {
  MouseSensor,
  TouchSensor
};
function getSensorEvent(event) {
  return event.detail;
}
function applyUserSelect(element, value) {
  element.style.webkitUserSelect = value;
  element.style.mozUserSelect = value;
  element.style.msUserSelect = value;
  element.style.oUserSelect = value;
  element.style.userSelect = value;
}

class DroppableEvent extends AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
DroppableEvent.type = 'droppable';

class DroppableStartEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableStartEvent.type = 'droppable:start';
DroppableStartEvent.cancelable = true;

class DroppableDroppedEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableDroppedEvent.type = 'droppable:dropped';
DroppableDroppedEvent.cancelable = true;

class DroppableReturnedEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableReturnedEvent.type = 'droppable:returned';
DroppableReturnedEvent.cancelable = true;

class DroppableStopEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableStopEvent.type = 'droppable:stop';
DroppableStopEvent.cancelable = true;

class SwappableEvent extends AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}

SwappableEvent.type = 'swappable';
class SwappableStartEvent extends SwappableEvent {}
SwappableStartEvent.type = 'swappable:start';
SwappableStartEvent.cancelable = true;

class SwappableSwapEvent extends SwappableEvent {

  get over() {
    return this.data.over;
  }

  get overContainer() {
    return this.data.overContainer;
  }
}
SwappableSwapEvent.type = 'swappable:swap';
SwappableSwapEvent.cancelable = true;

class SwappableSwappedEvent extends SwappableEvent {

  get swappedElement() {
    return this.data.swappedElement;
  }
}

SwappableSwappedEvent.type = 'swappable:swapped';
class SwappableStopEvent extends SwappableEvent {}
SwappableStopEvent.type = 'swappable:stop';

class SortableEvent extends AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
SortableEvent.type = 'sortable';

class SortableStartEvent extends SortableEvent {

  get startIndex() {
    return this.data.startIndex;
  }

  get startContainer() {
    return this.data.startContainer;
  }
}
SortableStartEvent.type = 'sortable:start';
SortableStartEvent.cancelable = true;

class SortableSortEvent extends SortableEvent {

  get currentIndex() {
    return this.data.currentIndex;
  }

  get over() {
    return this.data.over;
  }

  get overContainer() {
    return this.data.dragEvent.overContainer;
  }
}
SortableSortEvent.type = 'sortable:sort';
SortableSortEvent.cancelable = true;

class SortableSortedEvent extends SortableEvent {

  get oldIndex() {
    return this.data.oldIndex;
  }

  get newIndex() {
    return this.data.newIndex;
  }

  get oldContainer() {
    return this.data.oldContainer;
  }

  get newContainer() {
    return this.data.newContainer;
  }
}
SortableSortedEvent.type = 'sortable:sorted';

class SortableStopEvent extends SortableEvent {

  get oldIndex() {
    return this.data.oldIndex;
  }

  get newIndex() {
    return this.data.newIndex;
  }

  get oldContainer() {
    return this.data.oldContainer;
  }

  get newContainer() {
    return this.data.newContainer;
  }
}
SortableStopEvent.type = 'sortable:stop';

const onDragStart = Symbol('onDragStart');
const onDragOverContainer = Symbol('onDragOverContainer');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

function onSortableSortedDefaultAnnouncement({
  dragEvent
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';
  if (dragEvent.over) {
    const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';
    const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;
    if (isFollowing) {
      return `Placed ${sourceText} after ${overText}`;
    } else {
      return `Placed ${sourceText} before ${overText}`;
    }
  } else {

    return `Placed ${sourceText} into a different container`;
  }
}

const defaultAnnouncements = {
  'sortable:sorted': onSortableSortedDefaultAnnouncement
};

class Sortable extends Draggable {

  constructor(containers = [], options = {}) {
    super(containers, {
      ...options,
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      }
    });

    this.startIndex = null;

    this.startContainer = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOverContainer] = this[onDragOverContainer].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this.on('drag:start', this[onDragStart]).on('drag:over:container', this[onDragOverContainer]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  destroy() {
    super.destroy();
    this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);
  }

  index(element) {
    return this.getSortableElementsForContainer(element.parentNode).indexOf(element);
  }

  getSortableElementsForContainer(container) {
    const allSortableElements = container.querySelectorAll(this.options.draggable);
    return [...allSortableElements].filter(childElement => {
      return childElement !== this.originalSource && childElement !== this.mirror && childElement.parentNode === container;
    });
  }

  [onDragStart](event) {
    this.startContainer = event.source.parentNode;
    this.startIndex = this.index(event.source);
    const sortableStartEvent = new SortableStartEvent({
      dragEvent: event,
      startIndex: this.startIndex,
      startContainer: this.startContainer
    });
    this.trigger(sortableStartEvent);
    if (sortableStartEvent.canceled()) {
      event.cancel();
    }
  }

  [onDragOverContainer](event) {
    if (event.canceled()) {
      return;
    }
    const {
      source,
      over,
      overContainer
    } = event;
    const oldIndex = this.index(source);
    const sortableSortEvent = new SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });
    this.trigger(sortableSortEvent);
    if (sortableSortEvent.canceled()) {
      return;
    }
    const children = this.getSortableElementsForContainer(overContainer);
    const moves = move({
      source,
      over,
      overContainer,
      children
    });
    if (!moves) {
      return;
    }
    const {
      oldContainer,
      newContainer
    } = moves;
    const newIndex = this.index(event.source);
    const sortableSortedEvent = new SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });
    this.trigger(sortableSortedEvent);
  }

  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source) {
      return;
    }
    const {
      source,
      over,
      overContainer
    } = event;
    const oldIndex = this.index(source);
    const sortableSortEvent = new SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });
    this.trigger(sortableSortEvent);
    if (sortableSortEvent.canceled()) {
      return;
    }
    const children = this.getDraggableElementsForContainer(overContainer);
    const moves = move({
      source,
      over,
      overContainer,
      children
    });
    if (!moves) {
      return;
    }
    const {
      oldContainer,
      newContainer
    } = moves;
    const newIndex = this.index(source);
    const sortableSortedEvent = new SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });
    this.trigger(sortableSortedEvent);
  }

  [onDragStop](event) {
    const sortableStopEvent = new SortableStopEvent({
      dragEvent: event,
      oldIndex: this.startIndex,
      newIndex: this.index(event.source),
      oldContainer: this.startContainer,
      newContainer: event.source.parentNode
    });
    this.trigger(sortableStopEvent);
    this.startIndex = null;
    this.startContainer = null;
  }
}
function index(element) {
  return Array.prototype.indexOf.call(element.parentNode.children, element);
}
function move({
  source,
  over,
  overContainer,
  children
}) {
  const emptyOverContainer = !children.length;
  const differentContainer = source.parentNode !== overContainer;
  const sameContainer = over && source.parentNode === over.parentNode;
  if (emptyOverContainer) {
    return moveInsideEmptyContainer(source, overContainer);
  } else if (sameContainer) {
    return moveWithinContainer(source, over);
  } else if (differentContainer) {
    return moveOutsideContainer(source, over, overContainer);
  } else {
    return null;
  }
}
function moveInsideEmptyContainer(source, overContainer) {
  const oldContainer = source.parentNode;
  overContainer.appendChild(source);
  return {
    oldContainer,
    newContainer: overContainer
  };
}
function moveWithinContainer(source, over) {
  const oldIndex = index(source);
  const newIndex = index(over);
  if (oldIndex < newIndex) {
    source.parentNode.insertBefore(source, over.nextElementSibling);
  } else {
    source.parentNode.insertBefore(source, over);
  }
  return {
    oldContainer: source.parentNode,
    newContainer: source.parentNode
  };
}
function moveOutsideContainer(source, over, overContainer) {
  const oldContainer = source.parentNode;
  if (over) {
    over.parentNode.insertBefore(source, over);
  } else {

    overContainer.appendChild(source);
  }
  return {
    oldContainer,
    newContainer: source.parentNode
  };
}

var __defProp$a = Object.defineProperty;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$a = (obj, key, value) => __defNormalProp$a(obj, typeof key !== "symbol" ? key + "" : key, value);
class SortableList extends Component {
  constructor(items) {
    super();
    __publicField$a(this, "items");
    __publicField$a(this, "eventListeners", {
      sort: []
    });
    this.items = items;
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  render(rootElement = void 0) {
    const element = document.createElement("ul");
    element.classList.add(
      "flex",
      "items-center",
      "p-2",
      "flex-col",
      "border",
      "border-neutral",
      "rounded-md",
      "shadow-sm",
      "gap-4",
      "w-full"
    );
    for (const item of this.items) {
      const listItem = document.createElement("li");
      listItem.classList.add("flex", "flex-1", "w-full", "bg-neutral");
      element.appendChild(listItem);
      const renderedItem = item.render(listItem);
      renderedItem.classList.add("flex-1", "w-full");
    }
    const sortable = new Sortable(element, {
      draggable: "li",
      plugins: [SortAnimation],
      handle: ".cursor-move"
    });
    sortable.on("sortable:sorted", (evt) => {
      this.eventListeners.sort.forEach((element2) => {
        element2(evt);
      });
    });
    if (rootElement) {
      rootElement.appendChild(element);
    }
    return element;
  }
}

var __defProp$9 = Object.defineProperty;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$9 = (obj, key, value) => __defNormalProp$9(obj, typeof key !== "symbol" ? key + "" : key, value);
class ListItem extends Component {
  constructor(inner) {
    super();
    __publicField$9(this, "inner");
    __publicField$9(this, "eventListeners", {
      edit: [],
      delete: []
    });
    this.inner = inner;
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  render(rootElement = void 0) {
    const element = document.createElement("div");
    element.classList.add(
      "flex",
      "items-center",
      "p-2",
      "border",
      "border-neutral-content",
      "rounded-md",
      "shadow-sm",
      "gap-4"
    );
    const textDiv = document.createElement("div");
    textDiv.classList.add("flex-grow");
    element.appendChild(textDiv);
    this.inner.render(textDiv);
    const interactionDiv = document.createElement("div");
    interactionDiv.classList.add("flex", "gap-4");
    element.appendChild(interactionDiv);
    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("flex", "gap-2");
    interactionDiv.appendChild(iconsDiv);
    const editButton = new IconButton(Pencil).render(iconsDiv);
    interactionDiv.appendChild(editButton);
    editButton.addEventListener("click", (event) => {
      this.eventListeners.edit.forEach((listener) => {
        listener(event);
      });
    });
    const deleteButton = new IconButton(Delete).render(iconsDiv);
    interactionDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", (event) => {
      this.eventListeners.delete.forEach((listener) => {
        listener(event);
      });
    });
    const gripDiv = document.createElement("div");
    gripDiv.classList.add(
      "cursor-move",
      "height-full",
      "w-6",
      "flex",
      "items-center",
      "justify-center"
    );
    interactionDiv.appendChild(gripDiv);
    const gripIcon = new Icon(GripVertical);
    gripIcon.render(gripDiv).classList;
    if (rootElement) {
      rootElement.appendChild(element);
    }
    return element;
  }
}

var __defProp$8 = Object.defineProperty;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$8 = (obj, key, value) => __defNormalProp$8(obj, typeof key !== "symbol" ? key + "" : key, value);
class IngredientListItemInner extends Component {
  constructor(ingredient) {
    super();
    __publicField$8(this, "ingredient");
    this.ingredient = ingredient;
  }
  render(rootElement = void 0) {
    const element = document.createElement("div");
    element.classList.add("flex", "items-center", "gap-2");
    const quantity = document.createElement("span");
    quantity.textContent = this.ingredient.quantity.toString();
    element.appendChild(quantity);
    const unit = document.createElement("span");
    unit.textContent = this.ingredient.unit;
    element.appendChild(unit);
    const name = document.createElement("span");
    name.textContent = this.ingredient.name;
    element.appendChild(name);
    if (rootElement) {
      rootElement.appendChild(element);
    }
    return element;
  }
}
class IngredientListItem extends Component {
  constructor(ingredient) {
    super();
    __publicField$8(this, "ingredient");
    __publicField$8(this, "eventListeners", {
      edit: [],
      delete: []
    });
    this.ingredient = ingredient;
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  render(rootElement = void 0) {
    const listItem = new ListItem(new IngredientListItemInner(this.ingredient));
    const element = listItem.render(rootElement);
    listItem.on("edit", () => {
      this.eventListeners.edit.forEach(
        (listener) => listener(new Event("edit"))
      );
    });
    listItem.on("delete", () => {
      this.eventListeners.delete.forEach(
        (listener) => listener(new Event("delete"))
      );
    });
    return element;
  }
}

var __defProp$7 = Object.defineProperty;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$7 = (obj, key, value) => __defNormalProp$7(obj, key + "" , value);
class DeleteModal {
  constructor() {
    __publicField$7(this, "eventListeners", {
      delete: [],
      cancel: []
    });
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  show(name, description) {
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

var __defProp$6 = Object.defineProperty;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$6 = (obj, key, value) => __defNormalProp$6(obj, typeof key !== "symbol" ? key + "" : key, value);
class IngredientsTabView extends Component {
  constructor(ingredients) {
    super();
    __publicField$6(this, "ingredients");
    __publicField$6(this, "activeDeleteIndex", 0);
    __publicField$6(this, "deleteOpen", false);
    __publicField$6(this, "eventListeners", {
      update: [],
      save: []
    });
    this.ingredients = ingredients;
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  update() {
    const event = new CustomEvent("update", {
      detail: this.ingredients
    });
    this.eventListeners.update.forEach((listener) => listener(event));
  }
  render(rootElement = void 0) {
    const element = document.createElement("div");
    element.classList.add("flex", "flex-col", "gap-4");
    const deleteModal = new DeleteModal();
    deleteModal.on("delete", (event) => {
      this.deleteOpen = false;
      this.ingredients.splice(this.activeDeleteIndex, 1);
      this.update();
      rerender();
    });
    deleteModal.on("cancel", (event) => {
      this.deleteOpen = false;
    });
    const deleteIngredient = () => {
      return deleteModal.show(
        this.ingredients[this.activeDeleteIndex]?.name || "",
        `Are you sure you want to delete ${this.ingredients[this.activeDeleteIndex]?.name}?`
      );
    };
    if (this.deleteOpen) {
      console.log("delete");
      deleteIngredient();
    }
    document.getElementById("ingredient-dialog")?.remove();
    const dialog = document.createElement("dialog");
    dialog.classList.add("modal");
    dialog.id = "ingredient-dialog";
    document.body.appendChild(dialog);
    const dialogBox = document.createElement("div");
    dialogBox.classList.add(
      "modal-box",
      "w-11/12",
      "max-w-5xl",
      "flex",
      "flex-col",
      "gap-4",
      "p-4"
    );
    dialog.appendChild(dialogBox);
    let editIndex = 0;
    let editing = false;
    const dialogTitle = document.createElement("h3");
    dialogTitle.classList.add("font-bold", "text-lg");
    dialogTitle.textContent = "Add Ingredient";
    dialogBox.appendChild(dialogTitle);
    const dialogContent = document.createElement("form");
    dialogContent.method = "dialog";
    dialogContent.classList.add("flex", "flex-col", "gap-4");
    dialogContent.addEventListener("submit", (event) => {
      event.preventDefault();
      const tempIngredient = {
        name: nameInput.value,
        quantity: parseFloat(quantityInput.value) || 0,
        unit: unitInput.value
      };
      if (editing) {
        this.ingredients[editIndex] = tempIngredient;
        editing = false;
      } else {
        this.ingredients.push(tempIngredient);
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
    quantityInput.classList.add(
      "input",
      "input-bordered",
      "w-full",
      "max-w-full"
    );
    dialogContent.appendChild(quantityInput);
    const unitInput = document.createElement("input");
    unitInput.type = "text";
    unitInput.value = "";
    unitInput.placeholder = "Unit";
    unitInput.classList.add("input", "input-bordered", "w-full", "max-w-full");
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
    createButton.textContent = "Add Ingredient";
    createButton.addEventListener("click", (event) => {
      editing = false;
      addButton.textContent = "Add";
      nameInput.value = "";
      quantityInput.value = "0";
      unitInput.value = "";
      dialog.showModal();
    });
    element.appendChild(createButton);
    const indexs = this.ingredients.map((ingredient, index) => index);
    const ingredients = this.ingredients.map((ingredient, index) => {
      const item = new IngredientListItem(ingredient);
      item.on("delete", (event) => {
        this.activeDeleteIndex = indexs.indexOf(index);
        this.deleteOpen = true;
        deleteIngredient();
      });
      item.on("edit", (event) => {
        editIndex = indexs.indexOf(index);
        editing = true;
        addButton.textContent = "Save";
        nameInput.value = ingredient.name;
        quantityInput.value = ingredient.quantity.toString();
        unitInput.value = ingredient.unit;
        dialog.showModal();
      });
      return item;
    });
    const sortableList = new SortableList(ingredients);
    sortableList.on("sort", (event) => {
      const item = this.ingredients.splice(event.oldIndex, 1)[0];
      this.ingredients.splice(event.newIndex, 0, item);
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

var __defProp$5 = Object.defineProperty;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$5 = (obj, key, value) => __defNormalProp$5(obj, typeof key !== "symbol" ? key + "" : key, value);
class StepListItemInner extends Component {
  constructor(step) {
    super();
    __publicField$5(this, "step");
    this.step = step;
  }
  render(rootElement = void 0) {
    const element = document.createElement("div");
    element.classList.add("flex", "items-center", "justify-between");
    const name = document.createElement("span");
    name.textContent = this.step.direction;
    element.appendChild(name);
    const time = document.createElement("div");
    time.classList.add("flex", "gap-4");
    element.appendChild(time);
    const timeValue = document.createElement("span");
    const hours = Math.floor(this.step.time / 3600);
    const hoursString = hours > 0 ? `${hours}:` : "";
    const minutes = Math.floor(this.step.time % 3600 / 60);
    const minutesString = hours > 0 ? minutes.toString().padStart(2, "0") : minutes.toString();
    const seconds = this.step.time % 60;
    const secondsString = seconds.toString().padStart(2, "0");
    timeValue.textContent = `${hoursString}${minutesString}:${secondsString}`;
    time.appendChild(timeValue);
    let cookingIcon;
    switch (this.step.timeType) {
      case TimeType.Cooking:
        cookingIcon = CookingPot;
        break;
      case TimeType.Preparation:
        cookingIcon = Carrot;
        break;
      case TimeType.Waiting:
        cookingIcon = Timer;
        break;
    }
    const icon = new Icon(cookingIcon);
    icon.render(time);
    if (rootElement) {
      rootElement.appendChild(element);
    }
    return element;
  }
}
class StepListItem extends Component {
  constructor(step) {
    super();
    __publicField$5(this, "step");
    __publicField$5(this, "eventListeners", {
      edit: [],
      delete: []
    });
    this.step = step;
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  render(rootElement = void 0) {
    const listItem = new ListItem(new StepListItemInner(this.step));
    const element = listItem.render(rootElement);
    listItem.on("edit", () => {
      this.eventListeners.edit.forEach(
        (listener) => listener(new Event("edit"))
      );
    });
    listItem.on("delete", () => {
      this.eventListeners.delete.forEach(
        (listener) => listener(new Event("delete"))
      );
    });
    return element;
  }
}

var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$4 = (obj, key, value) => __defNormalProp$4(obj, typeof key !== "symbol" ? key + "" : key, value);
class StepsTabView extends Component {
  constructor(steps) {
    super();
    __publicField$4(this, "steps");
    __publicField$4(this, "activeDeleteIndex", 0);
    __publicField$4(this, "deleteOpen", false);
    __publicField$4(this, "eventListeners", {
      update: [],
      save: []
    });
    this.steps = steps;
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  update() {
    const event = new CustomEvent("update", {
      detail: this.steps
    });
    this.eventListeners.update.forEach((listener) => listener(event));
  }
  render(rootElement = void 0) {
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
      return deleteModal.show(
        "this",
        `Are you sure you want to delete ${this.steps[this.activeDeleteIndex]?.direction}?`
      );
    };
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
    dialogBox.classList.add(
      "modal-box",
      "w-11/12",
      "max-w-5xl",
      "flex",
      "flex-col",
      "gap-4",
      "p-4"
    );
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
      const tempStep = {
        time: parseFloat(timeInput.value) || 0,
        timeType: timeTypeSelect.value || TimeType.Cooking,
        direction: directionInput.value
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
    const timeInput = document.createElement("input");
    timeInput.type = "number";
    timeInput.min = "0";
    timeInput.step = "any";
    timeInput.value = "0";
    timeInput.placeholder = "Time";
    timeInput.classList.add("input", "input-bordered", "w-full", "max-w-full");
    dialogContent.appendChild(timeInput);
    const timeTypeSelect = document.createElement("select");
    timeTypeSelect.classList.add(
      "select",
      "select-bordered",
      "w-full",
      "max-w-full"
    );
    dialogContent.appendChild(timeTypeSelect);
    const defaultTimeTypeOption = document.createElement("option");
    defaultTimeTypeOption.value = "";
    defaultTimeTypeOption.disabled = true;
    defaultTimeTypeOption.textContent = "Select Time Type";
    timeTypeSelect.appendChild(defaultTimeTypeOption);
    const timeTypeOptions = [
      TimeType.Cooking,
      TimeType.Preparation,
      TimeType.Waiting
    ];
    timeTypeOptions.forEach((option) => {
      const timeTypeOption = document.createElement("option");
      timeTypeOption.value = option;
      timeTypeOption.textContent = option;
      timeTypeSelect.appendChild(timeTypeOption);
    });
    const directionInput = document.createElement("textarea");
    directionInput.rows = 4;
    directionInput.value = "";
    directionInput.placeholder = "Description";
    directionInput.classList.add("textarea", "textarea-bordered", "w-full");
    dialogContent.appendChild(directionInput);
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
      timeInput.value = "0";
      timeTypeSelect.value = "";
      directionInput.value = "";
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
        timeInput.value = step.time.toString();
        timeTypeSelect.value = step.timeType;
        directionInput.value = step.direction;
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

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value);
class Editor extends Component {
  constructor(recipe) {
    super();
    __publicField$3(this, "eventListeners", {
      save: [],
      cancel: []
    });
    __publicField$3(this, "view");
    __publicField$3(this, "infoTabView");
    __publicField$3(this, "ingredientsTabView");
    __publicField$3(this, "stepsTabView");
    __publicField$3(this, "recipe");
    const localActiveTab = sessionStorage.getItem("editorActiveTab");
    if (localActiveTab) {
      this.view = parseInt(localActiveTab);
      if (this.view < 0 /* Info */ || this.view > 3 /* Steps */) {
        this.view = 0 /* Info */;
      }
    } else {
      this.view = 0 /* Info */;
    }
    const localRecipe = sessionStorage.getItem("editorRecipe");
    if (localRecipe) {
      try {
        this.recipe = JSON.parse(localRecipe);
      } catch (error) {
        this.recipe = recipe;
      }
    } else {
      this.recipe = recipe;
    }
    const save = () => {
      this.eventListeners.save.forEach(
        (listener) => listener(
          new CustomEvent("save", {
            detail: this.recipe
          })
        )
      );
    };
    this.infoTabView = new InfoTabView(this.recipe.info);
    this.infoTabView.on("update", (event) => {
      this.recipe.info = event.detail;
      sessionStorage.setItem("editorRecipe", JSON.stringify(this.recipe));
    });
    this.infoTabView.on("save", (event) => {
      save();
    });
    this.ingredientsTabView = new IngredientsTabView(this.recipe.ingredients);
    this.ingredientsTabView.on("update", (event) => {
      this.recipe.ingredients = event.detail;
      sessionStorage.setItem("editorRecipe", JSON.stringify(this.recipe));
    });
    this.ingredientsTabView.on("save", (event) => {
      save();
    });
    this.stepsTabView = new StepsTabView(this.recipe.steps);
    this.stepsTabView.on("update", (event) => {
      this.recipe.steps = event.detail;
      sessionStorage.setItem("editorRecipe", JSON.stringify(this.recipe));
    });
    this.stepsTabView.on("save", (event) => {
      save();
    });
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  render(rootElement = void 0) {
    sessionStorage.setItem("editorActiveTab", this.view.toString());
    const div = document.createElement("div");
    div.classList.add("flex", "flex-1", "h-full", "flex-col", "gap-4");
    const tabs = document.createElement("div");
    tabs.classList.add("tabs", "tabs-bordered");
    div.appendChild(tabs);
    const infoTab = document.createElement("a");
    infoTab.classList.add("tab");
    infoTab.textContent = "Info";
    const infoTabElement = tabs.appendChild(infoTab);
    infoTabElement.addEventListener("click", () => {
      this.view = 0 /* Info */;
      rerender();
    });
    const ingredientsTab = document.createElement("a");
    ingredientsTab.classList.add("tab");
    ingredientsTab.textContent = "Ingredients";
    const ingredientsTabElement = tabs.appendChild(ingredientsTab);
    ingredientsTabElement.addEventListener("click", () => {
      this.view = 1 /* Ingredients */;
      rerender();
    });
    const recursionTab = document.createElement("a");
    recursionTab.classList.add("tab", "tab-disabled");
    recursionTab.textContent = "Recursion";
    const recursionTabElement = tabs.appendChild(recursionTab);
    recursionTabElement.addEventListener("click", () => {
    });
    const stepsTab = document.createElement("a");
    stepsTab.classList.add("tab");
    stepsTab.textContent = "Steps";
    const stepsTabElement = tabs.appendChild(stepsTab);
    stepsTabElement.addEventListener("click", () => {
      this.view = 3 /* Steps */;
      rerender();
    });
    switch (this.view) {
      case 0 /* Info */:
        infoTabElement.classList.add("tab-active");
        this.infoTabView.render(div);
        break;
      case 1 /* Ingredients */:
        ingredientsTabElement.classList.add("tab-active");
        this.ingredientsTabView.render(div);
        break;
      case 2 /* Recursion */:
        recursionTabElement.classList.add("tab-active");
        const recursion = document.createElement("div");
        recursion.textContent = "Recursion";
        div.appendChild(recursion);
      case 3 /* Steps */:
        stepsTabElement.classList.add("tab-active");
        this.stepsTabView.render(div);
        break;
    }
    if (rootElement) {
      rootElement.appendChild(div);
    }
    return div;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
class RecipeCard extends Component {
  constructor(recipeInfo) {
    super();
    __publicField$2(this, "recipeInfo");
    __publicField$2(this, "eventListeners", {
      edit: [],
      delete: []
    });
    this.recipeInfo = recipeInfo;
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  render(rootElement = void 0) {
    const element = document.createElement("div");
    element.classList.add(
      "card",
      "card-compact",
      "w-96",
      "bg-base-100",
      "shadow-xl"
    );
    const figure = document.createElement("figure");
    element.appendChild(figure);
    const img = document.createElement("img");
    img.src = "https://placehold.co/600x400/EEE/31343C";
    img.alt = this.recipeInfo.name;
    figure.appendChild(img);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    element.appendChild(cardBody);
    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = this.recipeInfo.name;
    cardBody.appendChild(title);
    const description = document.createElement("p");
    description.textContent = this.recipeInfo.description;
    cardBody.appendChild(description);
    const cardActions = document.createElement("div");
    cardActions.classList.add("card-actions", "justify-end");
    cardBody.appendChild(cardActions);
    const editButton = new IconButton(Pencil).render(cardActions);
    editButton.addEventListener("click", (event) => {
      this.eventListeners.edit.forEach((listener) => listener(event));
    });
    const deleteButton = new IconButton(Delete).render(cardActions);
    deleteButton.addEventListener("click", (event) => {
      this.eventListeners.delete.forEach((listener) => listener(event));
    });
    if (rootElement) {
      rootElement.appendChild(element);
    }
    return element;
  }
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
class RecipesView extends Component {
  constructor(recipes) {
    super();
    __publicField$1(this, "eventListeners", {
      edit: [],
      delete: [],
      new: []
    });
    __publicField$1(this, "recipes");
    this.recipes = recipes;
  }
  on(event, listener) {
    this.eventListeners[event].push(listener);
  }
  render(rootElement = void 0) {
    const div = document.createElement("div");
    div.classList.add("flex", "flex-col", "gap-4");
    const grid = document.createElement("div");
    grid.classList.add(
      "grid",
      "flex-1",
      "center-content",
      "justify-items-center",
      "gap-4",
      "grid-cols-1",
      "lg:grid-cols-2",
      "xl:grid-cols-3"
    );
    div.appendChild(grid);
    this.recipes.forEach((recipe, index) => {
      const card = new RecipeCard(recipe.info);
      card.on("edit", (event) => {
        this.eventListeners.edit.forEach(
          (listener) => listener(
            new CustomEvent("edit", {
              detail: {
                index
              }
            })
          )
        );
      });
      card.on("delete", (event) => {
        this.eventListeners.delete.forEach(
          (listener) => listener(
            new CustomEvent("delete", {
              detail: {
                index
              }
            })
          )
        );
      });
      card.render(grid);
    });
    if (rootElement) {
      rootElement.appendChild(div);
    }
    return div;
  }
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const demoRecipe = {
  info: {
    name: "Vanilla Ice Cream",
    description: "A very simple vanilla ice cream recipe. Based on the recipe from the amazing David Lebovitz.",
    yield: 2,
    yieldUnit: "pt"
  },
  ingredients: [
    {
      name: "heavy cream",
      quantity: 2,
      unit: "c"
    },
    {
      name: "whole milk",
      quantity: 1,
      unit: "c"
    },
    {
      name: "sugar",
      quantity: 0.75,
      unit: "c"
    },
    {
      name: "salt",
      quantity: 0.125,
      unit: "tsp"
    },
    {
      name: "vanilla extract",
      quantity: 1,
      unit: "tsp"
    }
  ],
  steps: [
    {
      direction: "In a medium saucepan, warm 1 cup of the cream with the sugar, and salt till simmering.",
      time: 60 * 5,
      timeType: TimeType.Cooking
    },
    {
      direction: "Turn off the heat and let steep for 1 hour.",
      time: 60 * 60,
      timeType: TimeType.Waiting
    },
    {
      direction: "In a medium bowl, pour the remaining 1 cup of cream and set a mesh strainer on top.",
      time: 10,
      timeType: TimeType.Preparation
    }
  ]
};
const defaultRecipe = {
  info: {
    name: "",
    description: "",
    yield: 0,
    yieldUnit: ""
  },
  ingredients: [],
  steps: []
};
class App {
  constructor(rootElement) {
    __publicField(this, "rootElement");
    __publicField(this, "recipes");
    __publicField(this, "activeIndex");
    __publicField(this, "editing");
    __publicField(this, "editNew");
    __publicField(this, "editor");
    this.rootElement = rootElement;
    const localRecipes = localStorage.getItem("recipes");
    if (localRecipes) {
      try {
        this.recipes = JSON.parse(localRecipes);
      } catch (error) {
        this.recipes = [demoRecipe];
      }
    } else {
      this.recipes = [demoRecipe];
    }
    const localEditing = sessionStorage.getItem("editing");
    this.editing = localEditing === "true";
    const localEditNew = sessionStorage.getItem("editNew");
    this.editNew = localEditNew === "true";
    const localActiveRecipeIndex = sessionStorage.getItem("activeRecipeIndex");
    if (localActiveRecipeIndex) {
      this.activeIndex = parseInt(localActiveRecipeIndex);
      if (this.activeIndex < 0 || this.activeIndex >= this.recipes.length) {
        this.activeIndex = 0;
      }
    } else {
      this.activeIndex = 0;
    }
    this.editor = null;
    if (this.editing) {
      this.edit(this.activeIndex);
    } else {
      sessionStorage.removeItem("editorRecipe");
      sessionStorage.removeItem("editorActiveTab");
    }
    addRerenderListener(() => this.render());
  }
  edit(index) {
    this.activeIndex = index;
    this.editing = true;
    sessionStorage.setItem("activeRecipeIndex", this.activeIndex.toString());
    sessionStorage.setItem("editing", "true");
    sessionStorage.setItem("editNew", this.editNew ? "true" : "false");
    this.editor = new Editor(this.recipes[this.activeIndex]);
    this.editor.on("save", (event) => {
      this.recipes[this.activeIndex] = event.detail;
      localStorage.setItem("recipes", JSON.stringify(this.recipes));
      this.editing = false;
      sessionStorage.setItem("editing", "false");
      sessionStorage.removeItem("editorRecipe");
      sessionStorage.removeItem("editorActiveTab");
      this.editor = null;
      rerender();
    });
    this.editor.on("cancel", () => {
      this.editing = false;
      sessionStorage.setItem("editing", "false");
      sessionStorage.setItem("editNew", "false");
      sessionStorage.removeItem("editorRecipe");
      sessionStorage.removeItem("editorActiveTab");
      if (this.editNew) {
        this.recipes.pop();
        this.editNew = false;
        localStorage.setItem("recipes", JSON.stringify(this.recipes));
      }
      this.editor = null;
      rerender();
    });
    rerender();
  }
  render() {
    this.rootElement.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("flex", "flex-1", "h-full", "flex-col", "gap-4", "p-4");
    this.rootElement.appendChild(div);
    const navbar = document.createElement("div");
    navbar.classList.add("navbar", "bg-base-100");
    div.appendChild(navbar);
    const title = document.createElement("div");
    title.classList.add("flex-1");
    navbar.appendChild(title);
    const titleText = document.createElement("a");
    titleText.classList.add("btn", "btn-ghost", "text-xl");
    titleText.textContent = "Recursipe";
    title.appendChild(titleText);
    if (this.editing) {
      const cancelButton = new IconButton(ArrowLeft);
      cancelButton.on("click", () => {
        this.editing = false;
        sessionStorage.setItem("editing", "false");
        sessionStorage.setItem("editNew", "false");
        sessionStorage.removeItem("editorRecipe");
        sessionStorage.removeItem("editorActiveTab");
        this.editor = null;
        if (this.editNew) {
          this.recipes.pop();
          this.editNew = false;
          localStorage.setItem("recipes", JSON.stringify(this.recipes));
        }
        rerender();
      });
      cancelButton.render(navbar);
    } else {
      const newButton = new IconButton(Plus);
      newButton.on("click", () => {
        this.recipes.push(defaultRecipe);
        localStorage.setItem("recipes", JSON.stringify(this.recipes));
        this.editNew = true;
        this.edit(this.recipes.length - 1);
        rerender();
      });
      newButton.render(navbar);
    }
    if (this.editor) {
      this.editor.render(div);
    } else {
      const recipeView = new RecipesView(this.recipes);
      recipeView.on("edit", (event) => {
        this.editNew = false;
        this.edit(event.detail.index);
        rerender();
      });
      recipeView.on("delete", (event) => {
        this.recipes.splice(event.detail.index, 1);
        localStorage.setItem("recipes", JSON.stringify(this.recipes));
        rerender();
      });
      recipeView.on("new", () => {
        this.recipes.push(defaultRecipe);
        localStorage.setItem("recipes", JSON.stringify(this.recipes));
        this.edit(this.recipes.length - 1);
        rerender();
      });
      recipeView.render(div);
    }
  }
}

const root = document.getElementById("app");
if (!root) {
  throw new Error("Root element not found");
}
const app = new App(root);
app.render();
