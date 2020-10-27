import { createSpriteView, createSpriteMap } from '../utilities/sprite.js';
import { spriteType } from '../constants/rendering.js';

export const createSpriteSystem = (canvas, api) => {
    const { options, resources } = api;
    const { sprites, spriteViews, spriteMaps } = options;

    // TODO: Support canvas layers and draw types;
    const drawables = canvas.layers[0].drawables;
    const entities = [];
    return {
        component: 'sprite',
        add: entity => {
            const { sprite } = entity;
            switch (sprite.type) {
                case spriteType.view:
                    sprite.drawable = createSpriteView(sprite.resource, sprites, spriteViews, resources);
                    drawables.push(sprite.drawable);
                    break;
                case spriteType.map:
                    sprite.drawable = createSpriteMap(sprite.resource, sprites, spriteMaps, resources);
                    sprite.drawable.forEach(drawable => drawables.push(drawable));
                    break;
            };

            entities.push(entity);
        },
        update: (delta, elapsed) => {
            for (const { sprite } of entities) {
                // TODO: Update draw layer/order.
            }
        },
        delete: entity => {
            entities.remove(entity);
        }
    };
};