import { cbInstructions } from 'cb-instructions';
import { readUint8 } from 'cpu/read';
import {
  readRegister,
  readRegisterA,
  readRegisterF,
  readRegisterHL,
  readRegisterPC,
  registerNames,
  writeRegister,
  writeRegisterA,
  writeRegisterF,
  writeRegisterHL,
  writeRegisterPC,
} from 'cpu/registers';
import { writeUint8 } from 'cpu/write';
import { instructionSet } from 'instruction-set';
import { memory } from 'memory';
import { InstructionToken, Register } from 'types';
import { convertNumberToHexString, signedOffset } from 'utils';

let index = 0;

function logInstruction(name, instructionToken: InstructionToken) {
  return;
  console.log(
    index + ': ' + convertNumberToHexString(instructionToken.opcode) + ' ' + name,
    instructionToken
  );
  index++;
}

function nop() {
  logInstruction('NOP', instructionSet[0x00]);
  writeRegisterPC(readRegisterPC() + 1);

  return 4;
}

function ld8Immediate(instructionToken: InstructionToken) {
  const { operands, cycles, bytes } = instructionToken;
  const [destination, source] = operands;
  const { regA, regB, regC, regD, regE, regF, regH, regL } = registerNames;

  switch (source.name) {
    case regA:
    case regB:
    case regC:
    case regD:
    case regE:
    case regF:
    case regH:
    case regL:
      // Register to register
      return function () {
        logInstruction('LD8IM', instructionToken);
        const PC = readRegisterPC();
        const registerValue = readRegister(source.name as Register);

        writeRegister(destination.name as Register, registerValue);
        writeRegisterPC(PC + bytes);

        return cycles[0];
      };
    default:
      // Value to register
      return function () {
        logInstruction('LD8IM', instructionToken);
        const PC = readRegisterPC();
        const memoryValue = readUint8(memory, PC + 1);

        writeRegister(destination.name as Register, memoryValue);
        writeRegisterPC(PC + bytes);

        return cycles[0];
      };
  }
}

function ld16Immediate(instructionToken: InstructionToken) {
  const { operands, cycles, bytes } = instructionToken;
  const [destination, source] = operands;
  const { regHL } = registerNames;

  switch (source.name) {
    case regHL:
      // HL to SP - OP 0xf9
      return function () {
        logInstruction('LD16IM', instructionToken);
        const PC = readRegisterPC();
        const registerValue = readRegister(source.name as Register);

        writeRegister(destination.name as Register, registerValue);
        writeRegisterPC(PC + bytes);

        return cycles[0];
      };
    default:
      // Value to register
      return function () {
        logInstruction('LD16IM', instructionToken);
        const PC = readRegisterPC();
        const lowByte = readUint8(memory, PC + 1);
        const highByte = readUint8(memory, PC + 2);

        writeRegister(destination.name as Register, lowByte | (highByte << 8));
        writeRegisterPC(PC + bytes);

        return cycles[0];
      };
  }
}

function ldd(instructionToken: InstructionToken) {
  const { operands, cycles, bytes } = instructionToken;
  const [destination, source] = operands;
  const { regA, regHL } = registerNames;

  // ld a, (hl-)
  if (destination.name === regA && source.name === regHL) {
    return function () {
      logInstruction('LDD', instructionToken);
      const PC = readRegisterPC();
      const HL = readRegisterHL();
      const memoryValue = readUint8(memory, HL);

      writeRegisterA(memoryValue);
      writeRegisterHL(HL - 1);
      writeRegisterPC(PC + bytes);

      return cycles[0];
    };
  }

  // ld (hl-) a
  return function () {
    logInstruction('LDD', instructionToken);
    const PC = readRegisterPC();
    const HL = readRegisterHL();
    const A = readRegisterA();

    writeUint8(memory, HL, A);

    writeRegisterHL(HL - 1);
    writeRegisterPC(PC + bytes);

    return cycles[0];
  };
}

