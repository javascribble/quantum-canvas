import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

const canvas = document.querySelector('quantum-canvas');
const image = document.querySelector('img');

const sprite = {
    image,
    sx: 0,
    sy: 0,
    sw: 256,
    sh: 256,
    dx: 100,
    dy: 100,
    dw: 256,
    dh: 256
}

canvas.drawSprite(sprite);

const sprite2 = {
    ...sprite,
    dx: 300,
    dy: 300
}

const broker = new quantum.EventBroker();
canvas.integrate(broker);
broker.publish('drawSprite', sprite2);

document.body.style.visibility = 'visible';