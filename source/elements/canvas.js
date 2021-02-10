import { resize, resizeObserver } from '../utilities/element.js';
import { canvasOptions } from '../constants/canvas.js';
import html from '../templates/canvas.js';

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');
    #context = this.#canvas.getContext('2d', canvasOptions);

    constructor() {
        super();

        this.addEventListener('resize', event => resize(this.#canvas));
    }

    static get observedAttributes() { return ['scale']; }

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