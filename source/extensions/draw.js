import { Canvas } from '../elements/canvas.js';
import { drawPath } from '../graphics/path.js';
import { drawSprite } from '../graphics/sprite.js';

Canvas.prototype.draw = function (node) {
    const { transform, path, sprite, children } = node;

    this.context.save();

    if (transform) {
        const { translation, rotation, scale } = transform;
        if (rotation) {
            const sin = Math.sin(rotation.z);
            const cos = Math.cos(rotation.z);
            this.context.transform(cos * scale.x, sin * scale.x, -sin * scale.y, cos * scale.y, translation.x, translation.y);
        } else if (scale) {
            this.context.transform(scale.x, 0, 0, scale.y, translation.x, translation.y);
        } else {
            this.context.translate(translation.x, translation.y);
        }
    }

    if (path) {
        drawPath(this.context, path);
    }

    if (sprite) {
        drawSprite(this.context, sprite);
    }

    if (children) {
        for (const child of children) {
            this.draw(child);
        }
    }

    this.context.restore();
};