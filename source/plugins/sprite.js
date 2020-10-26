import { createSpriteView, createSpriteMap } from '../utilities/sprite.js';
import { createSpriteSystem } from '../systems/sprite.js';
import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawSprite = function (sprite) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
    this.active.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    const { options, resources } = api;
    const { sprites, spriteViews, spriteMaps } = options;
    api.createSpriteView = index => createSpriteView(index, sprites, spriteViews, resources);
    api.createSpriteMap = index => createSpriteMap(index, sprites, spriteMaps, resources);
    api.drawSprite = this.drawSprite.bind(this);
    api.systems?.add(createSpriteSystem(api));
    next?.call(this, api);
};