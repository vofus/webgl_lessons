// https://webglfundamentals.org/webgl/lessons/ru/webgl-2d-matrices.html
export const m3 = {
    translation: function (tx: number, ty: number): number[] {
        return [
            1, 0, 0,
            0, 1, 0,
            tx, ty, 1,
        ];
    },

    rotation: function (angleInRadians: number): number[] {
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        
        return [
            c, -s, 0,
            s, c, 0,
            0, 0, 1,
        ];
    },

    scaling: function (sx: number, sy: number): number[] {
        return [
            sx, 0, 0,
            0, sy, 0,
            0, 0, 1,
        ];
    },
};