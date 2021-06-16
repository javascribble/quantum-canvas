import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/decorators/loaders.js';
import '/source/extensions/draw.js';
import '/source/main.js';

const display = document.querySelector('#display');
const canvas = document.querySelector('quantum-canvas');
canvas.addEventListener('resize', () => canvas.context.imageSmoothingEnabled = false);

quantum.load('/test/resources/image.png').then(image => {
    const { width, height } = image;

    let count = 0;
    const root = { children: [] };
    const sprite = { image, sx: 0, sy: 0, sw: width, sh: height, dx: -width / 2, dy: -height / 2, dw: width, dh: height };
    const animation = quantum.animate(({ delta }) => {
        const fps = Math.trunc(1000 / delta);

        for (let i = 0; i < 100; i++) {
            root.children.push({ sprite, transform: { translation: { x: 0, y: 0 }, scale: { x: 3, y: 3 } } });
            count++;
        }

        const { clientWidth, clientHeight } = canvas;
        for (const { transform } of root.children) {
            const { translation } = transform;
            translation.x = Math.random() * clientWidth * devicePixelRatio;
            translation.y = Math.random() * clientHeight * devicePixelRatio;
        }

        canvas.draw(root);

        display.innerHTML = `FPS: ${fps} Count: ${count}`;

        if (fps > 0 && fps < 30) {
            animation.stop();
        }
    });

    animation.start();

    document.body.style.visibility = 'visible';
});