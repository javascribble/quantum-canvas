import '/node_modules/@javascribble/quantum/source/global.js';
import '/source/global.js';

const canvas = document.querySelector('quantum-canvas');
const images = document.querySelectorAll('img');
fetch('/test/debug.json').then(response => response.json()).then(options => {
    const api = { options, loadResource: index => images[index] };
    canvas.integrate(api);

    Promise.all([api.loadMap(0), api.loadSprite(0)]).then(state => {
        api.drawMap(state[0]);
        api.drawSprite(state[1]);

        document.body.style.visibility = 'visible';
    });
});