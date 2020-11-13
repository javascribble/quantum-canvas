import { Canvas } from '../elements/canvas.js';

Canvas.prototype.adapt = function (api, options) {
    api.drawSprite = this.drawSprite.bind(this);
};