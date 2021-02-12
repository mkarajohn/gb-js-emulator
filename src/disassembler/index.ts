import { cbPrefixedOpcodes, opcodes } from 'opcodes';
import type { OpcodeToken, Operands } from 'types.d';
import { convertHexStringToDecimalNumber, convertNumberToHexString, zeroPad } from 'utils';
import type { DisassembledInstructionToken } from './types.d';

function replaceOperandTypeWithValue(operand: Operands, bytecode: Uint8Array, index: number) {
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

  const { mnemonic, operands } = opcodeToken;
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
      const opcodeToken = opcodes[opcode];

      if (!opcodeToken) {
        disassembledCode.push(generateDisassembledInstructionToken(opcodeToken, bytecode, i));
        i++;
      } else {
        switch (opcode) {
          // opcode 0xcb references opcodesDEPRECATED from the CB opcode dictionary so it needs special handling
          case convertHexStringToDecimalNumber('0xcb'): {
            const referencedObOpcodeToken = cbPrefixedOpcodes[bytecode[i + opcodeToken.bytes]];
            disassembledCode.push(
              generateDisassembledInstructionToken(referencedObOpcodeToken, bytecode, i)
            );
            if (referencedObOpcodeToken) {
              i += referencedObOpcodeToken.bytes;
            } else {
              i += opcodeToken.bytes;
            }
            break;
          }
          default:
            disassembledCode.push(generateDisassembledInstructionToken(opcodeToken, bytecode, i));
            i += opcodeToken.bytes;
        }
      }
    }
  }

  return disassembledCode;
}
