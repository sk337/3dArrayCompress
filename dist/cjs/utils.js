"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeString = exports.read7BitEncodedInt = exports.write7BitEncodedInt = void 0;
function write7BitEncodedInt(value) {
    const buffer = [];
    do {
        let byte = value & 0x7f; // Keep 7 bits
        value >>= 7; // Shift right by 7 bits
        if (value !== 0) {
            byte |= 0x80; // Set the high bit if there are more bytes to come
        }
        buffer.push(byte);
    } while (value !== 0);
    return new Uint8Array(buffer);
}
exports.write7BitEncodedInt = write7BitEncodedInt;
function read7BitEncodedInt(reader, readStart) {
    if (readStart === undefined) {
        throw Error('readStart is required');
    }
    let value = 0;
    let shift = 0;
    let bytesRead = readStart;
    for (; shift < 35; shift += 7) {
        const byte = reader[bytesRead++];
        value |= (byte & 0x7f) << shift;
        if ((byte & 0x80) === 0) {
            break;
        }
    }
    if (shift >= 35 || (shift === 28 && reader[bytesRead++] !== 0)) {
        throw new Error('Invalid 7-bit encoded integer');
    }
    return [value, bytesRead];
}
exports.read7BitEncodedInt = read7BitEncodedInt;
function writeString(str) {
    const buffer = [];
    write7BitEncodedInt(str.length).forEach((v) => {
        buffer.push(v);
    });
    for (let i = 0; i < str.length; i++) {
        buffer.push(str.charCodeAt(i));
    }
    return new Uint8Array(buffer);
}
exports.writeString = writeString;
