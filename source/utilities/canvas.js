import { resize, resizeObserver } from '../utilities/element.js';
import { canvasOptions } from '../constants/options.js';

export const createCanvasContext = (parent, options) => {
    const canvas = document.createElement('canvas');
    parent.appendChild(canvas);
    resizeObserver.observe(canvas);
    resize(canvas);

    const context = canvas.getContext('2d', { ...canvasOptions, ...options });
    return { canvas, context };
};

export const deleteCanvasContext = canvasContext => {
    const { canvas } = canvasContext;
    canvas.parent.removeChild(canvas);
    resizeObserver.unobserve(canvas);
};