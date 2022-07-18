import { cbInstructions } from 'cb-instructions';
import { instructionSet } from 'instruction-set';
import { memory } from 'memory';
import {
  getRegisterValue,
  regA,
  regB,
  regC,
  regD,
  regE,
  regF,
  regH,
  regHL,
  regL,
  regPC,
  setRegisterValue,
} from 'registers';
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
  setRegisterValue(regPC, getRegisterValue(regPC) + 1);

  return 4;
}

function ld8Immediate(instructionToken: InstructionToken) {
  const { operands, cycles, bytes } = instructionToken;
  const [destination, source] = operands;

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
        const PC = getRegisterValue(regPC);
        const registerValue = getRegisterValue(source.name as Register);

        setRegisterValue(destination.name as Register, registerValue);
        setRegisterValue(regPC, PC + bytes);

        return cycles[0];
      };
    default:
      // Value to register
      return function () {
        logInstruction('LD8IM', instructionToken);
        const PC = getRegisterValue(regPC);
        const memoryValue = memory.readUint8(PC + 1);

        setRegisterValue(destination.name as Register, memoryValue);
        setRegisterValue(regPC, PC + bytes);

        return cycles[0];
      };
  }
}

function ld16Immediate(instructionToken: InstructionToken) {
  const { operands, cycles, bytes } = instructionToken;
  const [destination, source] = operands;

  switch (source.name) {
    case regHL:
      // HL to SP - OP 0xf9
      return function () {
        logInstruction('LD16IM', instructionToken);
        const PC = getRegisterValue(regPC);
        const registerValue = getRegisterValue(source.name as Register);

        setRegisterValue(destination.name as Register, registerValue);
        setRegisterValue(regPC, PC + bytes);

        return cycles[0];
      };
    default:
      // Value to register
      return function () {
        logInstruction('LD16IM', instructionToken);
        const PC = getRegisterValue(regPC);
        const lowByte = memory.readUint8(PC + 1);
        const highByte = memory.readUint8(PC + 2);

        setRegisterValue(destination.name as Register, lowByte | (highByte << 8));
        setRegisterValue(regPC, PC + bytes);

        return cycles[0];
      };
  }
}

function ldd(instructionToken: InstructionToken) {
  const { operands, cycles, bytes } = instructionToken;
  const [destination, source] = operands;

  // ld a, (hl-)
  if (destination.name === regA && source.name === regHL) {
    return function () {
      logInstruction('LDD', instructionToken);
      const PC = getRegisterValue(regPC);
      const HL = getRegisterValue(regHL);
      const memoryValue = memory.readUint8(HL);

      setRegisterValue(regA, memoryValue);
      setRegisterValue(regHL, HL - 1);
      setRegisterValue(regPC, PC + bytes);

      return cycles[0];
    };
  }

  // ld (hl-) a
  return function () {
    logInstruction('LDD', instructionToken);
    const PC = getRegisterValue(regPC);
    const HL = getRegisterValue(regHL);
    const A = getRegisterValue(regA);

    memory.writeUint8(HL, A);

    setRegisterValue(regHL, HL - 1);
    setRegisterValue(regPC, PC + bytes);

    return cycles[0];
  };
}

function xorImmediate(instructionToken: InstructionToken) {
  const { operands, cycles, bytes } = instructionToken;
  const [source] = operands;

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
        const PC = getRegisterValue(regPC);
        const A = getRegisterValue(regA);
        const registerValue = getRegisterValue(source.name as Register);
        const XORResult = A ^ registerValue;

        setRegisterValue(regA, XORResult);
        // update Z flag and reset the rest of the flags
        setRegisterValue(regF, XORResult === 0 ? 0b10000000 : 0b00000000);
        setRegisterValue(regPC, PC + bytes);

        return cycles[0];
      };
    default:
      // Value to register
      return function () {
        logInstruction('XORIM', instructionToken);
        const PC = getRegisterValue(regPC);
        const A = getRegisterValue(regA);
        const memoryValue = memory.readUint8(PC + 1);

        setRegisterValue(regA, A ^ memoryValue);
        setRegisterValue(regPC, PC + bytes);

        return cycles[0];
      };
  }
}

function cb() {
  return cbInstructions[memory.readUint8(getRegisterValue(regPC) + 1)]();
}

function jrnz() {
  const instructionToken = instructionSet[0x20];
  const { cycles, bytes } = instructionToken;
  const PC = getRegisterValue(regPC);
  const F = getRegisterValue(regF);
  // 1 means we have a 0, 0 means we do not have a zero
  const ZflagCheckBit = (F & 0b10000000) >> 7;

  switch (ZflagCheckBit) {
    case 0:
      // not zero
      logInstruction('JRNZ', instructionToken);
      const memoryValue = memory.readUint8(PC + 1);

      setRegisterValue(regPC, PC + bytes + signedOffset(memoryValue));

      return cycles[0];
    default:
      // zero
      logInstruction('JRNZ', instructionToken);
      setRegisterValue(regPC, PC + bytes);

      return cycles[1];
  }
}

function jp() {
  const instructionToken = instructionSet[0xc3];
  const { cycles } = instructionToken;
  const PC = getRegisterValue(regPC);
  const lowByte = memory.readUint8(PC + 1);
  const highByte = memory.readUint8(PC + 2);

  setRegisterValue(regPC, lowByte | (highByte << 8));

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
