import { Canvas } from '../elements/canvas.js';

Canvas.prototype.Node = class Node {
    children = [];
    transform = {
        translation: { x: 0, y: 0 },
        scale: { x: 1, y: 1 }
    };

    draw(context) {
        context.save();

        const { translation, scale } = this.transform;
        context.transform(scale.x, 0, 0, scale.y, translation.x, translation.y);

        for (const child of this.children) {
            child.draw(context);
        }

        context.restore();
    }
};