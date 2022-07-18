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

import { createMemory } from 'factories/create-memory';

export const memory = createMemory(0x10000);
memory.load(new Uint8Array(Array(0x10000).fill(1)));
memory.writeUint8(0x0100, 0xc3);
memory.writeUint8(0x0101, 0);
memory.writeUint8(0x0102, 0);

//@ts-ignore
window.memory = memory;
