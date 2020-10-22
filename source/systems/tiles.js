import { Canvas } from '../elements/canvas.js';

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = function (api) {
    api.systems?.add({
        component: 'tiles',
        add: async entity => {
            const { broker, loadTiles, drawTiles, loadSprite, drawSprite } = api;

            const tiles = await loadTiles(0);
            const sprite = await loadSprite(0);
            broker.subscribe('MoveUp', _ => sprite.dy -= 10);
            broker.subscribe('MoveDown', _ => sprite.dy += 10);
            broker.subscribe('MoveLeft', _ => sprite.dx -= 10);
            broker.subscribe('MoveRight', _ => sprite.dx += 10);
            quantum.animate((deltaTime, elapsed) => {
                drawTiles(tiles);
                drawSprite(sprite);
                return true;
            });
        },
        delete: entity => {

        }
    });

    next?.call(this, api);
};