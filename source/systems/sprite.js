import { createSpriteView, createSpriteMap } from '../utilities/sprite.js';
import { spriteType } from '../constants/sprites.js';

// TODO: Support canvas layers, draw passes and draw types;
export const createSpriteSystem = api => {
    const entities = [];
    const { options, resources } = api;
    const { sprites, spriteViews, spriteMaps } = options;
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
                        api.drawSprite(sprite.drawable);
                        break;
                    case spriteType.map:
                        sprite.drawable.forEach(api.drawSprite);
                        break;
                };
            }
        },
        delete: entity => {
            entities.remove(entity);
        }
    };
};