export const drawSprite = (context, sprite) => {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh } = sprite;
    context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
};