import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawImage = function (data) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = data;
    this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

Canvas.prototype.drawImageTree = function (root, branches = 'children') {
    if (!root.hidden) {
        this.context.save();
        this.context.translate(root.position.x, root.position.y);
        this.context.rotate(root.rotation);
        this.context.scale(root.scale.x, root.scale.y);

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