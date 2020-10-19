import { canvasOptions } from '../constants/options.js';
import { resize, resizeObserver } from '../utilities/element.js';
import html from '../templates/canvas.js';

export class Canvas extends quantum.Component {
    layers = [];
    layer = 0;

    constructor() {
        super();

        const canvas = this.shadowRoot.querySelector('canvas');
        const context = canvas.getContext('2d', canvasOptions);
        resizeObserver.observe(canvas); // asyncronous
        resize(canvas);

        this.layers.push({
            canvas,
            context
        });

        // TODO: Add/remove layers.
    }

    static template = quantum.template(html);

    get active() {
        return this.layers[this.layer];
    }
}

quantum.define('quantum-canvas', Canvas);