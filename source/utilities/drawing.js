import { drawType } from '../constants/rendering.js';

export const draw = (drawable, context) => {
    switch (drawable.type) {
        case drawType.image:
            const { image, sx, sy, sw, sh, dx, dy, dw, dh } = drawable;
            context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
            break;
        case drawType.text:
            break;
    }
};