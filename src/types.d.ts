export type Registers =
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

export type FlagState = 'depends' | 'set' | 'reset';

export type Flags = {
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
export type OperandTypes = 'd8' | 'd16' | 'a8' | 'a16' | 'r8';

export type OpcodeToken = {
  instruction: string;
  length: number;
  operand: OperandTypes | null;
};

export type DisassembledInstructionToken = {
  position: string;
  code: string;
};
