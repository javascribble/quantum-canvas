import { canvasOptions } from '../constants/options.js';
import canvas from '../templates/canvas.js';

const { resizeObserver } = quantum;

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');

    context = this.getContext();
    scale = devicePixelRatio;

    constructor() {
        super();

        this.addEventListener('resize', _ => this.resize(this.#canvas.clientWidth * this.scale, this.#canvas.clientHeight * this.scale));
    }

    connectedCallback() {
        resizeObserver.observe(this);
    }

    disconnectedCallback() {
        resizeObserver.unobserve(this);
    }

    getContext(type = '2d', options = canvasOptions) {
        return this.#canvas.getContext(type, options);
    }

    resize(width, height) {
        this.#canvas.width = width;
        this.#canvas.height = height;
    }
}

Canvas.define('quantum-canvas', canvas);