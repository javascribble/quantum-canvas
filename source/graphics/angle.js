export class Angle {
    #degrees = 0;
    #radians = 0;

    get radians() { return this.#radians; }
    set radians(value) {
        const radians = value % (2 * Math.PI);
        this.#degrees = radians * Angle.degreeRatio;
        this.#radians = radians;
    }

    get degrees() { return this.#degrees; }
    set degrees(value) {
        const degrees = value % 360;
        this.#degrees = degrees;
        this.#radians = degrees * Angle.radianRatio;
    }

    static degreeRatio = 180 / Math.PI;

    static radianRatio = Math.PI / 180;
}