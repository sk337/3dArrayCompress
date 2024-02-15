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
    readInt16(le?: boolean): number;
    readUint16(le?: boolean): number;
    readInt32(le?: boolean): number;
    readUint32(le?: boolean): number;
    readInt64(le?: boolean): BigInt;
    readUint64(le?: boolean): BigInt;
    toString(): string;
}
export { BinaryHandler };
