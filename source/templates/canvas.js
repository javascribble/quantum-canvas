import { template } from '../../references/quantum.js';

const markup = '<canvas></canvas>';

const style = `
    canvas {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

export const canvas = template(markup, style);