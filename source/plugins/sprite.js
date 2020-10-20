import { Canvas } from '../elements/canvas.js';

Canvas.prototype.loadSprite = async function (options, loadResource) {
    return { ...options, image: await loadResource(options.image) };
};

Canvas.prototype.drawSprite = function (sprite) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
    this.active.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    const { options, loadResource } = api;
    api.loadSprite = async index => await this.loadSprite.call(this, options.sprites[index], loadResource);
    api.drawSprite = this.drawSprite.bind(this);
    next?.call(this, api);
};