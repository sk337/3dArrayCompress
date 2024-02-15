import { BinaryHandler } from "../src";

const f = new BinaryHandler();

f.write("Hello, World!");
console.log(f);
console.log(f.toString());