import { createCanvasContext, deleteCanvasContext } from '../utilities/canvas.js';
import { draw } from '../utilities/drawing.js';
import html from '../templates/canvas.js';

export class Canvas extends quantum.Component {
    layers = [];

    constructor() {
        super();

        this.insertLayer();
    }

    static template = quantum.template(html);

    insertLayer(index = 0, options) {
        this.layers.splice(index, 0, createCanvasContext(this.shadowRoot, options));
    }

    removeLayer(index = 0) {
        deleteCanvasContext(this.layers.splice(index, 1)[0]);
    }

    update(delta, elapsed) {
        for (const layer of this.layers) {
            if (layer.draw) {
                for (const drawable of layer.drawables) {
                    draw(drawable, layer.context);
                }
            }
        }
    }
}

quantum.define('quantum-canvas', Canvas);