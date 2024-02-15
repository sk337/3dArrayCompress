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
    toString(): string;
}
export { BinaryHandler };
