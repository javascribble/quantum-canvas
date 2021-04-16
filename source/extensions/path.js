import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawPath = function (data) {
    const { points, color, style } = data;

    this.context.beginPath();
    points.forEach(point => {
        const { dx, dy, dw, dh } = point;
        this.context.moveTo(dx, dy);
        this.context.lineTo(dx + dw, dy);
        this.context.lineTo(dx + dw, dy + dh);
        this.context.lineTo(dx, dy + dh);
    });

    const { r, g, b, a } = color;
    const styleColor = `rgba(${r},${g},${b},${a})`;
    if (style === 'stroke') {
        this.context.strokeStyle = styleColor;
        this.context.stroke();
        this.context.closePath();
    } else {
        this.context.fillStyle = styleColor;
        this.context.fill();
    }
};