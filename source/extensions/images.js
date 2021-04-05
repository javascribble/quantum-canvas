import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawImage = function (data) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = data;
    this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

Canvas.prototype.drawImageTree = function (root, branches = 'children') {
    if (!root.hidden) {
        this.context.save();
        this.context.translate(root.positionX, root.positionY);
        this.context.rotate(root.rotationZ);
        this.context.scale(root.scaleX, root.scaleY);

        if (root.image) {
            this.drawImage(root);
        }

        if (branches in root) {
            for (const branch of root[branches]) {
                this.drawImageTree(branch, branches);
            }
        }

        this.context.restore();
    }
};