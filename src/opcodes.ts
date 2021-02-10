import type { OperandTypes, OpcodeToken } from './types.d';

function generateOpcodeToken(
  instruction: string,
  length: number,
  operandType: OperandTypes | null = null
): OpcodeToken {
  return {
    instruction,
    length,
    operand: operandType,
  };
}

const opcodes: (OpcodeToken | undefined)[] = new Array(0x100);
const cbOpcodes: (OpcodeToken | undefined)[] = new Array(0x100);

opcodes[0x00] = generateOpcodeToken('NOP', 1);
opcodes[0x04] = generateOpcodeToken('INC B', 1);
opcodes[0x05] = generateOpcodeToken('DEC B', 1);
opcodes[0x06] = generateOpcodeToken('LD B,${OPERAND}', 2, 'd8');
opcodes[0x08] = generateOpcodeToken('LD (${OPERAND}),SP', 3, 'a16');
opcodes[0x0c] = generateOpcodeToken('INC C', 1);
opcodes[0x0d] = generateOpcodeToken('DEC C', 1);
opcodes[0x0e] = generateOpcodeToken('LD C,${OPERAND}', 2, 'd8');
opcodes[0x11] = generateOpcodeToken('LD DE,${OPERAND}', 3, 'd16');
opcodes[0x13] = generateOpcodeToken('INC DE', 1);
opcodes[0x15] = generateOpcodeToken('DEC D', 1);
opcodes[0x16] = generateOpcodeToken('LD D,${OPERAND}', 2, 'd8');
opcodes[0x17] = generateOpcodeToken('RLA', 1);
opcodes[0x18] = generateOpcodeToken('JR ${OPERAND}', 2, 'r8');
opcodes[0x1a] = generateOpcodeToken('LD A,(DE)', 1);
opcodes[0x1d] = generateOpcodeToken('DEC E', 1);
opcodes[0x1e] = generateOpcodeToken('LD E,${OPERAND}', 2, 'd8');
opcodes[0x20] = generateOpcodeToken('JR NZ,SIGNED ${OPERAND}', 2, 'r8');
opcodes[0x21] = generateOpcodeToken('LD HL,${OPERAND}', 3, 'd16');
opcodes[0x22] = generateOpcodeToken('LD (HL+),A', 1);
opcodes[0x23] = generateOpcodeToken('INC HL', 1);
opcodes[0x24] = generateOpcodeToken('INC H', 1);
opcodes[0x28] = generateOpcodeToken('JR Z,${OPERAND}', 2, 'r8');
opcodes[0x2e] = generateOpcodeToken('LD L,${OPERAND}', 2, 'd8');
opcodes[0x31] = generateOpcodeToken('LD SP,${OPERAND}', 3, 'd16');
opcodes[0x32] = generateOpcodeToken('LD (HL-),A', 1);
opcodes[0x3d] = generateOpcodeToken('DEC A', 1);
opcodes[0x3e] = generateOpcodeToken('LD A,${OPERAND}', 2, 'd8');
opcodes[0x4f] = generateOpcodeToken('SUB A,L', 1);
opcodes[0x57] = generateOpcodeToken('LD D,A', 1);
opcodes[0x67] = generateOpcodeToken('LD H,A', 1);
opcodes[0x77] = generateOpcodeToken('LD (HL),A', 1);
opcodes[0x7b] = generateOpcodeToken('LD A,E', 1);
opcodes[0x7c] = generateOpcodeToken('LD A,H', 1);
opcodes[0x90] = generateOpcodeToken('SUB A,B', 1);
opcodes[0xaf] = generateOpcodeToken('XOR A', 1);
opcodes[0xc1] = generateOpcodeToken('POP BC', 1);
opcodes[0xc5] = generateOpcodeToken('PUSH BC', 1);
opcodes[0xc9] = generateOpcodeToken('RET', 1);
opcodes[0xcb] = generateOpcodeToken('PREFIX CB', 1);
opcodes[0xcd] = generateOpcodeToken('CALL ${OPERAND}', 3, 'a16');
opcodes[0xce] = generateOpcodeToken('ADC A,${OPERAND}', 2, 'd8');
opcodes[0xe0] = generateOpcodeToken('LD ($FF00+${OPERAND}),A', 2, 'a8');
opcodes[0xe2] = generateOpcodeToken('LD (FF00+C),A', 1);
opcodes[0xea] = generateOpcodeToken('LD (${OPERAND}),A', 3, 'a16');
opcodes[0xf0] = generateOpcodeToken('LD A,($FF00+${OPERAND})', 2, 'a8');
opcodes[0xf9] = generateOpcodeToken('LD SP,HL', 1);
opcodes[0xfe] = generateOpcodeToken('CP ${OPERAND}', 2, 'd8');

cbOpcodes[0x11] = generateOpcodeToken('RL C', 2);
cbOpcodes[0x7c] = generateOpcodeToken('BIT 7,H', 2);

export { opcodes, cbOpcodes };
