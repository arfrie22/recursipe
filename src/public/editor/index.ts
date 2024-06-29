import { App } from './app';

async function init() {
    const root = document.getElementById('app');
    if (!root) {
        throw new Error('Root element not found');
    }

    const app = new App(root);
    await app.init();
    await app.render();
}

init();