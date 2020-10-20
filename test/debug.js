import '/node_modules/@javascribble/quantum/source/global.js';
import '/source/global.js';

const canvas = document.querySelector('quantum-canvas');
const images = document.querySelectorAll('img');
fetch('/test/debug.json').then(response => response.json()).then(options => {
    canvas.integrate(options);
    const { maps, sprites } = options;

    const map = maps[0];
    const tiles = canvas.loadTiles(map, images);
    canvas.drawTiles(map, tiles);

    const sprite = canvas.loadSprite(sprites[0], images);
    canvas.drawSprite(sprite);

    document.body.style.visibility = 'visible';
});