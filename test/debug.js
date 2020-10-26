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

    const { entities } = options;
    entities.map(system.add);

    const animationLength = 3000;
    const character = entities[1].sprite.drawable;
    quantum.animate((delta, elapsed) => {
        const radians = elapsed / animationLength * Math.PI * 2;
        character.dx = Math.sin(radians) * 50 + 50;
        character.dy = Math.cos(radians) * 50 + 50;
        return true;
    });

    document.body.style.visibility = 'visible';
});