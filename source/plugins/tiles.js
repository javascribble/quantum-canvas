import { Canvas } from '../elements/canvas.js';

Canvas.prototype.loadMap = async function (options, loadResource) {
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

Canvas.prototype.drawMap = function (map) {
    const { mapWidth, mapHeight, tileWidth, tileHeight, tiles } = map;
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
    api.loadMap = async index => await this.loadMap.call(this, options.maps[index], loadResource);
    api.drawMap = this.drawMap.bind(this);
    next?.call(this, api);
};