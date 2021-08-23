import { draw } from '../renderer/draw.js';

const { Canvas } = Quantum;

Canvas.prototype.draw = draw;