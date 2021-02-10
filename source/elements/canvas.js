import { resize, resizeObserver } from '../utilities/element.js';
import { defaultCanvasOptions } from '../constants/options.js';
import html from '../templates/canvas.js';

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');
    #context = this.#canvas.getContext('2d', defaultCanvasOptions);

    constructor() {
        super();

        this.addEventListener('resize', event => resize(this.#canvas, this.scale));
    }

    static get observedAttributes() { return ['scale']; }

    get scale() {
        return super.scale || devicePixelRatio;
    }

    connectedCallback() {
        resizeObserver.observe(this);
    }

    disconnectedCallback() {
        resizeObserver.unobserve(this);
    }

    drawImage(image) {
        const { source, sx, sy, sw, sh, dx, dy, dw, dh } = image;
        this.#context.drawImage(source, sx, sy, sw, sh, dx, dy, dw, dh);
    }
}

Canvas.define('quantum-canvas', html);