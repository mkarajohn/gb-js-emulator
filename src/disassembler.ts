import { convertHexStringToDecimalNumber, convertNumberToHexString, zeroPad } from './utils';
import { opcodes, cbOpcodes } from './opcodes';
import type { DisassembledInstructionToken, OpcodeToken } from './types.d';

function generateDisassembledInstructionToken(
  opcodeToken: OpcodeToken | undefined,
  bytecode: Uint8Array,
  index: number
): DisassembledInstructionToken {
  if (!opcodeToken) {
    return {
      position: `$${zeroPad(index, 4)}`,
      code: `Unknown opcode`,
    };
  }

  switch (opcodeToken.operand) {
    case 'a8':
    case 'r8':
    case 'd8':
      return {
        position: `$${zeroPad(index, 4)}`,
        code: opcodeToken.instruction.replace(
          '${OPERAND}',
          `$${zeroPad(convertNumberToHexString(bytecode[index + 1]), 2)}`
        ),
      };
    case 'a16':
    case 'd16':
      return {
        position: `$${zeroPad(index, 4)}`,
        code: opcodeToken.instruction.replace(
          '${OPERAND}',
          `$${zeroPad(convertNumberToHexString(bytecode[index + 2]), 2)}${zeroPad(
            convertNumberToHexString(bytecode[index + 1]),
            2
          )}`
        ),
      };
    default:
      return {
        position: `$${zeroPad(index, 4)}`,
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
