import { readUint16, readUint8 } from '~/cpu/read';
import { writeUint16, writeUint8 } from '~/cpu/write';
import { createMemory } from '~/factories/create-memory';
import type { Register } from '~/types';

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

const registers = createMemory(8 + 2 * 2); // 8 * 1 byte + 2 * 2 bytes
// Initialise registers
writeRegisterPC(0x0100);

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
const f_addr = 0x0;
const a_addr = 0x1;
const c_addr = 0x2;
const b_addr = 0x3;
const e_addr = 0x4;
const d_addr = 0x5;
const l_addr = 0x6;
const h_addr = 0x7;
const sp_addr = 0x8;
const pc_addr = 0xa;

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

/**
 * Specific register read functions
 */
export function readRegisterA() {
  return readUint8(registers, a_addr);
}

export function readRegisterB() {
  return readUint8(registers, b_addr);
}

export function readRegisterC() {
  return readUint8(registers, c_addr);
}

export function readRegisterD() {
  return readUint8(registers, d_addr);
}

export function readRegisterE() {
  return readUint8(registers, e_addr);
}

export function readRegisterF() {
  return readUint8(registers, f_addr);
}

export function readRegisterH() {
  return readUint8(registers, h_addr);
}

export function readRegisterL() {
  return readUint8(registers, l_addr);
}

export function readRegisterSP() {
  return readUint16(registers, sp_addr);
}

export function readRegisterPC() {
  return readUint16(registers, pc_addr);
}

export function readRegisterAF() {
  return readUint16(registers, f_addr);
}

export function readRegisterBC() {
  return readUint16(registers, c_addr);
}

export function readRegisterDE() {
  return readUint16(registers, e_addr);
}

export function readRegisterHL() {
  return readUint16(registers, l_addr);
}

/**
 * Specific register write functions
 */
export function writeRegisterA(value: number) {
  writeUint8(registers, a_addr, value);
}

export function writeRegisterB(value: number) {
  writeUint8(registers, b_addr, value);
}

export function writeRegisterC(value: number) {
  writeUint8(registers, c_addr, value);
}

export function writeRegisterD(value: number) {
  writeUint8(registers, d_addr, value);
}

export function writeRegisterE(value: number) {
  writeUint8(registers, e_addr, value);
}

export function writeRegisterF(value: number) {
  writeUint8(registers, f_addr, value);
}

export function writeRegisterH(value: number) {
  writeUint8(registers, h_addr, value);
}

export function writeRegisterL(value: number) {
  writeUint8(registers, l_addr, value);
}

export function writeRegisterSP(value: number) {
  writeUint16(registers, sp_addr, value);
}

export function writeRegisterPC(value: number) {
  writeUint16(registers, pc_addr, value);
}

export function writeRegisterAF(value: number) {
  writeUint16(registers, f_addr, value);
}

export function writeRegisterBC(value: number) {
  writeUint16(registers, c_addr, value);
}

export function writeRegisterDE(value: number) {
  writeUint16(registers, e_addr, value);
}

export function writeRegisterHL(value: number) {
  writeUint16(registers, l_addr, value);
}

/**
 * Generic register write function
 * @param register
 * @param value
 */
export function writeRegister(register: Register, value: number) {
  switch (register) {
    case regA:
      writeRegisterA(value);
      break;
    case regB:
      writeRegisterB(value);
      break;
    case regC:
      writeRegisterC(value);
      break;
    case regD:
      writeRegisterD(value);
      break;
    case regE:
      writeRegisterE(value);
      break;
    case regF:
      writeRegisterF(value);
      break;
    case regH:
      writeRegisterH(value);
      break;
    case regL:
      writeRegisterL(value);
      break;
    case regSP:
      writeRegisterSP(value);
      break;
    case regPC:
      writeRegisterPC(value);
      break;
    case regAF:
      writeRegisterAF(value);
      break;
    case regBC:
      writeRegisterBC(value);
      break;
    case regDE:
      writeRegisterDE(value);
      break;
    case regHL:
      writeRegisterHL(value);
      break;
    default:
      throw new Error('Invalid register');
  }
}

/**
 * Generic register read function
 * @param register
 */
export function readRegister(register: Register) {
  switch (register) {
    case regA:
      return readRegisterA();
    case regB:
      return readRegisterB();
    case regC:
      return readRegisterC();
    case regD:
      return readRegisterD();
    case regE:
      return readRegisterE();
    case regF:
      return readRegisterF();
    case regH:
      return readRegisterH();
    case regL:
      return readRegisterL();
    case regSP:
      return readRegisterSP();
    case regPC:
      return readRegisterPC();
    case regAF:
      return readRegisterAF();
    case regBC:
      return readRegisterBC();
    case regDE:
      return readRegisterDE();
    case regHL:
      return readRegisterHL();
    default:
      throw new Error('Invalid register');
  }
}

//@ts-ignore
window.registers = registers;
// @ts-ignore
window._registersMap = registersMap;
// @ts-ignore
window._registers = registers;
