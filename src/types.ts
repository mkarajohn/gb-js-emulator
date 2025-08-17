export type SingleRegister = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'L' | 'SP' | 'PC';

export type RegisterPair = 'AF' | 'BC' | 'DE' | 'HL';

export type Register = SingleRegister | RegisterPair;

// d8  means immediate 8 bit data
// d16 means immediate 16 bit data
// a8  means 8 bit unsigned data, which are added to $FF00 in certain instructions (replacement for missing IN and OUT instructions)
// a16 means 16 bit address
// r8  means 8 bit signed data, which are added to program counter
export type OperandTypes = 'd8' | 'd16' | 'a8' | 'a16' | 'r8';

export type FlagState = '-' | '0' | '1';

export type Flags = {
  Z: 'Z' | FlagState;
  N: 'N' | FlagState;
  H: 'H' | FlagState;
  C: 'C' | FlagState;
};

export type Operand =
  | Register
  | OperandTypes
  | 'Ignored'
  | 'Z'
  | 'NZ'
  | 'NC'
  | '00H'
  | '08H'
  | '10H'
  | '18H'
  | '20H'
  | '28H'
  | '30H'
  | '38H'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7;

export type InstructionToken = {
  opcode: number;
  mnemonic: string;
  bytes: number;
  cycles: number[];
  operands: {
    name: Operand;
    immediate: boolean;
    bytes?: number;
    increment?: boolean;
    decrement?: boolean;
  }[];
  immediate: boolean;
  flags: Flags;
};

export type RegisterToken = { name: SingleRegister; bits: 8 | 16; initialValue: number };
