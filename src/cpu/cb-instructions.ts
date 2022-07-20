import { readUint8 } from 'cpu/read';
import {
  readRegister,
  readRegisterF,
  readRegisterPC,
  registerNames,
  writeRegisterF,
  writeRegisterPC,
} from 'cpu/registers';
import { cbPrefixedInstructionSet, instructionSet } from 'instruction-set';
import { memory } from 'memory';
import { InstructionToken, Register } from 'types';

let index = 0;

function logInstruction(name, instructionToken) {
  // console.log(index + ': ' + convertNumberToHexString(instructionToken.index) + ' ' + name, instructionToken);
  index++;
}

function nop() {
  logInstruction('NOP', instructionSet[0x00]);
  writeRegisterPC(readRegisterPC() + 1);

  return 4;
}

function bit(instructionToken: InstructionToken) {
  const { operands, cycles, bytes } = instructionToken;
  const [bit, register] = operands;
  const { regA, regB, regC, regD, regE, regF, regH, regL } = registerNames;

  const checkBit = 1 << (bit.name as number);

  function setFlags(value) {
    const currentRegFValue = readRegisterF();

    const ZFlag = (value & checkBit) === 0 ? 0b10000000 : 0b00000000;
    const NFlag = 0b00000000;
    const HFlag = 0b00100000;
    const CFlag = currentRegFValue & 0b00011111;

    return ZFlag | NFlag | HFlag | CFlag;
  }

  switch (register.name) {
    case regA:
    case regB:
    case regC:
    case regD:
    case regE:
    case regF:
    case regH:
    case regL:
      return function () {
        logInstruction('BIT', instructionToken);
        const registerValue = readRegister(register.name as Register);

        // update Z flag, reset flag N, set flag H
        writeRegisterF(setFlags(registerValue));

        writeRegisterPC(readRegisterPC() + bytes);

        return cycles[0];
      };

    default:
      // register HL
      return function () {
        logInstruction('BIT', instructionToken);
        const registerValue = readUint8(memory, readRegister(register.name as Register));

        // update Z flag, reset flag N, set flag H
        writeRegisterF(setFlags(registerValue));

        writeRegisterPC(readRegisterPC() + bytes);

        return cycles[0];
      };
  }
}

export const cbInstructions: (() => number)[] = new Array(0x100);

for (let i = 0; i < cbInstructions.length; i++) {
  cbInstructions[i] = nop;
}

cbInstructions[0x7c] = bit(cbPrefixedInstructionSet[0x7c]);

//@ts-ignore
window.cbInstructions = cbInstructions;
