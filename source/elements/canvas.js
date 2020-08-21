import { canvasOptions } from '../constants/options.js';
import { resize, resizeObserver } from '../utilities/element.js';
import html from '../templates/canvas.js';

export class Canvas extends quantum.Component {
    #canvas;
    #context;

    constructor() {
        super();

        this.#canvas = this.shadowRoot.querySelector('canvas');
        this.#context = this.#canvas.getContext('2d', canvasOptions);
        resizeObserver.observe(this.#canvas); // asyncronous
        resize(this.#canvas);
    }

    static template = quantum.template(html);

    drawSprite(sprite) {
        const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
        this.#context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    integrate(api) {
        api.drawSprite = this.drawSprite.bind(this);
        api.viewport = {
            get width() {
                return this.#canvas.width;
            },
            get height() {
                return this.#canvas.height;
            }
        }
    }
}

quantum.define('quantum-canvas', Canvas);