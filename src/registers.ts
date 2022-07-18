import { createMemory } from 'factories/create-memory';
import { Register, SingleRegister } from 'types';

export const regA = 'A';
export const regB = 'B';
export const regC = 'C';
export const regD = 'D';
export const regE = 'E';
export const regF = 'F';
export const regH = 'H';
export const regL = 'L';
export const regSP = 'SP'; // Stack Pointer
export const regPC = 'PC'; // Program Counter

export const regAF = 'AF';
export const regBC = 'BC';
export const regDE = 'DE';
export const regHL = 'HL';

export type RegisterToken = { name: SingleRegister; bits: 8 | 16; initialValue: number };

//prettier-ignore
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
const registerUint8Tokens: RegisterToken[] = [
  {name: regF, bits: 8, initialValue: 0x00}, {name: regA, bits: 8, initialValue: 0x01},
  {name: regC, bits: 8, initialValue: 0x13}, {name: regB, bits: 8, initialValue: 0x00},
  {name: regE, bits: 8, initialValue: 0xd8}, {name: regD, bits: 8, initialValue: 0x00},
  {name: regL, bits: 8, initialValue: 0x4d}, {name: regH, bits: 8, initialValue: 0x01},
]

const registerUint16Tokens: RegisterToken[] = [
  { name: regSP, bits: 16, initialValue: 0xfffe },
  { name: regPC, bits: 16, initialValue: 0x0100 },
];

const registerTokens: RegisterToken[] = [...registerUint8Tokens, ...registerUint16Tokens];

const registersMap = registerTokens.reduce((map, token, i, tokens) => {
  const previousToken = tokens[i - 1];

  // each i corresponds to a byte position in the registers memory
  // if the previous register is more than 1 byte we need to adjust the position of the current
  // register
  if (!previousToken) {
    map[token.name] = i;
  } else {
    if (previousToken.bits === 8) {
      map[token.name] = i;
    } else {
      map[token.name] = i - 1 + previousToken.bits / 8;
    }
  }

  return map;
}, {});

const registers = createMemory(
  registerTokens.reduce((size, token) => {
    return size + token.bits / 8;
  }, 0)
);

registerTokens.forEach((token) => {
  if (token.bits === 8) {
    registers.writeUint8(registersMap[token.name], token.initialValue);
  } else {
    registers.writeUint16(registersMap[token.name], token.initialValue);
  }
});

function dumpHumanReadableRegisters() {
  return registerTokens.reduce((acc, token) => {
    if (token.bits === 8) {
      acc[token.name] = registers.readUint8(registersMap[token.name]);
    } else {
      acc[token.name] = registers.readUint16(registersMap[token.name]);
    }

    return acc;
  }, {});
}

export function setRegisterValue(register: Register, value: number) {
  switch (register) {
    case regA:
    case regB:
    case regC:
    case regD:
    case regE:
    case regF:
    case regH:
    case regL:
      registers.writeUint8(registersMap[register], value);
      break;
    case regSP:
    case regPC:
      registers.writeUint16(registersMap[register], value);
      break;
    case regAF:
      registers.writeUint16(registersMap[regF], value);
      break;
    case regBC:
      registers.writeUint16(registersMap[regC], value);
      break;
    case regDE:
      registers.writeUint16(registersMap[regE], value);
      break;
    case regHL:
      registers.writeUint16(registersMap[regL], value);
      break;
    default:
      throw new Error('Invalid register');
  }
}

export function getRegisterValue(register: Register) {
  switch (register) {
    case regA:
    case regB:
    case regC:
    case regD:
    case regE:
    case regF:
    case regH:
    case regL:
      return registers.readUint8(registersMap[register]);
    case regSP:
    case regPC:
      return registers.readUint16(registersMap[register]);
    case regAF:
      return registers.readUint16(registersMap[regF]);
    case regBC:
      return registers.readUint16(registersMap[regC]);
    case regDE:
      return registers.readUint16(registersMap[regE]);
    case regHL:
      return registers.readUint16(registersMap[regL]);
    default:
      throw new Error('Invalid register');
  }
}

//@ts-ignore
window.registers = registers;
// @ts-ignore
window._registersMap = registersMap;
// @ts-ignore
window.dumpRegisters = dumpHumanReadableRegisters;
// @ts-ignore
window._registers = registers;
