/*
 * MEMORY MAP
 *
 * [$0000, $00FF] 	Restart and Interrupt Vectors  |
 * [$0100, $014F] 	Cartridge Header Area          +-> 16KB Cartridge ROM - Bank 0
 * [$0150, $3FFF] 	Cartridge ROM - Bank 0 (fixed) |
 * [$4000, $7FFF] 	16KB Cartridge ROM - Switchable Banks 1-xx
 * [$8000, $97FF] 	Character RAM                |
 * [$9800, $9BFF] 	BG Map Data 1 (bg or window) +-> 8KB Video RAM [8000, 9FFF]
 * [$9C00, $9FFF] 	BG Map Data 2 (bg or window) |
 * [$A000, $BFFF] 	8KB Cartridge RAM (If Available)
 * [$C000, $CFFF] 	4KB Internal RAM (Work RAM) - Bank 0 (fixed)
 * [$D000, $DFFF] 	4KB Internal RAM (Work RAM) - Bank 1-7 (switchable - CGB only)
 * [$E000, $FDFF] 	Echo RAM - Reserved, Do Not Use, Mirror of [C000,DDFF]
 * [$FE00, $FE9F] 	OAM - Object/Sprite Attribute Memory
 * [$FEA0, $FEFF] 	Unusable Memory
 * [$FF00, $FF7F] 	Hardware I/O Registers
 * [$FF80, $FFFE] 	HRAM/Zero Page - 127 bytes
 * $FFFF       	Interrupt Enable Flag
 *
 */

const memory = new Uint8Array(0x10000);
memory.fill(1);

// Read 8-bit byte from address
function rb(address: number) {
  const value = memory.at(address);

  if (value === undefined) {
    throw new Error(`Address ${address} is out of range`);
  }

  return value;
}

// Write 8-bit byte to address
function wb(address: number, value: number) {
  if (rb(address) === undefined) {
    throw new Error(`Address ${address} is out of range`);
  }

  memory.set([value], address);
}

// Read 16-bit word from address
function rw(address: number) {
  const highByte = memory.at(address + 1);
  const lowByte = memory.at(address);

  if (highByte === undefined || lowByte === undefined) {
    throw new Error(`Address ${address} is out of range`);
  }

  return (highByte << 8) + lowByte;
}

// Write 16-bit word to address
function ww(address: number, value: number) {
  const highByte = (value >> 8) & 0xff;
  const lowByte = value & 0xff;

  if (rb(address) === undefined || rb(address + 1) === undefined) {
    throw new Error(`Address ${address} is out of range`);
  }

  memory.set([lowByte], address);
  memory.set([highByte], address + 1);
}

export function dumpMem() {
  return new Uint8Array(memory);
}

export function loadToMem(value: number | Uint8Array, offset?: number) {
  if (typeof value === 'number') {
    memory.set([value], offset);
  } else {
    memory.set(value, offset);
  }
}

export function readMemAddr(address: number) {
  return rb(address);
}

export function writeToMemAddr(address: number, value: number) {
  if (value > 0xff) {
    // Write word
    ww(address, value);
  } else {
    // Write byte
    wb(address, value);
  }
}

//@ts-ignore
window.memory = memory;
//@ts-ignore
window.readMem = readMemAddr;
//@ts-ignore
window.writeMem = writeToMemAddr;
