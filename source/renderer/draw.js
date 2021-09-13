import { drawPath } from '../graphics/path.js';
import { drawSprite } from '../graphics/sprite.js';

export const draw = (node, context) => {
    const { transform, path, sprite, children } = node;

    context.save();

    if (transform) {
        const { translation, rotation, scale } = transform;
        if (rotation) {
            const sin = Math.sin(rotation.z);
            const cos = Math.cos(rotation.z);
            context.transform(cos * scale.x, sin * scale.x, -sin * scale.y, cos * scale.y, translation.x, translation.y);
        } else if (scale) {
            context.transform(scale.x, 0, 0, scale.y, translation.x, translation.y);
        } else {
            context.translate(translation.x, translation.y);
        }
    }

    if (path) {
        drawPath(context, path);
    }

    if (sprite) {
        drawSprite(context, sprite);
    }

    if (children) {
        for (const child of children) {
            draw(child, context);
        }
    }

    context.restore();
};