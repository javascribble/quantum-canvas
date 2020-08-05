import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

const canvas = document.querySelector('quantum-canvas');
const image = document.querySelector('img');
canvas.drawSprite({
    image,
    sx: 0,
    sy: 0,
    sw: 256,
    sh: 256,
    dx: 100,
    dy: 100,
    dw: 256,
    dh: 256
});

document.body.style.visibility = 'visible';