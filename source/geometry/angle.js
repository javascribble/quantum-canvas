export const convertRadians = radians => radians * 180 / Math.PI;

export const convertDegrees = degrees => degrees * Math.PI / 180;

export const clampRadians = radians => radians % (2 * Math.PI);

export const clampDegrees = degrees => degrees % 360;