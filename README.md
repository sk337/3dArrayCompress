# 3D Array Compressor

> Compress 3d array into a list of squares

## Installation

**From Github** 

run the command `npm install git+https://github.com/sk337/JSBinary.git`

**Locally**

1. Clone the repository `git clone https://github.com/sk337/JSBinary.git`
2. install dependencies `npm i`
3. Complie code `npm run build`
4. install the package `npm i ./`

## usage

```js
import { BinaryHandler } from "../src";

const f = new BinaryHandler();

f.write("Hello, World!");
console.log(f);
console.log(f.toString());
```