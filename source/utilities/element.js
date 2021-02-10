export const resize = (canvas, scale) => {
    const scaledWidth = canvas.clientWidth * scale;
    const scaledHeight = canvas.clientHeight * scale;
    if (canvas.width !== scaledWidth || canvas.height !== scaledHeight) {
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
    }
};

export const resizeObserver = new ResizeObserver((observed, observer) => {
    for (const { target } of observed) {
        target.dispatchEvent(new Event('resize'));
    }
});