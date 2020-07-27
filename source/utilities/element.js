export const resize = element => {
    const scaledWidth = element.clientWidth * devicePixelRatio;
    const scaledHeight = element.clientHeight * devicePixelRatio;
    if (element.width !== scaledWidth || element.height !== scaledHeight) {
        element.width = scaledWidth;
        element.height = scaledHeight;
    }
};

export const resizeObserver = new ResizeObserver((observed, observer) => {
    for (const { target } of observed) {
        resize(target);
    }
});