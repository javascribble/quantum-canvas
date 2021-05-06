import { Canvas } from '../elements/canvas.js';
import { Transform } from '../graphics/transform';

Canvas.prototype.Node = class Node extends Transform {
    children = [];

    draw(context) {
        context.save();

        const { translation, scale } = this;
        context.transform(scale.x, 0, 0, scale.y, translation.x, translation.y);

        for (const child of this.children) {
            child.draw(context);
        }

        context.restore();
    }
};