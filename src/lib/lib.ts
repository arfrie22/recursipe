const rerenderListeners: Array<() => void> = [];
export function addRerenderListener(listener: () => void) {
  rerenderListeners.push(listener);
}

export function rerender() {
  rerenderListeners.forEach((listener) => listener());
}