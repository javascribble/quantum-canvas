import { Plugin, template, define } from '../import.js';
import { resize, resizeObserver } from '../utilities/element.js';
import { canvasOptions } from '../constants/canvas.js';
import html from '../templates/canvas.js';

export class Canvas extends Plugin {
    context;

    constructor() {
        super();

        const canvas = this.shadowRoot.querySelector('canvas');
        resizeObserver.observe(canvas);
        resize(canvas);

        this.context = canvas.getContext('2d', canvasOptions);
    }

    static template = template(html);

    adapt(api) {
        super.adapt(api);
        api.canvasContext = this.context;
    }
}

define('quantum-canvas', Canvas);