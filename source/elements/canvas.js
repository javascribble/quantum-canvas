import { observe, unobserve } from '../utilities/element.js';
import { canvasOptions } from '../constants/canvas.js';
import html from '../templates/canvas.js';

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');
    #context = this.#canvas.getContext('2d', canvasOptions);

    connectedCallback() {
        observe(this.#canvas);
    }

    disconnectedCallback() {
        unobserve(this.#canvas);
    }

    drawable(image) {
        return !!image.source;
    }

    drawImage(image) {
        const { source, sx, sy, sw, sh, dx, dy, dw, dh } = image;
        this.#context.drawImage(source, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    drawImageTree(root, branches) {
        if (this.drawable(root)) {
            this.drawImage(root);
        }

        if (branches in root) {
            for (const branch of root[branches]) {
                this.drawImageTree(branch, branches);
            }
        }
    }

    adapt(api) {
        api.drawImage = this.drawImage.bind(this);
        api.drawImageTree = this.drawImageTree.bind(this);
    };
}

Canvas.define('quantum-canvas', html);