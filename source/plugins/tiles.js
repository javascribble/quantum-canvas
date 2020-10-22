import { loadTiles, drawTiles } from '../utilities/rendering.js';
import { Canvas } from '../elements/canvas.js';

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    api.loadTiles = async index => await loadTiles(api.options.maps[index], api.loadResource);
    api.drawTiles = map => drawTiles(map, api.drawSprite);
    next?.call(this, api);
};