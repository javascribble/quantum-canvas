export const loadSpriteView = async (view, sprites, spriteViews, loadResource) => {
    const spriteView = spriteViews[view];
    const sprite = sprites[spriteView.image];
    return { ...spriteView, ...sprite, image: await loadResource(sprite.image) };
};

export const loadSpriteMap = async (map, sprites, spriteMaps, loadResource) => {
    const spriteMap = spriteMaps[map];
    const tiles = [];
    for (let i = 0; i < spriteMap.sprites.length; i++) {
        const sprite = sprites[spriteMap.sprites[i]];
        tiles.push({
            ...sprite,
            image: await loadResource(sprite.image),
            dx: spriteMap.width * (i % spriteMap.divisor),
            dy: spriteMap.height * Math.floor(i / spriteMap.divisor),
            dw: spriteMap.width,
            dh: spriteMap.height
        });
    }

    return tiles;
};