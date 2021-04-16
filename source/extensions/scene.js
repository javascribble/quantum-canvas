import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawScene = function (data) {
    const { transform, children } = data;

    if (transform) {
        const { translation, rotation, scale } = transform;

        const sin = Math.sin(rotation.z);
        const cos = Math.cos(rotation.z);
        this.context.save();
        // this.context.translate(translation.x, translation.y);
        // this.context.rotate(rotation.z);
        // this.context.scale(scale.x, scale.y);
        this.context.transform(
            cos * scale.x, sin * scale.x,
            -sin * scale.y, cos * scale.y,
            translation.x, translation.y
        );
    }

    if (data.image) {
        this.drawImage(data);
    } else if (data.points) {
        this.drawPath(data);
    }

    if (children?.length) {
        for (const child of children) {
            this.drawScene(child);
        }
    }

    if (transform) {
        this.context.restore();
    }
};