import { createSpriteSystem } from '../systems/sprite.js';
import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawSprite = function (sprite) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
    this.layers[this.layer].context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    api.drawSprite = this.drawSprite.bind(this);
    api.systems?.add(createSpriteSystem(api));
    next?.call(this, api);
};