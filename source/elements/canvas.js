import { defaultCanvasOptions } from '../constants/options.js';
import html from '../templates/canvas.js';

const { resizeObserver } = quantum;

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');
    #context = this.#canvas.getContext('2d', defaultCanvasOptions);

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

    drawImage(image) {
        const { source, sx, sy, sw, sh, dx, dy, dw, dh } = image;
        this.#context.drawImage(source, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    #resize() {
        const canvas = this.#canvas;
        const scaledWidth = this.clientWidth * devicePixelRatio;
        const scaledHeight = this.clientHeight * devicePixelRatio;
        if (canvas.width !== scaledWidth || canvas.height !== scaledHeight) {
            canvas.width = scaledWidth;
            canvas.height = scaledHeight;
        }
    };
}

Canvas.define('quantum-canvas', html);