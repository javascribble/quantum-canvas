import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/extensions/node.js';
import '/source/extensions/sprite.js';
import '/source/main.js';

const display = document.querySelector('#display');
const canvas = document.querySelector('quantum-canvas');
const image = document.querySelector('img');

const { Node, Sprite } = canvas;

let count = 0;
const root = new Node();
const sprite = new Sprite(image);
const animation = quantum.animate(({ delta, elapsed }) => {
    const fps = Math.trunc(1000 / delta);

    canvas.context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    for (let i = 0; i < 10; i++) {
        const node = new Node();
        node.drawables.push(sprite);
        root.children.push(node);
        count++;
    }

    for (const { transform } of root.children) {
        const { translation, rotation, scale } = transform;
        rotation.z = Math.random() * Math.PI;
        translation.x = (translation.x + Math.random() * 10) % canvas.clientWidth;
        translation.y = (translation.y + Math.random() * 10) % canvas.clientHeight;
    }

    root.draw(canvas.context);

    display.innerHTML = `FPS: ${fps} Count: ${count}`;

    if (fps < 30) {
        animation.stop();
    }
});

animation.start();

document.body.style.visibility = 'visible';