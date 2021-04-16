import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawImage = function (data) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = data;
    this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};