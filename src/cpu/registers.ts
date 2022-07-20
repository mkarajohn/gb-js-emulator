import { readUint16, readUint8 } from 'cpu/read';
import { writeUint16, writeUint8 } from 'cpu/write';
import { createMemory } from 'factories/create-memory';
import type { Register } from 'types';

const regA = 'A';
const regB = 'B';
const regC = 'C';
const regD = 'D';
const regE = 'E';
const regF = 'F';
const regH = 'H';
const regL = 'L';
const regSP = 'SP'; // Stack Pointer
const regPC = 'PC'; // Program Counter
const regAF = 'AF';
const regBC = 'BC';
const regDE = 'DE';
const regHL = 'HL';

// The whole point of this ordering is to be able to read register pairs with the existing
// read/writeUint16 methods. Since the system is little endian, 2 byte values are written and read
// with the low byte at address n and the high byte at address n+1.
// So, instead of mapping the registers as
// n A
// n+1 F
// we map them as
// n F
// n+1 A
// To be in line with little endianness.
const registersMap = {
  [regF]: 0x0, // AF pair
  [regA]: 0x1, // AF pair
  [regC]: 0x2, // BC pair
  [regB]: 0x3, // BC pair
  [regE]: 0x4, // DE pair
  [regD]: 0x5, // DE pair
  [regL]: 0x6, // HL pair
  [regH]: 0x7, // HL pair
  [regSP]: 0x8,
  [regPC]: 0xa,
};

const registerAAddress = registersMap[regA];
const registerBAddress = registersMap[regB];
const registerCAddress = registersMap[regC];
const registerDAddress = registersMap[regD];
const registerEAddress = registersMap[regE];
const registerFAddress = registersMap[regF];
const registerHAddress = registersMap[regH];
const registerLAddress = registersMap[regL];
const registerSPAddress = registersMap[regSP];
const registerPCAddress = registersMap[regPC];

const registers = createMemory(8 + 2 * 2); // 8 * 1 byte + 2 * 2 bytes

// Initialise registers
writeRegisterPC(0x0100);

export function writeRegister(register: Register, value: number) {
  switch (register) {
    case regA:
    case regB:
    case regC:
    case regD:
    case regE:
    case regF:
    case regH:
    case regL:
      writeUint8(registers, registersMap[register], value);
      break;
    case regSP:
    case regPC:
      writeUint16(registers, registersMap[register], value);
      break;
    case regAF:
      writeUint16(registers, registerFAddress, value);
      break;
    case regBC:
      writeUint16(registers, registerCAddress, value);
      break;
    case regDE:
      writeUint16(registers, registerEAddress, value);
      break;
    case regHL:
      writeUint16(registers, registerLAddress, value);
      break;
    default:
      throw new Error('Invalid register');
  }
}

export function readRegister(register: Register) {
  switch (register) {
    case regA:
    case regB:
    case regC:
    case regD:
    case regE:
    case regF:
    case regH:
    case regL:
      return readUint8(registers, registersMap[register]);
    case regSP:
    case regPC:
      return readUint16(registers, registersMap[register]);
    case regAF:
      return readUint16(registers, registerFAddress);
    case regBC:
      return readUint16(registers, registerCAddress);
    case regDE:
      return readUint16(registers, registerEAddress);
    case regHL:
      return readUint16(registers, registerLAddress);
    default:
      throw new Error('Invalid register');
  }
}

export function readRegisterA() {
  return readUint8(registers, registerAAddress);
}

export function readRegisterB() {
  return readUint8(registers, registerBAddress);
}

export function readRegisterC() {
  return readUint8(registers, registerCAddress);
}

export function readRegisterD() {
  return readUint8(registers, registerDAddress);
}

export function readRegisterE() {
  return readUint8(registers, registerEAddress);
}

export function readRegisterF() {
  return readUint8(registers, registerFAddress);
}

export function readRegisterH() {
  return readUint8(registers, registerHAddress);
}

export function readRegisterL() {
  return readUint8(registers, registerLAddress);
}

export function readRegisterSP() {
  return readUint16(registers, registerSPAddress);
}

export function readRegisterPC() {
  return readUint16(registers, registerPCAddress);
}

export function readRegisterAF() {
  return readUint16(registers, registerFAddress);
}

export function readRegisterBC() {
  return readUint16(registers, registerCAddress);
}

export function readRegisterDE() {
  return readUint16(registers, registerEAddress);
}

export function readRegisterHL() {
  return readUint16(registers, registerLAddress);
}

export function writeRegisterA(value: number) {
  writeUint8(registers, registerAAddress, value);
}

export function writeRegisterB(value: number) {
  writeUint8(registers, registerBAddress, value);
}

export function writeRegisterC(value: number) {
  writeUint8(registers, registerCAddress, value);
}

export function writeRegisterD(value: number) {
  writeUint8(registers, registerDAddress, value);
}

export function writeRegisterE(value: number) {
  writeUint8(registers, registerEAddress, value);
}

export function writeRegisterF(value: number) {
  writeUint8(registers, registerFAddress, value);
}

export function writeRegisterH(value: number) {
  writeUint8(registers, registerHAddress, value);
}

export function writeRegisterL(value: number) {
  writeUint8(registers, registerLAddress, value);
}

export function writeRegisterSP(value: number) {
  writeUint16(registers, registerSPAddress, value);
}

export function writeRegisterPC(value: number) {
  writeUint16(registers, registerPCAddress, value);
}

export function writeRegisterAF(value: number) {
  writeUint16(registers, registerFAddress, value);
}

export function writeRegisterBC(value: number) {
  writeUint16(registers, registerCAddress, value);
}

export function writeRegisterDE(value: number) {
  writeUint16(registers, registerEAddress, value);
}

export function writeRegisterHL(value: number) {
  writeUint16(registers, registerLAddress, value);
}

export const registerNames = {
  regA,
  regB,
  regC,
  regD,
  regE,
  regF,
  regH,
  regL,
  regSP,
  regPC,
  regAF,
  regBC,
  regDE,
  regHL,
} as const;

//@ts-ignore
window.registers = registers;
// @ts-ignore
window._registersMap = registersMap;
// @ts-ignore
window._registers = registers;
