import { BinaryHandler } from './BinaryHandler';
import { describe, test, expect, beforeEach } from 'bun:test';

describe('BinaryHandler', () => {
  let binaryHandler: BinaryHandler;

  beforeEach(() => {
    binaryHandler = new BinaryHandler();
  });

  describe('Initialization', () => {
    test('should initialize with default values', () => {
      expect(binaryHandler.tell()).toBe(0);
      expect(binaryHandler.read().length).toBe(0);
    });
  });

  describe('Reading and Writing Data', () => {
    test('should write and read data correctly', () => {
      const testData = new Uint8Array([1, 2, 3]);
      binaryHandler.write(testData);
      expect(binaryHandler.tell()).toBe(3);
      binaryHandler.seek(0);
      expect(binaryHandler.read()).toEqual(testData);
    });
  });

  describe('Seeking', () => {
    test('should handle seeking correctly', () => {
      binaryHandler.write(new Uint8Array([1, 2, 3, 4, 5]));
      binaryHandler.seek(2);
      expect(binaryHandler.tell()).toBe(2);
      binaryHandler.seek(1, 'current');
      expect(binaryHandler.tell()).toBe(3);
      binaryHandler.seek(-2, 'end');
      expect(binaryHandler.tell()).toBe(3);
    });
  });

  describe('Encoding and Decoding 7-bit Integers', () => {
    test('should encode and decode 7-bit integers correctly', () => {
      binaryHandler.write7BitEncodedInt(300);
      binaryHandler.seek(0);
      expect(binaryHandler.read7BitEncodedInt()).toBe(300);
    });
  });

  describe('Converting Binary Data to String', () => {
    test('should convert binary data to string correctly', () => {
      const testData = 'Hello, world!';
      binaryHandler.write(testData);
      expect(binaryHandler.toString()).toBe(testData);
    });
  });
});
