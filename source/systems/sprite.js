import { createSpriteView, createSpriteMap } from '../utilities/sprite.js';
import { spriteType } from '../constants/rendering.js';

export const createSpriteSystem = (canvas, api) => {
    const { options, resources } = api;
    const { sprites, spriteViews, spriteMaps } = options;
    return {
        component: 'sprite',
        add: entity => {
            const { sprite } = entity;
            switch (sprite.type) {
                case spriteType.view:
                    sprite.drawable = createSpriteView(sprite.resource, sprites, spriteViews, resources);
                    sprite.draw = () => canvas.drawImage(sprite.drawable);
                    break;
                case spriteType.map:
                    sprite.drawable = createSpriteMap(sprite.resource, sprites, spriteMaps, resources);
                    sprite.draw = () => sprite.drawable.map(drawable => canvas.drawImage(drawable));
                    break;
            };

            entities.push(entity);
        },
        delete: entity => {
            const { sprite } = entity;
            delete sprite.drawable;
            delete sprite.draw;
        }
    };
};