import { Canvas } from '../elements/canvas.js';

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