export const createSpriteSystem = api => {
    const canvas = {
        layers: [
            {
                draws: [
                    {
                        type: 'sprite',
                        sprites: []
                    }
                ]
            }
        ]
    };

    // TODO: Support canvas layers and multiple draws;
    const sprites = canvas.layers[0].draws[0].sprites;

    return {
        component: 'sprite',
        add: entity => {
            sprites.push(entity.sprite);
        },
        update: (delta, elapsed) => {
            sprites.forEach(api.drawSprite);
        },
        delete: entity => {
            sprites.remove(entity.sprite);
        }
    };
};