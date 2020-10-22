export const loadSprite = async (options, loadResource) => {
    return { ...options, image: await loadResource(options.image) };
};

export const drawSprite = (sprite, context) => {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
    context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};

export const loadMap = async (options, loadResource) => {
    const tiles = [];
    const { tileWidth, tileHeight, tileSets } = options;
    for (const { tileCount, columns, image } of tileSets) {
        const resource = await loadResource(image);
        for (let count = 0; count < tileCount; count++) {
            const column = count % columns;
            const row = Math.floor(count / columns);
            tiles.push({
                image: resource,
                sx: column * tileWidth,
                sy: row * tileHeight,
                sw: tileWidth,
                sh: tileHeight,
                dx: 0,
                dw: tileWidth,
                dh: tileHeight
            });
        }
    }

    return { ...options, tiles };
};

export const drawMap = (options, drawSprite) => {
    const { mapWidth, mapHeight, tileWidth, tileHeight, tiles } = options;
    for (const { data } of options.layers) {
        for (let row = 0; row < mapHeight; row++) {
            for (let column = 0; column < mapWidth; column++) {
                const tile = tiles[data[row * mapWidth + column] - 1];
                tile.dx = column * tileWidth;
                tile.dy = row * tileHeight;
                drawSprite(tile);
            }
        }
    }
};