import { resize, resizeObserver } from '../utilities/element.js';
import { canvasOptions } from '../constants/canvas.js';
import html from '../templates/canvas.js';

export class Canvas extends Quantum {
    context;

    constructor() {
        super();

        const canvas = this.shadowRoot.querySelector('canvas');
        resizeObserver.observe(canvas);
        resize(canvas);

        this.context = canvas.getContext('2d', canvasOptions);
    }

    drawSprite(sprite) {
        const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
        this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    adapt(api) {
        api.drawSprite = this.drawSprite.bind(this);
    };
}

Canvas.define('quantum-canvas', html);