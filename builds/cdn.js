import Animate from '../src/index';

document.addEventListener('alpine:initializing', () => {
    Animate(window.Alpine);
}); 