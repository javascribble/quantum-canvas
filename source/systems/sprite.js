import { createSpriteView, createSpriteMap } from '../utilities/sprite.js';
import { spriteType } from '../constants/rendering.js';

export const createSpriteSystem = (canvas, api) => {
    const { options, resources } = api;
    const { sprites, spriteViews, spriteMaps } = options;

    const entities = [];
    return {
        component: 'sprite',
        add: entity => {
            const { sprite } = entity;
            switch (sprite.type) {
                case spriteType.view:
                    sprite.drawable = createSpriteView(sprite.resource, sprites, spriteViews, resources);
                    break;
                case spriteType.map:
                    sprite.drawable = createSpriteMap(sprite.resource, sprites, spriteMaps, resources);
                    break;
            };

            entities.push(entity);
        },
        update: (delta, elapsed) => {
            for (const { sprite } of entities) {
                switch (sprite.type) {
                    case spriteType.view:
                        canvas.drawImage(sprite.drawable);
                        break;
                    case spriteType.map:
                        sprite.drawable.map(drawable => canvas.drawImage(drawable));
                        break;
                };
            }
        },
        delete: entity => {
            entities.remove(entity);
        }
    };
};