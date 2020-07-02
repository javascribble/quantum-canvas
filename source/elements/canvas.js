import { Quantum, define, animate } from '../../references/quantum.js';
import { resizeCanvas, getContext } from '../output/canvas.js';
import { canvas } from '../templates/canvas.js';

export class Canvas extends Quantum {
    constructor() {
        super(canvas);
    }

    initializeShadowCallback(shadow) {
        super.initializeShadowCallback(shadow);

        this.canvas = shadow.querySelector('canvas');
        this.context = getContext(this.canvas);

        resizeCanvas(this.canvas);
        for (const image of shadow.querySelector('slot').assignedElements()) {
            //const { sx, sy, sw, sh, dx, dy, dw, dh } = image;
            //this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
            this.context.drawImage(image, 0, 0, 16, 16, 100, 100, 16, 16);
        }
    }
}

define(Canvas);