export function createMemory(size: number) {
  const buffer = new ArrayBuffer(size);
  const uInt8Array = new Uint8Array(buffer);
  const view = new DataView(buffer);

  // Read 8-bit byte from address
  function readUint8(address: number) {
    try {
      return view.getUint8(address);
    } catch (err) {
      throw new Error(`Address ${address} is out of range`);
    }
  }

  // Write 8-bit byte to address
  function writeUint8(address: number, value: number) {
    try {
      view.setUint8(address, value);
    } catch (err) {
      throw new Error(`Address ${address} is out of range`);
    }
  }

  // Read 16-bit word from address
  function readUint16(address: number) {
    try {
      // could also be implemented with view.getUint16(address, true)
      const highByte = readUint8(address + 1);
      const lowByte = readUint8(address);

      return (highByte << 8) | lowByte;
    } catch (err) {
      throw new Error(`Address ${address} is out of range`);
    }
  }

  // Write 16-bit word to address
  function writeUint16(address: number, value: number) {
    try {
      // could also be implemented with view.setUint16(address, value, true)
      const highByte = (value >> 8) & 0xff;
      const lowByte = value & 0xff;

      writeUint8(address, lowByte);
      writeUint8(address + 1, highByte);
    } catch (err) {
      throw new Error(`Address ${address} is out of range`);
    }
  }

  function dump() {
    return uInt8Array;
  }

  function load(value: Uint8Array, offset: number = 0) {
    uInt8Array.set(value, offset);
  }

  return {
    dump,
    load,
    readUint8,
    writeUint8,
    readUint16,
    writeUint16,
  };
}
