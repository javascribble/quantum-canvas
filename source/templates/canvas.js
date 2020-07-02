import { template } from '../../references/quantum.js';

const html = '<canvas><slot></slot></canvas>';

const css = `
    canvas {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

export const canvas = template(html, css);