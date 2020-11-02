import { Canvas } from '../elements/canvas.js';

Canvas.prototype.drawSprite = function (sprite) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
    this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

Canvas.prototype.createSprite = function (image, sx = 0, sy = 0, sw = image.width, sh = image.height) {
    return { image, sx, sy, sw, sh };
};

Canvas.prototype.createSpriteView = function (sprite, dx = 0, dy = 0, dw = sprite.sw, dh = sprite.sh) {
    return { ...sprite, dx, dy, dw, dh };
};

Canvas.prototype.createSpriteMap = function (sprites, data, divisor) {
    const map = [];
    for (let index = 0; index < data.length; index++) {
        const sprite = sprites[data[index]];
        map.push(this.createSpriteView(sprite, sprite.sw * (index % divisor), sprite.sh * Math.floor(index / divisor)))
    }

    return map;
};