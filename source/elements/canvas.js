import { canvasOptions } from '../constants/options.js';
import { resize, resizeObserver } from '../utilities/element.js';
import html from '../templates/canvas.js';

export class Canvas extends quantum.Component {
    context;

    constructor() {
        super();

        const canvas = this.shadowRoot.querySelector('canvas');
        this.context = canvas.getContext('2d', canvasOptions);
        resizeObserver.observe(canvas); // asyncronous
        resize(canvas);
    }

    static template = quantum.template(html);

    drawSprite(sprite) {
        const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
        this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    configure(state) {
        const { broker } = state;
        broker.subscribe('drawSprite', this.drawSprite.bind(this));
    }
}

quantum.define('quantum-canvas', Canvas);