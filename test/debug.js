import '/node_modules/@javascribble/quantum/source/global.js';
import '/source/global.js';

const canvas = document.querySelector('quantum-canvas');
const images = document.querySelectorAll('img');

const sprite = canvas.createSprite(images[0]);
const spriteView = canvas.createSpriteView(sprite);
const sprites = canvas.importUniformSheet(images[1], 64);
const spriteViews = canvas.createSpriteMap(sprites, [0, 0, 0, 0, 0, 0, 0, 1, 2], 3);

const animationLength = 3000;
quantum.animate((delta, elapsed) => {
    const radians = elapsed / animationLength * Math.PI * 2;
    spriteView.dx = Math.sin(radians) * 50 + 50;
    spriteView.dy = Math.cos(radians) * 50 + 50;
    spriteViews.forEach(canvas.drawSprite.bind(canvas));
    canvas.drawSprite(spriteView);
    return true;
});

document.body.style.visibility = 'visible';