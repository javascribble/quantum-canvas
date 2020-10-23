import { Canvas } from '../elements/canvas.js';

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    api.systems?.add({
        component: 'sprite',
        add: async entity => {

        },
        delete: entity => {

        }
    });

    next?.call(this, api);
};