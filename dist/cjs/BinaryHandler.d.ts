declare class BinaryHandler {
    private data;
    private position;
    constructor(data?: string | Uint8Array);
    read(size?: number): Uint8Array;
    write(data: string | Uint8Array): number;
    seek(offset: number, whence?: 'start' | 'current' | 'end'): void;
    tell(): number;
    write7BitEncodedInt(value: number): void;
    read7BitEncodedInt(): number;
    readInt8(): number;
    readUint8(): number;
    readInt16(): number;
    readUint16(): number;
    readInt32(): number;
    readUint32(): number;
    readInt64(): BigInt;
    readUint64(): BigInt;
    toString(): string;
}
export { BinaryHandler };
