import {
  convertHexStringToDecimalNumber,
  convertNumberToHexString,
  zeroPadHalfByte,
} from './utils';
import { opcodes, cbOpcodes } from './opcodes';
import type { OpcodeToken } from './opcodes';

function generateDisassembledInstruction(
  opcodeToken: OpcodeToken,
  bytecode: Uint8Array,
  index: number
) {
  switch (opcodeToken.operand) {
    case 'A':
      return `$${zeroPadHalfByte(index)}    ${opcodeToken.instruction},${opcodeToken.operand}\n`;
    case 'H':
      return `$${zeroPadHalfByte(index)}    ${opcodeToken.instruction},${opcodeToken.operand}\n`;
    case 'd16':
      return `$${zeroPadHalfByte(index)}    ${opcodeToken.instruction},$${convertNumberToHexString(
        bytecode[index + 2]
      )}${convertNumberToHexString(bytecode[index + 1])}\n`;
    default:
      return `$${zeroPadHalfByte(index)}    ${opcodeToken.instruction} \n`;
  }
}

function disassemble(bytecode: Uint8Array) {
  let disassembledCode = '';

  for (let i = 0; i < bytecode.length; ) {
    const opcode = bytecode[i];

    switch (opcode) {
      case convertHexStringToDecimalNumber('0x00'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode += generateDisassembledInstruction(opcodeToken, bytecode, i);
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0x21'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode += generateDisassembledInstruction(opcodeToken, bytecode, i);
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0x31'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode += generateDisassembledInstruction(opcodeToken, bytecode, i);
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0x32'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode += generateDisassembledInstruction(opcodeToken, bytecode, i);
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0xaf'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode += generateDisassembledInstruction(opcodeToken, bytecode, i);
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0xcb'): {
        // opcode 0xcb references opcodes from the CB opcode table
        const opcodeToken = opcodes[opcode];
        const referencedObOpcodeToken = cbOpcodes[bytecode[i + opcodeToken.length]];
        if (referencedObOpcodeToken) {
          disassembledCode += generateDisassembledInstruction(referencedObOpcodeToken, bytecode, i);
        } else {
          disassembledCode += `$${zeroPadHalfByte(i)}    Unknown opcode \n`;
        }
        i += opcodeToken.length;
        break;
      }
      default:
        disassembledCode += `$${zeroPadHalfByte(i)}    Unknown opcode \n`;
        i++;
    }
  }

  return disassembledCode;
}

export default disassemble;
