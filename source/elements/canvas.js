import { canvasOptions } from '../constants/options.js';
import { draw } from '../renderer/draw.js';
import canvas from '../templates/canvas.js';

const { resizeObserver } = quantum;

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');
    context = this.#canvas.getContext('2d', canvasOptions);
    scale = devicePixelRatio;

    constructor() {
        super();

        this.observers.add(resizeObserver);
    }

    resize() {
        const { clientWidth, clientHeight } = this.#canvas;
        this.#canvas.width = clientWidth * this.scale;
        this.#canvas.height = clientHeight * this.scale;
        this.context.imageSmoothingEnabled = false;
    }

    render(state) {
        draw(state, this.context);
    }
}

Canvas.define('quantum-canvas', canvas);