function xorImmediate(instructionToken: InstructionToken) {
  const { operands, cycles, bytes } = instructionToken;
  const [source] = operands;
  const { regA, regB, regC, regD, regE, regF, regH, regL } = registerNames;

  switch (source.name) {
    case regA:
    case regB:
    case regC:
    case regD:
    case regE:
    case regF:
    case regH:
    case regL:
      // Register to register
      return function () {
        logInstruction('XORIM', instructionToken);
        const PC = readRegisterPC();
        const A = readRegisterA();
        const registerValue = readRegister(source.name as Register);
        const XORResult = A ^ registerValue;

        writeRegisterA(XORResult);
        // update Z flag and reset the rest of the flags
        writeRegisterF(XORResult === 0 ? 0b10000000 : 0b00000000);
        writeRegisterPC(PC + bytes);

        return cycles[0];
      };
    default:
      // Value to register
      return function () {
        logInstruction('XORIM', instructionToken);
        const PC = readRegisterPC();
        const A = readRegisterA();
        const memoryValue = readUint8(memory, PC + 1);

        writeRegisterA(A ^ memoryValue);
        writeRegisterPC(PC + bytes);

        return cycles[0];
      };
  }
}

function cb() {
  return cbInstructions[readUint8(memory, readRegister(registerNames.regPC) + 1)]();
}

function jrnz() {
  const instructionToken = instructionSet[0x20];
  const { cycles, bytes } = instructionToken;
  const PC = readRegisterPC();
  const F = readRegisterF();
  // 1 means we have a 0, 0 means we do not have a zero
  const ZflagCheckBit = (F & 0b10000000) >> 7;

  switch (ZflagCheckBit) {
    case 0:
      // not zero
      logInstruction('JRNZ', instructionToken);
      const memoryValue = readUint8(memory, PC + 1);

      writeRegisterPC(PC + bytes + signedOffset(memoryValue));

      return cycles[0];
    default:
      // zero
      logInstruction('JRNZ', instructionToken);
      writeRegisterPC(PC + bytes);

      return cycles[1];
  }
}

function jp() {
  const instructionToken = instructionSet[0xc3];
  const { cycles } = instructionToken;
  const PC = readRegisterPC();
  const lowByte = readUint8(memory, PC + 1);
  const highByte = readUint8(memory, PC + 2);

  writeRegisterPC(lowByte | (highByte << 8));

  return cycles[0];
}

export const instructions: (() => number)[] = new Array(0x100);

for (let i = 0; i < instructions.length; i++) {
  instructions[i] = nop;
}

instructions[0x00] = nop;
instructions[0x01] = ld16Immediate(instructionSet[0x01]);
instructions[0x06] = ld8Immediate(instructionSet[0x06]);
instructions[0x0e] = ld8Immediate(instructionSet[0x0e]);

instructions[0x11] = ld16Immediate(instructionSet[0x11]);
instructions[0x16] = ld8Immediate(instructionSet[0x16]);
instructions[0x1e] = ld8Immediate(instructionSet[0x1e]);

instructions[0x20] = jrnz;
instructions[0x21] = ld16Immediate(instructionSet[0x21]);
instructions[0x26] = ld8Immediate(instructionSet[0x26]);
instructions[0x2e] = ld8Immediate(instructionSet[0x2e]);

instructions[0x31] = ld16Immediate(instructionSet[0x31]);
instructions[0x32] = ldd(instructionSet[0x32]);
instructions[0x36] = ld8Immediate(instructionSet[0x36]);
instructions[0x3a] = ldd(instructionSet[0x3a]);
instructions[0x3e] = ld8Immediate(instructionSet[0x3e]);

