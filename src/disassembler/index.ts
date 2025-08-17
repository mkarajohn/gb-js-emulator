import { cbPrefixedInstructionSet, instructionSet } from '~/instruction-set';
import type { InstructionToken, Operand } from '~/types.ts';
import { convertHexStringToDecimalNumber, convertNumberToHexString, zeroPad } from '~/utils';
import type { DisassembledInstructionToken } from './types';

function replaceOperandTypeWithValue(operand: Operand, bytecode: Uint8Array, index: number) {
  switch (operand) {
    case 'a8':
    case 'r8':
    case 'd8':
      return `$${zeroPad(convertNumberToHexString(bytecode[index + 1]), 2)}`;
    case 'a16':
    case 'd16':
      return `$${zeroPad(convertNumberToHexString(bytecode[index + 2]), 2)}${zeroPad(
        convertNumberToHexString(bytecode[index + 1]),
        2
      )}`;
    default:
      return operand;
  }
}

function generateDisassembledInstructionToken(
  instructionToken: InstructionToken | undefined,
  bytecode: Uint8Array,
  index: number
): DisassembledInstructionToken {
  if (!instructionToken) {
    return {
      position: `$${zeroPad(index, 4)}`,
      code: `Unknown opcode`,
    };
  }

  const { mnemonic, operands } = instructionToken;
  const code = operands.reduce(function (acc, operand, i) {
    if (i === 0) {
      acc = acc + ' ';
    } else {
      acc = acc + ',';
    }

    const formattedOperand =
      replaceOperandTypeWithValue(operand.name, bytecode, index) +
      (operand.increment ? '+' : operand.decrement ? '-' : '');

    return acc + (operand.immediate ? formattedOperand : `(${formattedOperand})`);
  }, `${mnemonic}`);

  return {
    position: `$${zeroPad(index, 4)}`,
    code,
  };
}

export default function disassemble(bytecode: Uint8Array, dataRanges: [number, number][]) {
  const disassembledCode: DisassembledInstructionToken[] = [];

  for (let i = 0; i < bytecode.length; ) {
    const opcode = bytecode[i];
    let dataByte = false;

    for (let k = 0; k < dataRanges.length; k++) {
      if (i >= dataRanges[k][0] && i <= dataRanges[k][1]) {
        dataByte = true;
      }
    }

    if (dataByte) {
      disassembledCode.push({
        position: `$${zeroPad(i, 4)}`,
        code: `DATA: ${zeroPad(convertNumberToHexString(opcode), 2)}`,
      });
      i++;
    } else {
      const instructionToken = instructionSet[opcode];

      if (!instructionToken) {
        disassembledCode.push(generateDisassembledInstructionToken(instructionToken, bytecode, i));
        i++;
      } else {
        switch (opcode) {
          // opcode 0xcb references opcodesDEPRECATED from the CB opcode dictionary so it needs special handling
          case convertHexStringToDecimalNumber('0xcb'): {
            const referencedObOpcodeToken =
              cbPrefixedInstructionSet[bytecode[i + instructionToken.bytes]];
            disassembledCode.push(
              generateDisassembledInstructionToken(referencedObOpcodeToken, bytecode, i)
            );
            if (referencedObOpcodeToken) {
              i += referencedObOpcodeToken.bytes;
            } else {
              i += instructionToken.bytes;
            }
            break;
          }
          default:
            disassembledCode.push(
              generateDisassembledInstructionToken(instructionToken, bytecode, i)
            );
            i += instructionToken.bytes;
        }
      }
    }
  }

  return disassembledCode;
}
