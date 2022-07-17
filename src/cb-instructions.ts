import { cbPrefixedOpcodes, instructionSet } from 'instruction-set';
import { readMemAddr } from 'memory';
import {
  getRegisterValue,
  regA,
  regB,
  regC,
  regD,
  regE,
  regF,
  regH,
  regL,
  regPC,
  setRegisterValue,
} from 'registers';
import { InstructionToken } from 'types';

let index = 0;

function logInstruction(name, instructionToken) {
  // console.log(index + ': ' + convertNumberToHexString(instructionToken.index) + ' ' + name, instructionToken);
  index++;
}

function nop() {
  logInstruction('NOP', instructionSet[0x00]);
  setRegisterValue(regPC, getRegisterValue(regPC) + 1);

  return 4;
}

function bit(instructionToken: InstructionToken) {
  const { operands, cycles, bytes } = instructionToken;
  const [bit, register] = operands;

  const checkBit = 1 << (bit.name as number);

  function setFlags(value) {
    const currentRegFValue = getRegisterValue(regF);

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
        const registerValue = getRegisterValue(register.name);

        // update Z flag, reset flag N, set flag H
        setRegisterValue(regF, setFlags(registerValue));

        setRegisterValue(regPC, getRegisterValue(regPC) + bytes);

        return cycles[0];
      };

    default:
      // register HL
      return function () {
        logInstruction('BIT', instructionToken);
        const registerValue = readMemAddr(getRegisterValue(register.name));

        // update Z flag, reset flag N, set flag H
        setRegisterValue(regF, setFlags(registerValue));

        setRegisterValue(regPC, getRegisterValue(regPC) + bytes);

        return cycles[0];
      };
  }
}

export const cbInstructions: (() => number)[] = new Array(0x100);

for (let i = 0; i < cbInstructions.length; i++) {
  cbInstructions[i] = nop;
}

cbInstructions[0x7c] = bit(cbPrefixedOpcodes[0x7c]);

//@ts-ignore
window.cbInstructions = cbInstructions;
