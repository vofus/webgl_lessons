export function getWebGLContext(canvas: HTMLCanvasElement): WebGLRenderingContext | null {
    try {
        return canvas.getContext('webgl', {
            antialias: true
        });
    } catch (err) {
        console.error(err);
    }

    return null;
}