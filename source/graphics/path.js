export const drawPath = (context, path) => {
    const { strokePath, strokeStyle, fillPath, fillStyle, dashPattern, clipPath } = path;

    if (dashPattern) {
        context.setLineDash(dashPattern);
    }

    if (strokePath) {
        context.strokeStyle = strokeStyle;
        context.stroke(strokePath);
    }

    if (fillPath) {
        context.fillStyle = fillStyle;
        context.fill(fillPath);
    }

    if (clipPath) {
        context.clip(clipPath);
    }
};