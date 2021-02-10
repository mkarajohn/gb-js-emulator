import * as flags from './flags';

type Registers =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'H'
  | 'L'
  | 'AF'
  | 'BC'
  | 'DE'
  | 'HL'
  | 'SP'
  | 'PC';

type FlagState = 'flip' | 'set' | 'reset';

type Flags = {
  Z?: FlagState;
  N?: FlagState;
  H?: FlagState;
  C?: FlagState;
};

// d8  means immediate 8 bit data
// d16 means immediate 16 bit data
// a8  means 8 bit unsigned data, which are added to $FF00 in certain instructions (replacement for missing IN and OUT instructions)
// a16 means 16 bit address
// r8  means 8 bit signed data, which are added to program counter
type OperandTypes = 'd8' | 'd16' | 'a8' | 'a16' | 'r8' | Registers;

export type OpcodeToken = {
  instruction: string;
  length: number;
  cycles: { high: number; low: number };
  flags: Flags | null;
  operand: OperandTypes | null;
};

function generateOpcodeToken(
  instruction: string,
  length: number,
  cycles: number | { high: number; low: number },
  flags: Flags | null = null,
  operandType: OperandTypes | null = null
): OpcodeToken {
  return {
    instruction,
    length,
    cycles: typeof cycles === 'number' ? { high: cycles, low: cycles } : cycles,
    flags,
    operand: operandType,
  };
}

const opcodes: OpcodeToken[] = [];
const cbOpcodes: OpcodeToken[] = [];

opcodes[0x00] = generateOpcodeToken('NOP', 1, 4);
opcodes[0x20] = generateOpcodeToken('JR NZ', 2, { high: 12, low: 8 }, undefined, 'r8');
opcodes[0x21] = generateOpcodeToken('LD HL', 3, 12, undefined, 'd16');
opcodes[0x31] = generateOpcodeToken('LD SP', 3, 12, undefined, 'd16');
opcodes[0x32] = generateOpcodeToken('LD (HL-)', 1, 8, undefined, 'A');
opcodes[0xaf] = generateOpcodeToken('XOR A', 1, 4, { Z: 'flip' });
opcodes[0xcb] = generateOpcodeToken('PREFIX CB', 1, 4);

cbOpcodes[0x7c] = generateOpcodeToken('BIT 7', 2, 8, { Z: 'flip', N: 'reset', H: 'set' }, 'H');

export { opcodes, cbOpcodes };
