import { Component, animate } from '../../references/quantum.js';
import { resizeCanvas, canvasOptions } from '../utilities/canvas.js';

export class Canvas extends Component {
    #slot;
    #canvas;
    #context;

    constructor() {
        super();

        this.#slot = this.shadowRoot.querySelector('slot');
        this.#canvas = this.shadowRoot.querySelector('canvas');
        this.#context = this.#canvas.getContext('2d', canvasOptions);

        // TODO: Animate.
        resizeCanvas(this.#canvas);
        for (const image of this.#slot.assignedElements()) {
            //const { sx, sy, sw, sh, dx, dy, dw, dh } = image;
            //this.#context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
            this.#context.drawImage(image, 0, 0, 16, 16, 100, 100, 16, 16);
        }
    }

    static template = document.querySelector('#quantum-canvas');
}

customElements.define('quantum-canvas', Canvas);