export class Vector2 {
    x = 0;
    y = 0;

    static distance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

    static sum(a, b, sum = new Vector2()) {
        result.x = a.x + b.x;
        result.y = a.y + b.x;
        return sum;
    }

    static difference(a, b, difference = new Vector2()) {
        result.x = a.x - b.x;
        result.y = a.y - b.x;
        return difference;
    }

    static normalize(vector, result = new Vector2()) {
        const magnitude = 1 / Math.hypot(vector.x, vector.y);
        result.x = vector.x * magnitude;
        result.y = vector.y * magnitude;
        return result;
    }

    add(...addends) {
        addends.forEach(addend => Vector2.sum(this, addend, this));
    }

    subtract(...subtrahends) {
        subtrahends.forEach(subtrahend => Vector2.difference(this, subtrahend, this));
    }

    normalize() {
        Vector2.normalize(this, this);
    }
}