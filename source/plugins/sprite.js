import { loadSprite, drawSprite } from '../utilities/rendering.js';
import { Canvas } from '../elements/canvas.js';

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    api.loadSprite = async index => await loadSprite(api.options.sprites[index], api.loadResource);
    api.drawSprite = sprite => drawSprite(sprite, this.active.context);
    next?.call(this, api);
};