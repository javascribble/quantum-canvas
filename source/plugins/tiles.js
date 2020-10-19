import { Canvas } from '../elements/canvas.js';

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    const { drawSprite, loadResource } = api;
    const tiles = new Map();

    api.loadMap = async index => {
        const map = [];
        const { tileWidth, tileHeight, tileSets } = options.maps[index];
        for (const { tileCount, columns, image } of tileSets) {
            for (let count = 0; count < tileCount; count++) {
                const column = count % columns;
                const row = Math.floor(count / columns);
                tiles.push({
                    image: await loadResource(image),
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

        tiles.set(index, map);
    };

    api.drawMap = index => {
        const tiles = tiles.get(index);
        const { mapWidth, mapHeight, tileWidth, tileHeight } = options.maps[index];
        for (const { data } of map.layers) {
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

    next?.call(this, api);
};