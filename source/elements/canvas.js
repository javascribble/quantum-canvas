import { resize, resizeObserver } from '../utilities/element.js';
import { canvasOptions } from '../constants/canvas.js';
import html from '../templates/canvas.js';

export class Canvas extends quantum.Component {
    #context;

    constructor() {
        super();

        const canvas = this.shadowRoot.querySelector('canvas');
        resizeObserver.observe(canvas);
        resize(canvas);

        this.#context = canvas.getContext('2d', canvasOptions);
    }

    static template = quantum.template(html);

    drawImage(drawable) {
        const { image, sx, sy, sw, sh, dx, dy, dw, dh } = drawable;
        this.#context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
}

quantum.define('quantum-canvas', Canvas);