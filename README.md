# 3D Array Compressor

> Compress 3d array into a list of squares

## Installation

**From Github** 

run the command `npm install @sk337/3dArrayCompress`

**Locally**

1. Clone the repository `git clone git+https://github.com/sk337/3dArrayCompress.git`
2. install dependencies `npm i`
3. Complie code `npm run build`
4. install the package `npm i ./`

## usage

```js
import { findCubes } from "3d-array-compress";

const array = [
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
];

const cubes = findCubes(array);
console.log(cubes)
```