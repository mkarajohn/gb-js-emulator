/*
Memory map

	$0000-$00FF 	Restart and Interrupt Vectors
	$0100-$014F 	Cartridge Header Area
	$0150-$3FFF 	Cartridge ROM - Bank 0 (fixed)
	$4000-$7FFF 	Cartridge ROM - Switchable Banks 1-xx
	$8000-$97FF 	Character RAM
	$9800-$9BFF 	BG Map Data 1
	$9C00-$9FFF 	BG Map Data 2
	$A000-$BFFF 	Cartridge RAM (If Available)
	$C000-$CFFF 	Internal RAM - Bank 0 (fixed)
	$D000-$DFFF 	Internal RAM - Bank 1-7 (switchable - CGB only)
	$E000-$FDFF 	Echo RAM - Reserved, Do Not Use
	$FE00-$FE9F 	OAM - Object Attribute Memory
	$FEA0-$FEFF 	Unusable Memory
	$FF00-$FF7F 	Hardware I/O Registers
	$FF80-$FFFE 	HRAM - 127 bytes
	$FFFF       	Interrupt Enable Flag

 */

/*
 * CARTRIDGE ROM 0x0000 - 0x7fff
 */
// 0x00ff - 0x0000
const RESTART_AND_INTERRUPT_VECTORS = new Uint8Array(0x0100);
// 0x014f - 0x0100
const CARTRIDGE_HEADER_AREA = new Uint8Array(0x0150 - 0x0100);
// 0x3fff - 0x0150
const CARTRIDGE_ROM_BANK_0 = new Uint8Array(0x4000 - 0x0150);
// 0x7fff - 0x4000
const CARTRIDGE_ROM_SWITCHABLE_BANKS = new Uint8Array(0x8000 - 0x4000);

/*
 * VIDEO RAM 0x8000 - 0x9fff
 */
// 0x97ff - 0x8000
const CHARACTER_RAM = new Uint8Array(0x9800 - 0x8000);
// 0x9bff - 0x9800
const BG_MAP_DATA_1 = new Uint8Array(0x9c00 - 0x9800);
// 0x9fff - 0x9c00
const BG_MAP_DATA_2 = new Uint8Array(0xa000 - 0x9c00);

// 0xbfff - 0xa000
const CARTRIDGE_RAM = new Uint8Array(0xc000 - 0xa000);

/*
 * SYSTEM RAM 0xc000 - 0xdfff
 */
// 0xcfff - 0xc000
const INTERNAL_RAM_BANK_0 = new Uint8Array(0xd000 - 0xc000);
// 0xdfff - 0xd000
const INTERNAL_RAM_BANK_1 = new Uint8Array(0xe000 - 0xd000);

// 0xfdff - 0xe000
const ECHO_RAM = new Uint8Array(0xfe00 - 0xe000);

// 0xfe9f - 0xfe00
const OBJECT_ATTRIBUTE_MEMORY = new Uint8Array(0xfea0 - 0xfe00);

// 0xfeff - 0xfea0
const UNUSABLE_MEMORY = new Uint8Array(0xff00 - 0xfea0);

// 0xff7f - 0xff00
const HARDWARE_IO_REGISTERS = new Uint8Array(0xff80 - 0xff00);

// "HIGH RAM" 0xfffe - 0xff80
const ZERO_PAGE = new Uint8Array(0xffff - 0xff80);

// 0xffff
const INTERRUPT_ENABLE_FLAG = new Uint8Array(0x10000 - 0xffff);

const MEMORY = new Uint8Array(
  RESTART_AND_INTERRUPT_VECTORS.length +
    CARTRIDGE_HEADER_AREA.length +
    CARTRIDGE_ROM_BANK_0.length +
    CARTRIDGE_ROM_SWITCHABLE_BANKS.length +
    CHARACTER_RAM.length +
    BG_MAP_DATA_1.length +
    BG_MAP_DATA_2.length +
    CARTRIDGE_RAM.length +
    INTERNAL_RAM_BANK_0.length +
    INTERNAL_RAM_BANK_1.length +
    ECHO_RAM.length +
    OBJECT_ATTRIBUTE_MEMORY.length +
    UNUSABLE_MEMORY.length +
    HARDWARE_IO_REGISTERS.length +
    ZERO_PAGE.length +
    INTERRUPT_ENABLE_FLAG.length
);

//@ts-ignore
window.MEMORY = MEMORY;

export { MEMORY };
