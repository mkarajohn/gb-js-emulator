export function createMemory(size: number) {
  const buffer = new ArrayBuffer(size);
  const uInt8Array = new Uint8Array(buffer);
  const view = new DataView(buffer);

  function dump() {
    return uInt8Array;
  }

  function load(value: Uint8Array | number[], offset: number = 0) {
    uInt8Array.set(value, offset);
  }

  return {
    dump,
    load,
    setUint8: view.setUint8,
    getUint8: view.getUint8,
  };
}

export type Memory = ReturnType<typeof createMemory>;
