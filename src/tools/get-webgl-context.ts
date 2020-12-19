export function getWebGLContext(canvas: HTMLCanvasElement): WebGLRenderingContext | null {
    try {
        return canvas.getContext('webgl');
    } catch (err) {
        console.error(err);
    }

    return null;
}