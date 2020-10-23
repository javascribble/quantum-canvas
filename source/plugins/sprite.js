import { loadSpriteView, loadSpriteMap } from '../utilities/sprite.js';
import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawSprite = function (sprite) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
    this.active.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    const { options, loadResource } = api;
    const { sprites, spriteViews, spriteMaps } = options;
    api.loadSpriteView = async index => await loadSpriteView(index, sprites, spriteViews, loadResource);
    api.loadSpriteMap = async index => await loadSpriteMap(index, sprites, spriteMaps, loadResource);
    api.drawSprite = this.drawSprite.bind(this);
    next?.call(this, api);
};