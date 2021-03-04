import { canvasOptions } from '../constants/options.js';
import html from '../templates/canvas.js';

const { resizeObserver } = quantum;

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');

    context = this.getContext();

    constructor() {
        super();

        this.addEventListener('resize', this.#resize.bind(this));
    }

    connectedCallback() {
        resizeObserver.observe(this);
    }

    disconnectedCallback() {
        resizeObserver.unobserve(this);
    }

    getContext(type, options) {
        return this.#canvas.getContext(type || '2d', { ...canvasOptions, ...options });
    }

    #resize() {
        if (this.#canvas.width !== this.#canvas.clientWidth) {
            this.#canvas.width = this.#canvas.clientWidth;
        }

        if (this.#canvas.height !== this.#canvas.clientHeight) {
            this.#canvas.height = this.#canvas.clientHeight;
        }
    }
}

Canvas.define('quantum-canvas', html);