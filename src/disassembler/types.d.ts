import { OperandTypes } from 'types';

export type OpcodeToken = {
  instruction: string;
  length: number;
  operand: OperandTypes | null;
};

export type DisassembledInstructionToken = {
  position: string;
  code: string;
};
