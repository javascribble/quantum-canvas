import { canvasOptions } from '../constants/options.js';

const { resizeObserver } = quantum;

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');

    context = this.getContext();
    scale = devicePixelRatio;

    constructor() {
        super();

        this.addEventListener('resize', this.resize.bind(this));
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

    resize(event) {
        this.#canvas.width = this.#canvas.clientWidth * this.scale;
        this.#canvas.height = this.#canvas.clientHeight * this.scale;
    }
}