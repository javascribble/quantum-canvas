import { drawType } from '../constants/rendering.js';

export const draw = (drawable, canvas) => {
    switch (drawable.type) {
        case drawType.image:
            canvas.drawImage(drawable);
            break;
        case drawType.text:
            break;
    }
};