import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawImage = function (data) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = data;
    this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

Canvas.prototype.drawImageTree = function (root, branches) {
    if (root.image) {
        this.drawImage(root);
    }

    if (branches in root) {
        for (const branch of root[branches]) {
            this.drawImageTree(branch, branches);
        }
    }
};