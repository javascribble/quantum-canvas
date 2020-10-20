import { Canvas } from '../elements/canvas.js';

Canvas.prototype.loadSprite = function (sprite, images) {
    return { ...sprite, image: images[sprite.image] };
};

Canvas.prototype.drawSprite = function (sprite) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
    this.active.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    api.drawSprite = this.drawSprite.bind(this);
    next?.call(this, api);
};