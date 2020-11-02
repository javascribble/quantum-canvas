import { Canvas } from '../elements/canvas.js';

Canvas.prototype.importUniformSheet = function (image, sw, sh = sw) {
    const sprites = [];
    for (let row = 0; row < image.height / sh; row++) {
        for (let column = 0; column < image.width / sw; column++) {
            sprites.push({ image, sx: column * sh, sy: row * sh, sw, sh });
        }
    }

    return sprites;
};