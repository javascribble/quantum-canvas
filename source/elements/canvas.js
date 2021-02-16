import { defaultCanvasOptions } from '../constants/options.js';
import html from '../templates/canvas.js';

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');

    context = this.#canvas.getContext('2d', defaultCanvasOptions);

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