import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/extensions/images.js';
import '/source/main.js';

const canvas = document.querySelector('quantum-canvas');
const image = document.querySelector('img');

const sprite = {
    image,
    sx: 0,
    sy: 0,
    sw: image.width,
    sh: image.height,
    dx: -image.width / 2,
    dy: -image.width / 2,
    dw: image.width,
    dh: image.height
};

const clone1 = {
    ...sprite,
    positionX: 200,
    positionY: 200,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1
};

const clone2 = {
    ...sprite,
    positionX: 100,
    positionY: 100,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
};

clone1.children = [clone2];

quantum.animate(time => {
    const radians = time.delta * 0.05 % 360 * Math.PI / 180;
    clone1.rotationZ += radians;
    clone2.rotationZ += radians;
    canvas.drawImageTree(clone1);
}).start();

document.body.style.visibility = 'visible';