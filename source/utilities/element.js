export const resize = (observed, observer) => {
    const canvas = observed[0].target;
    const scaledWidth = canvas.clientWidth * devicePixelRatio;
    const scaledHeight = canvas.clientHeight * devicePixelRatio;
    if (canvas.width !== scaledWidth || canvas.height !== scaledHeight) {
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
    }
};