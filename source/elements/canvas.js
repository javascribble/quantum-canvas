import { defaultCanvasOptions } from '../constants/options.js';
import html from '../templates/canvas.js';

const { resizeObserver } = quantum;

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');

    context = this.getContext();

    connectedCallback() {
        resizeObserver.observe(this);
    }

    disconnectedCallback() {
        resizeObserver.unobserve(this);
    }

    getContext(type, options) {
        return this.#canvas.getContext(type || '2d', { ...defaultCanvasOptions, ...options });
    }

    setResolution(width = this.#canvas.clientWidth * devicePixelRatio, height = this.#canvas.clientHeight * devicePixelRatio) {
        if (this.#canvas.width !== width) {
            this.#canvas.width = width;
        }

        if (this.#canvas.height !== height) {
            this.#canvas.height = height;
        }
    };
}

Canvas.define('quantum-canvas', html);