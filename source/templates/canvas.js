export default `
<style>
    canvas {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
<canvas>
    <slot></slot>
</canvas>
`;