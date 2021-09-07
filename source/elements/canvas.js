import { canvasOptions } from '../constants/options.js';
import canvas from '../templates/canvas.js';
import '../plugins/loaders.js';

const { resizeObserver } = quantum;

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');

    constructor() {
        super();

        this.addEventListener('resize', event => this.resize(this.size, event));
    }

    context = this.getContext();
    scale = devicePixelRatio;

    get size() {
        const { clientWidth, clientHeight } = this.#canvas;
        return { width: clientWidth * this.scale, height: clientHeight * this.scale };
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

    resize(size) {
        this.#canvas.width = size.width;
        this.#canvas.height = size.height;
    }
}

Canvas.define('quantum-canvas', canvas);