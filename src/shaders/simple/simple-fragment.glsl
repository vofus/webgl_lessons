// https://webglfundamentals.org/webgl/lessons/ru/webgl-fundamentals.html
// Фрагментные шейдеры не имеют точности по умолчанию, поэтому необходимо её указать.
// mediump подойдёт для большинства случаев. Он означает "средняя точность".
precision mediump float;

uniform vec4 color;

void main() {
    gl_FragColor = color;
}