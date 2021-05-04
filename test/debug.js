import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/extensions/node.js';
import '/source/extensions/sprite.js';
import '/source/main.js';

const display = document.querySelector('#display');
const canvas = document.querySelector('quantum-canvas');
const image = document.querySelector('img');

const { Node, Sprite, context } = canvas;

let count = 0;
const root = new Node();
const sprite = new Sprite(image);
const animation = quantum.animate(({ delta }) => {
    const fps = Math.trunc(1000 / delta);

    for (let i = 0; i < 100; i++) {
        const node = new Node();
        node.children.push(sprite);
        root.children.push(node);
        count++;
    }

    const { clientWidth, clientHeight } = canvas;
    for (const { transform } of root.children) {
        const { translation } = transform;
        translation.x = Math.random() * clientWidth * devicePixelRatio;
        translation.y = Math.random() * clientHeight * devicePixelRatio;
    }

    root.draw(context);

    display.innerHTML = `FPS: ${fps} Count: ${count}`;

    if (fps > 0 && fps < 30) {
        animation.stop();
    }
});

animation.start();

document.body.style.visibility = 'visible';