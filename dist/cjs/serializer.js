"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCubes = void 0;
const gzip_js_1 = require("gzip-js");
function serializeCubes(cubes) {
    const sig = [0x43, 0x55, 0x42, 0x5a];
    let output = [];
    for (const cube of cubes) {
        output.push(cube.index);
        output.push(cube.start[0]);
        output.push(cube.start[1]);
        output.push(cube.start[2]);
        output.push(cube.end[0]);
        output.push(cube.end[1]);
        output.push(cube.end[2]);
    }
    const l = gzip_js_1.default.zip(output, { level: 9 });
    const buffer = new Uint8Array(sig.concat(l));
    return buffer;
}
exports.serializeCubes = serializeCubes;
