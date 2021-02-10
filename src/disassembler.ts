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

function generateDisassembledInstructionToken(
  opcodeToken: OpcodeToken | undefined,
  bytecode: Uint8Array,
  index: number
): DisassembledInstructionToken {
  if (!opcodeToken) {
    return {
      position: `$${zeroPadHalfByte(index)}`,
      code: `Unknown opcode`,
    };
  }

  switch (opcodeToken.operand) {
    case 'a8':
    case 'r8':
    case 'd8':
      return {
        position: `$${zeroPadHalfByte(index)}`,
        code: opcodeToken.instruction.replace(
          '${OPERAND}',
          `$${convertNumberToHexString(bytecode[index + 1])}`
        ),
      };
    case 'a16':
    case 'd16':
      return {
        position: `$${zeroPadHalfByte(index)}`,
        code: opcodeToken.instruction.replace(
          '${OPERAND}',
          `$${zeroPadHalfByte(
            convertNumberToHexString(bytecode[index + 2]) +
              convertNumberToHexString(bytecode[index + 1])
          )}`
        ),
      };
    default:
      return {
        position: `$${zeroPadHalfByte(index)}`,
        code: `${opcodeToken.instruction}`,
      };
  }
}

function disassemble(bytecode: Uint8Array) {
  const disassembledCode: DisassembledInstructionToken[] = [];

  for (let i = 0; i < bytecode.length; ) {
    const opcode = bytecode[i];
    const opcodeToken = opcodes[opcode];

    if (!opcodeToken) {
      disassembledCode.push(generateDisassembledInstructionToken(opcodeToken, bytecode, i));
      i++;
    } else {
      switch (opcode) {
        // opcode 0xcb references opcodes from the CB opcode table so it needs special handling
        case convertHexStringToDecimalNumber('0xcb'): {
          const referencedObOpcodeToken = cbOpcodes[bytecode[i + opcodeToken.length]];
          disassembledCode.push(
            generateDisassembledInstructionToken(referencedObOpcodeToken, bytecode, i)
          );
          if (referencedObOpcodeToken) {
            i += referencedObOpcodeToken.length;
          } else {
            i += opcodeToken.length;
          }
          break;
        }
        default:
          disassembledCode.push(generateDisassembledInstructionToken(opcodeToken, bytecode, i));
          i += opcodeToken.length;
      }
    }
  }

  return disassembledCode;
}

export default disassemble;
