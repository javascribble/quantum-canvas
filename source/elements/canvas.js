

import { createCanvasContext, deleteCanvasContext } from '../utilities/canvas.js';
import html from '../templates/canvas.js';

export class Canvas extends quantum.Component {
    layers = [];
    layer = 0;

    constructor() {
        super();

        this.insertCanvas();
    }

    static template = quantum.template(html);

    get active() {
        return this.layers[this.layer];
    }

    insertCanvas(index = 0, options) {
        this.layers.splice(index, 0, createCanvasContext(this.shadowRoot, options));
    }

    removeCanvas(index = 0) {
        deleteCanvasContext(this.layers.splice(index, 1)[0]);
    }

    integrate(api) {
        const { options } = api;
        if (options.canvas) {
            // TODO: Add options.
        }

        api.insertCanvas = this.insertCanvas.bind(this);
        api.removeCanvas = this.removeCanvas.bind(this);
    }
}

quantum.define('quantum-canvas', Canvas);