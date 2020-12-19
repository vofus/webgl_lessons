attribute vec2 coordinates;
uniform mat3 rotationMatrix;

void main() {
    gl_Position = vec4(vec3(coordinates, 0.0) * rotationMatrix, 1.0);
}