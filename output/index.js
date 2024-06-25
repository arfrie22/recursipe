import { App } from '$recipiesApp';

const root = document.getElementById('app');
if (!root) {
    throw new Error('Root element not found');
}
const app = new App(root);
app.render();
