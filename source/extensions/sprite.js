import { Canvas } from '../elements/canvas.js';

Canvas.prototype.Sprite = class Sprite {
    constructor(image, sx = 0, sy = 0, sw = image.width, sh = image.height) {
        this.image = image;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.dx = -sw / 2;
        this.dy = -sh / 2;
        this.dw = sw;
        this.dh = sh;
    }

    draw(context) {
        const { image, sx, sy, sw, sh, dx, dy, dw, dh } = this;
        context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
};