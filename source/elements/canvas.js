import { canvasOptions } from '../constants/options.js';
import { resize, resizeObserver } from '../utilities/element.js';
import html from '../templates/canvas.js';

export class Canvas extends quantum.Component {
    #context;

    constructor() {
        super();

        const canvas = this.shadowRoot.querySelector('canvas');
        this.#context = canvas.getContext('2d', canvasOptions);
        resizeObserver.observe(canvas); // asyncronous
        resize(canvas);
    }

    static template = quantum.template(html);

    drawImages(images) {
        for (const { image, sx, sy, sw, sh, dx, dy, dw, dh } of images) {
            this.#context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        }
    }
}

quantum.define('quantum-canvas', Canvas);