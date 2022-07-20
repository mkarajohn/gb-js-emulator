import type { Memory } from 'factories/create-memory';

// Write 8-bit byte to address
export function writeUint8(memory: Memory, address: number, value: number) {
  try {
    memory.setUint8(address, value);
  } catch (err) {
    throw new Error(`Address ${address} is out of range`);
  }
}

// Write 16-bit word to address
export function writeUint16(memory: Memory, address: number, value: number) {
  try {
    // could also be implemented with view.setUint16(address, value, true)
    const highByte = (value >> 8) & 0xff;
    const lowByte = value & 0xff;

    writeUint8(memory, address, lowByte);
    writeUint8(memory, address + 1, highByte);
  } catch (err) {
    throw new Error(`Address ${address} is out of range`);
  }
}
