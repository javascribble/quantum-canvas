import '/node_modules/@javascribble/quantum/source/export.js';
import '/source/export.js';

const canvas = document.querySelector('quantum-canvas');
const image = document.querySelector('img');

canvas.drawSprite({ image, sx: 0, sy: 0, sw: image.width, sh: image.height, dx: 100, dy: 100, dw: image.width, dh: image.height });

document.body.style.visibility = 'visible';