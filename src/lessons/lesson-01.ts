// @ts-ignore
import simpleVertexSource from '../shaders/simple/simple-vertex.glsl';
// @ts-ignore
import simpleFragmentSource from '../shaders/simple/simple-fragment.glsl';

import { createWebGLBuffer } from '../tools/create-webgl-buffer';
import { createWebGLProgram } from '../tools/create-webgl-program';
import { m3 } from '../tools/m3';

export function runLesson01(gl: WebGLRenderingContext): void {
    console.log('Lesson 01 started!');

    const vertices = new Float32Array([
        -0.5, 0.5, -0.5, -0.5, 0.5, -0.5,
        -0.5, 0.5, 0.5, 0.5, 0.5, -0.5,
    ]);
    const vertexBuffer = createWebGLBuffer(gl, vertices);
    const program = createWebGLProgram(gl, simpleVertexSource, simpleFragmentSource);

    if (!Boolean(program)) {
        return;
    }

    const coord = gl.getAttribLocation(program, 'coordinates');
    const color = gl.getUniformLocation(program, 'color');
    const rotationMatrix = gl.getUniformLocation(program, 'rotationMatrix');

    // Use the combined shader program object
    gl.useProgram(program);

    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);

    // Enable the attribute
    gl.enableVertexAttribArray(coord);

    // Set the view port
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Run shader program
    render(gl, color, rotationMatrix, 0);
}

function render(
    gl: WebGLRenderingContext,
    colorUniformLocation: WebGLUniformLocation,
    rotationUniformLocation: WebGLUniformLocation,
    angle: number
): void {
    const rotation = m3.rotation(angle * Math.PI / 180);

    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.uniformMatrix3fv(rotationUniformLocation, false, rotation);

    gl.uniform4f(colorUniformLocation, 0.7, 0.0, 0.3, 0.7);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    gl.uniform4f(colorUniformLocation, 0.0, 0.7, 0.1, 0.7);
    gl.drawArrays(gl.TRIANGLES, 3, 3);

    requestAnimationFrame(() => {
        render(gl, colorUniformLocation, rotationUniformLocation, angle + 0.6);
    });
}
