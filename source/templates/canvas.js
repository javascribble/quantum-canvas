import { template } from '../../references/quantum.js';

const html = '<canvas></canvas>';

const css = `
    canvas {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

export const canvas = template(html, css);