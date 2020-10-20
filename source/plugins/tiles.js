import { Canvas } from '../elements/canvas.js';

Canvas.prototype.loadTiles = function (map, images) {
    const tiles = [];
    const { tileWidth, tileHeight, tileSets } = map;
    for (const { tileCount, columns, image } of tileSets) {
        const tileImage = images[image];
        for (let count = 0; count < tileCount; count++) {
            const column = count % columns;
            const row = Math.floor(count / columns);
            tiles.push({
                image: tileImage,
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

    return tiles;
};

Canvas.prototype.drawTiles = function (map, tiles) {
    const { mapWidth, mapHeight, tileWidth, tileHeight } = map;
    for (const { data } of map.layers) {
        for (let row = 0; row < mapHeight; row++) {
            for (let column = 0; column < mapWidth; column++) {
                const tile = tiles[data[row * mapWidth + column] - 1];
                tile.dx = column * tileWidth;
                tile.dy = row * tileHeight;
                this.drawSprite(tile);
            }
        }
    }
};

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    api.loadTiles = this.loadTiles.bind(this);
    api.drawTiles = this.drawTiles.bind(this);
    next?.call(this, api);
};