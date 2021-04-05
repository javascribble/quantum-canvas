import { Canvas } from '../elements/canvas.js';

// TODO: Add flexible properties.
// const defaultProperties = {
//     children: 'children',
//     position: 'position',
//     rotation: 'rotation',
//     scale: 'scale'
// };

Canvas.prototype.drawImage = function (data) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = data;
    this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

Canvas.prototype.drawImageTree = function (data) {
    if (!data.hidden) {
        this.context.save();
        this.context.translate(data.position.x, data.position.y);
        this.context.rotate(data.rotation);
        this.context.scale(data.scale.x, data.scale.y);

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