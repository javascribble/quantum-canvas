export const resize = (element, scale = devicePixelRatio) => {
    const scaledWidth = element.clientWidth * scale;
    const scaledHeight = element.clientHeight * scale;
    if (element.width !== scaledWidth || element.height !== scaledHeight) {
        element.width = scaledWidth;
        element.height = scaledHeight;
    }
};

export const resizeObserver = new ResizeObserver((observed, observer) => {
    for (const { target } of observed) {
        target.dispatchEvent(new Event('resize'));
    }
});