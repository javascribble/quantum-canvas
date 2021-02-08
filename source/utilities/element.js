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

        target.dispatchEvent(new Event('resize', { bubbles: true, composed: true }));
    }
});

export const observe = element => {
    resizeObserver.observe(element);
    resize(element);
}

export const unobserve = element => {
    resizeObserver.unobserve(element);
}