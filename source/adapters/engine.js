import { Canvas } from '../elements/canvas.js';

Canvas.prototype.adapt = function (options) {
    return {
        drawSprite: this.drawSprite.bind(this)
    }
};