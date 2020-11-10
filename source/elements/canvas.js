import { Component, template, define } from '../import.js';
import { resize, resizeObserver } from '../utilities/element.js';
import { canvasOptions } from '../constants/canvas.js';
import html from '../templates/canvas.js';

export class Canvas extends Component {
    context;

    constructor() {
        super();

        const canvas = this.shadowRoot.querySelector('canvas');
        resizeObserver.observe(canvas);
        resize(canvas);

        this.context = canvas.getContext('2d', canvasOptions);
    }

    static template = template(html);

    drawSprite(sprite) {
        const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
        this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
}

define('quantum-canvas', Canvas);