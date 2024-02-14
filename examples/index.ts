//

import { findCubes, write7BitEncodedInt, read7BitEncodedInt, writeString, serializeCubes } from "../";

const array_3d = [
  [
    [1, 1, 0],
    [0, 2, 0],
    [1, 0, 1]
  ], [
    [0, 1, 0],
    [1, 2, 0],
    [0, 0, 1]
  ], [
    [0, 0, 0],
    [1, 2, 1],
    [1, 1, 0]
  ]
]

const cubes = findCubes(array_3d)
let t = write7BitEncodedInt(123)
console.log(t)
console.log(read7BitEncodedInt(t, 0))
console.log(serializeCubes(cubes))