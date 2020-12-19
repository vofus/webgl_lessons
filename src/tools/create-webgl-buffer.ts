export function createWebGLBuffer(gl: WebGLRenderingContext, data?: Float32Array): WebGLBuffer {
    const buffer = gl.createBuffer();

    if (Boolean(data)) {
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    return buffer;
}