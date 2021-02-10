import {
  convertHexStringToDecimalNumber,
  convertNumberToHexString,
  zeroPadHalfByte,
} from './utils';
import { opcodes, cbOpcodes } from './opcodes';
import type { OpcodeToken } from './opcodes';

type DisassembledInstructionToken = {
  position: string;
  code: string;
};

function generateDisassembledInstruction(
  opcodeToken: OpcodeToken,
  bytecode: Uint8Array,
  index: number
): DisassembledInstructionToken {
  switch (opcodeToken.operand) {
    case 'A':
      return {
        position: `$${zeroPadHalfByte(index)}`,
        code: `${opcodeToken.instruction},${opcodeToken.operand}`,
      };
    case 'H':
      return {
        position: `$${zeroPadHalfByte(index)}`,
        code: `${opcodeToken.instruction},${opcodeToken.operand}`,
      };
    case 'r8':
      return {
        position: `$${zeroPadHalfByte(index)}`,
        code: `${opcodeToken.instruction},signed 0x${convertNumberToHexString(
          bytecode[index + 1]
        )}`,
      };
    case 'd16':
      return {
        position: `$${zeroPadHalfByte(index)}`,
        code: `${opcodeToken.instruction},$${convertNumberToHexString(
          bytecode[index + 2]
        )}${convertNumberToHexString(bytecode[index + 1])}`,
      };
    default:
      return {
        position: `$${zeroPadHalfByte(index)}`,
        code: `${opcodeToken.instruction}`,
      };
  }
}

function disassemble(bytecode: Uint8Array) {
  debugger;
  const disassembledCode: DisassembledInstructionToken[] = [];

  for (let i = 0; i < bytecode.length; ) {
    const opcode = bytecode[i];

    switch (opcode) {
      case convertHexStringToDecimalNumber('0x00'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode.push(generateDisassembledInstruction(opcodeToken, bytecode, i));
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0x20'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode.push(generateDisassembledInstruction(opcodeToken, bytecode, i));
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0x21'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode.push(generateDisassembledInstruction(opcodeToken, bytecode, i));
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0x31'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode.push(generateDisassembledInstruction(opcodeToken, bytecode, i));
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0x32'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode.push(generateDisassembledInstruction(opcodeToken, bytecode, i));
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0xaf'): {
        const opcodeToken = opcodes[opcode];
        disassembledCode.push(generateDisassembledInstruction(opcodeToken, bytecode, i));
        i += opcodeToken.length;
        break;
      }
      case convertHexStringToDecimalNumber('0xcb'): {
        // opcode 0xcb references opcodes from the CB opcode table
        const opcodeToken = opcodes[opcode];
        const referencedObOpcodeToken = cbOpcodes[bytecode[i + opcodeToken.length]];
        if (referencedObOpcodeToken) {
          disassembledCode.push(
            generateDisassembledInstruction(referencedObOpcodeToken, bytecode, i)
          );
          i += referencedObOpcodeToken.length;
        } else {
          disassembledCode.push({
            position: `$${zeroPadHalfByte(i)}`,
            code: `Unknown opcode`,
          });
          i += opcodeToken.length;
        }
        break;
      }
      default:
        disassembledCode.push({
          position: `$${zeroPadHalfByte(i)}`,
          code: `Unknown opcode`,
        });
        i++;
    }
  }
  debugger;

  return disassembledCode;
}

export default disassemble;
