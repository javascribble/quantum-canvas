import { drawType } from '../constants/rendering.js';

export const createSpriteView = (view, sprites, spriteViews, resources) => {
    const spriteView = spriteViews[view];
    const sprite = sprites[spriteView.image];
    return { ...spriteView, ...sprite, type: drawType.image, image: resources[sprite.image] };
};

export const createSpriteMap = (map, sprites, spriteMaps, resources) => {
    const spriteMap = spriteMaps[map];
    const tiles = [];
    for (let i = 0; i < spriteMap.sprites.length; i++) {
        const sprite = sprites[spriteMap.sprites[i]];
        tiles.push({
            ...sprite,
            type: drawType.image,
            image: resources[sprite.image],
            dx: spriteMap.width * (i % spriteMap.divisor),
            dy: spriteMap.height * Math.floor(i / spriteMap.divisor),
            dw: spriteMap.width,
            dh: spriteMap.height
        });
    }

    return tiles;
};