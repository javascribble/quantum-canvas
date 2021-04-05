import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawImage = function (data) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = data;
    this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

Canvas.prototype.drawImageTree = function (data) {
    if (!data.hidden) {
        // TODO: Refactor and optimize.

        this.context.save();
        if (data.position) this.context.translate(data.position.x, data.position.y);
        if (data.rotation) this.context.rotate(data.rotation);
        if (data.scale) this.context.scale(data.scale.x, data.scale.y);

        if (data.image) {
            this.drawImage(data);
        }

        if (data.children?.length) {
            for (const child of data.children) {
                this.drawImageTree(child);
            }
        }

        this.context.restore();
    }
};