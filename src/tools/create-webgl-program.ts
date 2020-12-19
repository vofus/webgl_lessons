export function createWebGLProgram(gl: WebGLRenderingContext, vSource: string, fSource: string): WebGLProgram | null {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    const program = gl.createProgram();

    gl.shaderSource(vertexShader, vSource);
    gl.shaderSource(fragmentShader, fSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    const isSuccess = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)
        && gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)
        && gl.getProgramParameter(program, gl.LINK_STATUS);

    if (isSuccess) {
        return program;
    }

    console.log(gl.getShaderInfoLog(vertexShader));
    console.log(gl.getShaderInfoLog(fragmentShader));
    console.log(gl.getProgramInfoLog(program));
    
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    gl.deleteProgram(program);

    return null;
}