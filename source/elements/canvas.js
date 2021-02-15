import { defaultCanvasOptions } from '../constants/options.js';
import html from '../templates/canvas.js';

export class Canvas extends Quantum {
    #canvas = this.shadowRoot.querySelector('canvas');
    #context = this.#canvas.getContext('2d', defaultCanvasOptions);

    drawImage(image) {
        const { source, sx, sy, sw, sh, dx, dy, dw, dh } = image;
        this.#context.drawImage(source, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    resize(width, height) {
        const canvas = this.#canvas;
        const scaledWidth = width || (canvas.clientWidth * devicePixelRatio);
        const scaledHeight = height || (canvas.clientHeight * devicePixelRatio);
        if (canvas.width !== scaledWidth || canvas.height !== scaledHeight) {
            canvas.width = scaledWidth;
            canvas.height = scaledHeight;
        }
    };
}

Canvas.define('quantum-canvas', html);