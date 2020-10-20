import { Canvas } from '../elements/canvas.js';

Canvas.prototype.loadSprite = async function (sprite, loadResource) {
    return { ...sprite, image: await loadResource(sprite.image) };
};

Canvas.prototype.drawSprite = function (sprite) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
    this.active.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    const { options, loadResource } = api;

    const sprites = new Map();
    api.loadSprite = async index => sprites.set(index, await this.loadSprite.call(this, options.sprites[index], loadResource))
    api.drawSprite = index => this.drawSprite.call(this, sprites.get(index));

    next?.call(this, api);
};