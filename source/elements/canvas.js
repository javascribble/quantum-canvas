import { canvasOptions } from '../constants/options.js';
import { draw } from '../renderer/draw.js';
import canvas from '../templates/canvas.js';

const { resizeObserver } = quantum;

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');
    context = this.#canvas.getContext('2d', canvasOptions);
    scale = devicePixelRatio;

    get size() {
        const { clientWidth, clientHeight } = this.#canvas;
        return { width: clientWidth * this.scale, height: clientHeight * this.scale };
    }

    constructor() {
        super();

        this.observers.add(resizeObserver);
    }

    resize() {
        Object.assign(this.#canvas, this.size);
    }

    render(state) {
        draw(state, this.context);
    }
}

Canvas.define('quantum-canvas', canvas);