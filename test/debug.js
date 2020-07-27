import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

const loadImage = (resource) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.src = resource;
    });
}

loadImage('/test/resources/kal256.png').then(image => {
    const canvas = document.querySelector('quantum-canvas');
    canvas.render({
        images: [
            {
                image,
                sx: 0,
                sy: 0,
                sw: 256,
                sh: 256,
                dx: 100,
                dy: 100,
                dw: 200,
                dh: 200
            }
        ]
    });
});

document.body.style.visibility = 'visible';