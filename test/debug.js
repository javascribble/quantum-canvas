import '/node_modules/@javascribble/quantum/source/global.js';
import '/source/global.js';

const canvas = document.querySelector('quantum-canvas');
const images = document.querySelectorAll('img');
fetch('/test/debug.json').then(response => response.json()).then(options => {
    const api = { options, loadResource: index => images[index] };
    canvas.integrate(api);

    Promise.all([api.loadSpriteMap(0), api.loadSpriteView(0)]).then(sprites => {
        const animationLength = 3000;
        const spriteMap = sprites[0];
        const spriteView = sprites[1];
        quantum.animate((deltaTime, elapsed) => {
            const radians = elapsed / animationLength * Math.PI * 2;
            spriteView.dx = Math.sin(radians) * 50 + 50;
            spriteView.dy = Math.cos(radians) * 50 + 50;
            spriteMap.forEach(api.drawSprite);
            api.drawSprite(spriteView);
            return true;
        });

        document.body.style.visibility = 'visible';
    });
});