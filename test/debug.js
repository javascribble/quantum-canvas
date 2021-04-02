import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/extensions/images.js';
import '/source/main.js';

const canvas = document.querySelector('quantum-canvas');
const image = document.querySelector('img');

const draw = () => canvas.drawImage({
    image,
    sx: 0,
    sy: 0,
    sw: image.width,
    sh: image.height,
    dx: 100,
    dy: 100,
    dw: image.width,
    dh: image.height
});

draw();

canvas.addEventListener('resize', draw);

document.body.style.visibility = 'visible';