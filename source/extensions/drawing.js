import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawImage = function (image) {
    const { source, sx, sy, sw, sh, dx, dy, dw, dh } = image;
    this.context.drawImage(source, sx, sy, sw, sh, dx, dy, dw, dh);
};

Canvas.prototype.drawImageTree = function (root, branches) {
    if (root.source) {
        this.drawImage(root);
    }

    if (branches in root) {
        for (const branch of root[branches]) {
            this.drawImageTree(branch, branches);
        }
    }
};