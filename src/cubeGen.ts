import type { Cube } from './types';

export function findCubes(array: number[][][]): Cube[] {
  const cubes: Cube[] = [];
  const xLen: number = array.length;
  const yLen: number = array[0].length;
  const zLen: number = array[0][0].length;
  const occupiedCoordinates: Set<string> = new Set(); // To keep track of occupied coordinates

  // Function to check if a cube overlaps with existing cubes
  function isOverlap(
    location: [number, number, number],
    size: [number, number, number],
  ): boolean {
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
        const index: number = array[i][j][k];
        if (1 <= index && index <= 256) {
          // Check if the value is in the range of 0-256
          // Find the size of the cube in all three dimensions
          let sizeX: number = 1;
          let sizeY: number = 1;
          let sizeZ: number = 1;
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
