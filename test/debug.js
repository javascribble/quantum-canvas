import '/node_modules/@javascribble/quantum/source/global.js';
import '/source/global.js';

const canvas = document.querySelector('quantum-canvas');
const images = document.querySelectorAll('img');

fetch('/test/debug.json').then(response => response.json()).then(options => {
    const api = { options, systems: new Set(), resources: images };
    canvas.integrate(api);

    const system = Array.from(api.systems)[0];
    quantum.animate((delta, elapsed) => {
        system.update(delta, elapsed);
        return true;
    });

    const spriteMap = api.createSpriteMap(0);
    const spriteView = api.createSpriteView(0);

    spriteMap.map(sprite => system.add({ sprite }));
    system.add({ sprite: spriteView });

    const animationLength = 3000;
    quantum.animate((delta, elapsed) => {
        const radians = elapsed / animationLength * Math.PI * 2;
        spriteView.dx = Math.sin(radians) * 50 + 50;
        spriteView.dy = Math.cos(radians) * 50 + 50;
        return true;
    });

    document.body.style.visibility = 'visible';
});