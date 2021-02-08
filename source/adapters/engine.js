import { Canvas } from '../elements/canvas.js';

Canvas.prototype.adapt = function (api) {
    api.drawImage = this.drawImage.bind(this);
    api.drawImageTree = this.drawImageTree.bind(this);
};