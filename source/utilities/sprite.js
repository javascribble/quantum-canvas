import { drawType } from '../constants/rendering.js';

export const createSpriteView = (view, sprites, spriteViews, resources) => {
    const spriteView = spriteViews[view];
    const sprite = sprites[spriteView.image];
    return { ...spriteView, ...sprite, type: drawType.image, image: resources[sprite.image] };
};

export const createSpriteMap = (map, sprites, spriteMaps, resources) => {
    const spriteMap = spriteMaps[map];
    return spriteMap.sprites.map((resource, index) => {
        const sprite = sprites[resource];
        return {
            ...sprite,
            type: drawType.image,
            image: resources[sprite.image],
            dx: spriteMap.width * (index % spriteMap.divisor),
            dy: spriteMap.height * Math.floor(index / spriteMap.divisor),
            dw: spriteMap.width,
            dh: spriteMap.height
        };
    });
};