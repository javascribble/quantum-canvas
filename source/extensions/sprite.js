import { Canvas } from '../elements/canvas.js';

Canvas.prototype.Sprite = class Sprite {
    constructor(data) {
        Object.assign(this, data);
    }

    draw(context) {
        const { image, sx, sy, sw, sh, dx, dy, dw, dh } = this;
        context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
};