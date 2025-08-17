import type { Memory } from '~/factories/create-memory';

// Read 8-bit byte from address
export function readUint8(memory: Memory, address: number) {
  try {
    return memory.getUint8(address);
  } catch (err) {
    throw new Error(`Address ${address} is out of range`);
  }
}
// Read 16-bit word from address
export function readUint16(memory: Memory, address: number) {
  try {
    // could also be implemented with view.getUint16(address, true)
    const highByte = readUint8(memory, address + 1);
    const lowByte = readUint8(memory, address);

    return (highByte << 8) | lowByte;
  } catch (err) {
    throw new Error(`Address ${address} is out of range`);
  }
}
