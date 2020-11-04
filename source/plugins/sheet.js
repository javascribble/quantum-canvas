import { Canvas } from '../elements/canvas.js';

function importUniformSheet(image, sw, sh = sw) {
    const sprites = [];
    for (let row = 0; row < image.height / sh; row++) {
        for (let column = 0; column < image.width / sw; column++) {
            sprites.push({ image, sx: column * sh, sy: row * sh, sw, sh });
        }
    }

    return sprites;
}

const prototype = {
    importUniformSheet
};

const adapter = {
    ...prototype
};

Object.assign(Canvas.prototype, prototype);
Object.assign(Canvas.adapter, adapter);