instructions[0x40] = ld8Immediate(instructionSet[0x40]);
instructions[0x41] = ld8Immediate(instructionSet[0x41]);
instructions[0x42] = ld8Immediate(instructionSet[0x42]);
instructions[0x43] = ld8Immediate(instructionSet[0x43]);
instructions[0x44] = ld8Immediate(instructionSet[0x44]);
instructions[0x45] = ld8Immediate(instructionSet[0x45]);
instructions[0x47] = ld8Immediate(instructionSet[0x47]);
instructions[0x48] = ld8Immediate(instructionSet[0x48]);
instructions[0x49] = ld8Immediate(instructionSet[0x49]);
instructions[0x4a] = ld8Immediate(instructionSet[0x4a]);
instructions[0x4b] = ld8Immediate(instructionSet[0x4b]);
instructions[0x4c] = ld8Immediate(instructionSet[0x4c]);
instructions[0x4d] = ld8Immediate(instructionSet[0x4d]);
instructions[0x4f] = ld8Immediate(instructionSet[0x4f]);

instructions[0x50] = ld8Immediate(instructionSet[0x50]);
instructions[0x51] = ld8Immediate(instructionSet[0x51]);
instructions[0x52] = ld8Immediate(instructionSet[0x52]);
instructions[0x53] = ld8Immediate(instructionSet[0x53]);
instructions[0x54] = ld8Immediate(instructionSet[0x54]);
instructions[0x55] = ld8Immediate(instructionSet[0x55]);
instructions[0x57] = ld8Immediate(instructionSet[0x57]);
instructions[0x58] = ld8Immediate(instructionSet[0x58]);
instructions[0x59] = ld8Immediate(instructionSet[0x59]);
instructions[0x5a] = ld8Immediate(instructionSet[0x5a]);
instructions[0x5b] = ld8Immediate(instructionSet[0x5b]);
instructions[0x5c] = ld8Immediate(instructionSet[0x5c]);
instructions[0x5d] = ld8Immediate(instructionSet[0x5d]);
instructions[0x5f] = ld8Immediate(instructionSet[0x5f]);

instructions[0x60] = ld8Immediate(instructionSet[0x60]);
instructions[0x61] = ld8Immediate(instructionSet[0x61]);
instructions[0x62] = ld8Immediate(instructionSet[0x62]);
instructions[0x63] = ld8Immediate(instructionSet[0x63]);
instructions[0x64] = ld8Immediate(instructionSet[0x64]);
instructions[0x65] = ld8Immediate(instructionSet[0x65]);
instructions[0x67] = ld8Immediate(instructionSet[0x67]);
instructions[0x68] = ld8Immediate(instructionSet[0x68]);
instructions[0x69] = ld8Immediate(instructionSet[0x69]);
instructions[0x6a] = ld8Immediate(instructionSet[0x6a]);
instructions[0x6b] = ld8Immediate(instructionSet[0x6b]);
instructions[0x6c] = ld8Immediate(instructionSet[0x6c]);
instructions[0x6d] = ld8Immediate(instructionSet[0x6d]);
instructions[0x6f] = ld8Immediate(instructionSet[0x6f]);

instructions[0x78] = ld8Immediate(instructionSet[0x78]);
instructions[0x79] = ld8Immediate(instructionSet[0x79]);
instructions[0x7a] = ld8Immediate(instructionSet[0x7a]);
instructions[0x7b] = ld8Immediate(instructionSet[0x7b]);
instructions[0x7c] = ld8Immediate(instructionSet[0x7c]);
instructions[0x7d] = ld8Immediate(instructionSet[0x7d]);
instructions[0x7f] = ld8Immediate(instructionSet[0x7f]);

instructions[0xa8] = xorImmediate(instructionSet[0xa8]);
instructions[0xa9] = xorImmediate(instructionSet[0xa9]);
instructions[0xaa] = xorImmediate(instructionSet[0xaa]);
instructions[0xab] = xorImmediate(instructionSet[0xab]);
instructions[0xac] = xorImmediate(instructionSet[0xac]);
instructions[0xad] = xorImmediate(instructionSet[0xad]);
instructions[0xaf] = xorImmediate(instructionSet[0xaf]);

instructions[0xc3] = jp;
instructions[0xcb] = cb;

instructions[0xee] = xorImmediate(instructionSet[0xee]);

instructions[0xf9] = ld8Immediate(instructionSet[0xf9]);

//@ts-ignore
window.instructions = instructions;
