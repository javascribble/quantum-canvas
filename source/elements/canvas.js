import { resize } from '../context/canvas.js';
import { initialize } from '../context/initialize.js';
import { render } from '../renderer/render.js';
import canvas from '../templates/canvas.js';

const { resizeObserver } = quantum;

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');
    context = initialize(this.#canvas);
    scale = devicePixelRatio;

    constructor() {
        super();

        this.observers.add(resizeObserver);
    }

    resize = resize;
    render = render;
}

Canvas.define('quantum-canvas', canvas);