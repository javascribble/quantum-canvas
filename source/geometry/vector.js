export const distance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

export const normalize = vector => {
    const magnitude = 1 / Math.hypot(vector.x, vector.y);
    vector.x *= magnitude;
    vector.y *= magnitude;
};

export const sum = (a, b) => ({
    x: a.x + b.x,
    y: a.y + b.x
});

export const difference = (a, b) => ({
    x: a.x - b.x,
    y: a.y - b.x
});