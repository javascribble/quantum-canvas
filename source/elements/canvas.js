import { Quantum, define, query } from '../../references/quantum.js';
import { resizeCanvas, getContext } from '../output/canvas.js';
import { loadImage } from '../network/loader.js';
import { canvas } from '../templates/canvas.js';

export class Canvas extends Quantum {
    constructor() {
        super(canvas);

        this.canvas = query(this.shadowRoot, 'canvas');
        this.context = getContext(this.canvas);
    }

    load(resource) {
        return loadImage(resource);
    }

    render(renderable) {
        // TODO: Support more primitives (animation, text, rectangle, circle, arc, line).
        const { image, sx, sy, sw, sh, dx, dy, dw, dh } = renderable;
        this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    resize() {
        resizeCanvas(this.canvas);
    }
}

define(Canvas);