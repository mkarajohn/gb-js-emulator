import type { Flags, OperandTypes, OpcodeToken } from './types.d';

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

const opcodes: (OpcodeToken | undefined)[] = new Array(256);
const cbOpcodes: (OpcodeToken | undefined)[] = new Array(256);

opcodes[0x00] = generateOpcodeToken('NOP', 1, 4);
opcodes[0x0c] = generateOpcodeToken('INC C', 1, 1, {
  Z: 'depends',
  N: 'reset',
  H: 'depends',
});
opcodes[0x0e] = generateOpcodeToken('LD C,${OPERAND}', 2, 8, undefined, 'd8');
opcodes[0x11] = generateOpcodeToken('LD DE,${OPERAND}', 3, 12, undefined, 'd16');
opcodes[0x13] = generateOpcodeToken('INC DE', 1, 8);
opcodes[0x1a] = generateOpcodeToken('LD A,(DE)', 1, 8, undefined);
opcodes[0x20] = generateOpcodeToken(
  'JR NZ,SIGNED ${OPERAND}',
  2,
  { high: 12, low: 8 },
  undefined,
  'r8'
);
opcodes[0x21] = generateOpcodeToken('LD HL,${OPERAND}', 3, 12, undefined, 'd16');
opcodes[0x31] = generateOpcodeToken('LD SP,${OPERAND}', 3, 12, undefined, 'd16');
opcodes[0x32] = generateOpcodeToken('LD (HL-),A', 1, 8);
opcodes[0x3e] = generateOpcodeToken('LD A,${OPERAND}', 2, 8, undefined, 'd8');
opcodes[0x77] = generateOpcodeToken('LD (HL),A', 1, 8);
opcodes[0x7b] = generateOpcodeToken('LD A,E', 1, 4);
opcodes[0xaf] = generateOpcodeToken('XOR A', 1, 4, { Z: 'depends' });
opcodes[0xcb] = generateOpcodeToken('PREFIX CB', 1, 4);
opcodes[0xcd] = generateOpcodeToken('CALL ${OPERAND}', 3, 24, undefined, 'a16');
opcodes[0xe0] = generateOpcodeToken('LD ($FF00+${OPERAND}),A', 2, 12, undefined, 'a8');
opcodes[0xe2] = generateOpcodeToken('LD (C),A', 1, 8);
opcodes[0xfe] = generateOpcodeToken(
  'CP ${OPERAND}',
  2,
  8,
  { Z: 'depends', N: 'set', H: 'depends', C: 'depends' },
  'd8'
);

cbOpcodes[0x7c] = generateOpcodeToken('BIT 7,H', 2, 8, { Z: 'depends', N: 'reset', H: 'set' });

export { opcodes, cbOpcodes };
