import { Quantum, define, query } from '../../references/quantum.js';
import { resizeCanvas, getContext } from '../output/canvas.js';
import { canvas } from '../templates/canvas.js';

export class Canvas extends Quantum {
    constructor() {
        super(canvas);

        this.canvas = query(this.shadowRoot, 'canvas');
        this.context = getContext(this.canvas);

        this.entities = new Set();
        this.add = (entity) => this.entities.add(entity);
        this.delete = (entity) => this.entities.delete(entity);
        this.validate = (entity) => entity.renderable;

        const engine = this.parentElement;
        engine.animations.add(this);
        engine.systems.add(this);
    }

    animate(deltaTime) {
        resizeCanvas(this.canvas);
        for (const { renderable } of this.entities) {
            // TODO: Support more primitives (animation, text, rectangle, circle, arc, line).
            const { image, sx, sy, sw, sh, dx, dy, dw, dh } = renderable;
            this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        }
    }

    connectedCallback() {
        const engine = this.parentElement;
        engine.loaders.png = loadImage;

        engine.load("/test/resources/Kal16.png").then(image => {
            const entity = engine.createEntity();
            entity.renderable = {
                image,
                sx: 0,
                sy: 0,
                sw: 16,
                sh: 16,
                dx: 100,
                dy: 100,
                dw: 16,
                dh: 16
            };
        });

        engine.start();
    }
}

define(Canvas);