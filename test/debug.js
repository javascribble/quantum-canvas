import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/extensions/drawing.js';
import '/source/main.js';

const canvas = document.querySelector('quantum-canvas');
const source = document.querySelector('img');

canvas.addEventListener('resize', event => {
    canvas.drawImage({
        source,
        sx: 0,
        sy: 0,
        sw: source.width,
        sh: source.height,
        dx: 100,
        dy: 100,
        dw: source.width,
        dh: source.height
    });
});

document.body.style.visibility = 'visible';