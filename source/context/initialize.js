import { canvasOptions } from '../constants/options.js';

export const initialize = canvas => canvas.getContext('2d', canvasOptions);