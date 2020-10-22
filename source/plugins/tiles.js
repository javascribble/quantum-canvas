import { loadMap, drawMap } from '../utilities/rendering.js';
import { Canvas } from '../elements/canvas.js';

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    api.loadMap = async index => await loadMap(api.options.maps[index], api.loadResource);
    api.drawMap = map => drawMap(map, api.drawSprite);
    next?.call(this, api);
};