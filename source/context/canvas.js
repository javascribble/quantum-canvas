export function resize() {
    const { canvas } = this.context;
    const { clientWidth, clientHeight } = canvas;
    canvas.width = clientWidth * this.scale;
    canvas.height = clientHeight * this.scale;
    this.context.imageSmoothingEnabled = false;
}