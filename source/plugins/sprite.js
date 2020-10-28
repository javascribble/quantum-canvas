import { createSpriteSystem } from '../systems/sprite.js';
import { Canvas } from '../elements/canvas.js';

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = async function (api) {
    api.systems.set('sprite', createSpriteSystem(this, api));
    await next?.call(this, api);
};