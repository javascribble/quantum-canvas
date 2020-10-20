import { Canvas } from '../elements/canvas.js';

Canvas.prototype.loadMap = async function (map, loadResource) {
    const tiles = [];
    const { tileWidth, tileHeight, tileSets } = map;
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

    return tiles;
};

Canvas.prototype.drawMap = function (map, tiles) {
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
    const { options, loadResource } = api;

    const tiles = new Map();
    api.loadMap = async index => tiles.set(index, await this.loadMap.call(this, options.maps[index], loadResource));
    api.drawMap = index => this.drawMap.call(this, options.maps[index], tiles.get(index));

    next?.call(this, api);
};