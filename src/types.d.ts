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

// d8  means immediate 8 bit data
// d16 means immediate 16 bit data
// a8  means 8 bit unsigned data, which are added to $FF00 in certain instructions (replacement for missing IN and OUT instructions)
// a16 means 16 bit address
// r8  means 8 bit signed data, which are added to program counter
export type OperandTypes = 'd8' | 'd16' | 'a8' | 'a16' | 'r8';

export type MemoryAddress = `(${Registers | OperandTypes})`;

export type FlagState = 'depends' | 'set' | 'reset';

export type Flags = {
  Z?: FlagState;
  N?: FlagState;
  H?: FlagState;
  C?: FlagState;
};

export type Operands = Registers | MemoryAddress | OperandTypes | null;

type OpcodeToken2 = {
  instruction: string;
  length: number;
  cycles:
    | number
    | {
        high: number;
        low: number;
      };
  flags: {
    Z?: 'depends' | 'set' | 'reset';
    N?: 'depends' | 'set' | 'reset';
    H?: 'depends' | 'set' | 'reset';
    C?: 'depends' | 'set' | 'reset';
  };
  source: Registers | MemoryAddress | OperandTypes;
  destination: Registers | MemoryAddress | OperandTypes;
};
