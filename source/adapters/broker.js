export const canvasBrokerAdapter = {
    adapt: (canvas, broker, configuration) => {
        broker.subscribe('drawSprite', sprite => canvas.drawSprite(sprite));
    },
    preserve: (canvas, broker, configuration) => {
        broker.unsubscribe('drawSprite', sprite => canvas.drawSprite(sprite));
    }
};