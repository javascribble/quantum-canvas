import { Canvas } from '../elements/canvas.js';

function drawSprite(sprite) {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
    this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
}

function createSprite(image, sx = 0, sy = 0, sw = image.width, sh = image.height) {
    return { image, sx, sy, sw, sh };
};

function createSpriteView(sprite, dx = 0, dy = 0, dw = sprite.sw, dh = sprite.sh) {
    return { ...sprite, dx, dy, dw, dh };
};

function createSpriteMap(sprites, data, divisor) {
    const map = [];
    for (let index = 0; index < data.length; index++) {
        const sprite = sprites[data[index]];
        map.push(this.createSpriteView(sprite, sprite.sw * (index % divisor), sprite.sh * Math.floor(index / divisor)))
    }

    return map;
};

const prototype = {
    drawSprite,
    createSprite,
    createSpriteView,
    createSpriteMap
};

const adapter = {
    ...prototype
};

Object.assign(Canvas.prototype, prototype);
Object.assign(Canvas.adapter, adapter);