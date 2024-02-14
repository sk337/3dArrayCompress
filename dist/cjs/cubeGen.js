"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCubes = void 0;
function findCubes(array) {
    const cubes = [];
    const xLen = array.length;
    const yLen = array[0].length;
    const zLen = array[0][0].length;
    const occupiedCoordinates = new Set(); // To keep track of occupied coordinates
    // Function to check if a cube overlaps with existing cubes
    function isOverlap(location, size) {
        for (let i = location[0]; i < location[0] + size[0]; i++) {
            for (let j = location[1]; j < location[1] + size[1]; j++) {
                for (let k = location[2]; k < location[2] + size[2]; k++) {
                    if (occupiedCoordinates.has(`${i},${j},${k}`)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    // Iterate through the array to find occupied cells
    for (let i = 0; i < xLen; i++) {
        for (let j = 0; j < yLen; j++) {
            for (let k = 0; k < zLen; k++) {
                const index = array[i][j][k];
                if (1 <= index && index <= 256) {
                    // Check if the value is in the range of 0-256
                    // Find the size of the cube in all three dimensions
                    let sizeX = 1;
                    let sizeY = 1;
                    let sizeZ = 1;
                    while (i + sizeX < xLen && array[i + sizeX][j][k] === index) {
                        sizeX++;
                    }
                    while (j + sizeY < yLen && array[i][j + sizeY][k] === index) {
                        sizeY++;
                    }
                    while (k + sizeZ < zLen && array[i][j][k + sizeZ] === index) {
                        sizeZ++;
                    }
                    // Check for overlap
                    if (!isOverlap([i, j, k], [sizeX, sizeY, sizeZ])) {
                        // Append cube's location, size, and index
                        cubes.push({
                            start: [i, j, k],
                            end: [sizeX, sizeY, sizeZ],
                            index: index,
                        });
                        // Update occupied coordinates
                        for (let x = i; x < i + sizeX; x++) {
                            for (let y = j; y < j + sizeY; y++) {
                                for (let z = k; z < k + sizeZ; z++) {
                                    occupiedCoordinates.add(`${x},${y},${z}`);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return cubes;
}
exports.findCubes = findCubes;
