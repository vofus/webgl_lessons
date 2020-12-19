import { getWebGLContext } from './tools/get-webgl-context';
// Lessons
import {runLesson01} from './lessons/lesson-01';

// RUN
main();

function main(): void {
    const canvas = document.getElementById('container') as HTMLCanvasElement;
    const gl = getWebGLContext(canvas);

    if (!Boolean(gl)) {
        return;
    }

    // Run lessons
    runLesson01(gl);
}
