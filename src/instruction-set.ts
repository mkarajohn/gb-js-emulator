import { InstructionToken } from 'types';

export const instructionSet: InstructionToken[] = [
  {
    opcode: 0x00,
    mnemonic: 'NOP',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x01,
    mnemonic: 'LD',
    bytes: 3,
    cycles: [12],
    operands: [
      {
        name: 'BC',
        immediate: true,
      },
      {
        name: 'd16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x02,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'BC',
        immediate: false,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x03,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'BC',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x04,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x05,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x06,
    mnemonic: 'LD',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x07,
    mnemonic: 'RLCA',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '0',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x08,
    mnemonic: 'LD',
    bytes: 3,
    cycles: [20],
    operands: [
      {
        name: 'a16',
        bytes: 2,
        immediate: false,
      },
      {
        name: 'SP',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x09,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
      {
        name: 'BC',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x0a,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'BC',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x0b,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'BC',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x0c,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x0d,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x0e,
    mnemonic: 'LD',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x0f,
    mnemonic: 'RRCA',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '0',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x10,
    mnemonic: 'STOP',
    bytes: 2,
    cycles: [4],
    operands: [
      {
        name: 'Ignored',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x11,
    mnemonic: 'LD',
    bytes: 3,
    cycles: [12],
    operands: [
      {
        name: 'DE',
        immediate: true,
      },
      {
        name: 'd16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x12,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'DE',
        immediate: false,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x13,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'DE',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x14,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x15,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x16,
    mnemonic: 'LD',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x17,
    mnemonic: 'RLA',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '0',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x18,
    mnemonic: 'JR',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 'r8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x19,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
      {
        name: 'DE',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x1a,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'DE',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x1b,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'DE',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x1c,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x1d,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x1e,
    mnemonic: 'LD',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x1f,
    mnemonic: 'RRA',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '0',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x20,
    mnemonic: 'JR',
    bytes: 2,
    cycles: [12, 8],
    operands: [
      {
        name: 'NZ',
        immediate: true,
      },
      {
        name: 'r8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x21,
    mnemonic: 'LD',
    bytes: 3,
    cycles: [12],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
      {
        name: 'd16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x22,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        increment: true,
        immediate: false,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x23,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x24,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x25,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x26,
    mnemonic: 'LD',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x27,
    mnemonic: 'DAA',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '-',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x28,
    mnemonic: 'JR',
    bytes: 2,
    cycles: [12, 8],
    operands: [
      {
        name: 'Z',
        immediate: true,
      },
      {
        name: 'r8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x29,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x2a,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'HL',
        increment: true,
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x2b,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x2c,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x2d,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x2e,
    mnemonic: 'LD',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x2f,
    mnemonic: 'CPL',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '1',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x30,
    mnemonic: 'JR',
    bytes: 2,
    cycles: [12, 8],
    operands: [
      {
        name: 'NC',
        immediate: true,
      },
      {
        name: 'r8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x31,
    mnemonic: 'LD',
    bytes: 3,
    cycles: [12],
    operands: [
      {
        name: 'SP',
        immediate: true,
      },
      {
        name: 'd16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x32,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        decrement: true,
        immediate: false,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x33,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'SP',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x34,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [12],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x35,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [12],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x36,
    mnemonic: 'LD',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x37,
    mnemonic: 'SCF',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '0',
      H: '0',
      C: '1',
    },
  },
  {
    opcode: 0x38,
    mnemonic: 'JR',
    bytes: 2,
    cycles: [12, 8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'r8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x39,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
      {
        name: 'SP',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x3a,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'HL',
        decrement: true,
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x3b,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'SP',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x3c,
    mnemonic: 'INC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x3d,
    mnemonic: 'DEC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: '-',
    },
  },
  {
    opcode: 0x3e,
    mnemonic: 'LD',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x3f,
    mnemonic: 'CCF',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x40,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x41,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x42,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x43,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x44,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x45,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x46,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x47,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x48,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x49,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x4a,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x4b,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x4c,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x4d,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x4e,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x4f,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x50,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x51,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x52,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x53,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x54,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x55,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x56,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x57,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x58,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x59,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x5a,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x5b,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x5c,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x5d,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x5e,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x5f,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x60,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x61,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x62,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x63,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x64,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x65,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x66,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x67,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x68,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x69,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x6a,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x6b,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x6c,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x6d,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x6e,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x6f,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x70,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x71,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x72,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x73,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x74,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x75,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x76,
    mnemonic: 'HALT',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x77,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x78,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x79,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x7a,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x7b,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x7c,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x7d,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x7e,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x7f,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x80,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x81,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x82,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x83,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x84,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x85,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x86,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x87,
    mnemonic: 'ADD',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x88,
    mnemonic: 'ADC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x89,
    mnemonic: 'ADC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x8a,
    mnemonic: 'ADC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x8b,
    mnemonic: 'ADC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x8c,
    mnemonic: 'ADC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x8d,
    mnemonic: 'ADC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x8e,
    mnemonic: 'ADC',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x8f,
    mnemonic: 'ADC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x90,
    mnemonic: 'SUB',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x91,
    mnemonic: 'SUB',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x92,
    mnemonic: 'SUB',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x93,
    mnemonic: 'SUB',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x94,
    mnemonic: 'SUB',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x95,
    mnemonic: 'SUB',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x96,
    mnemonic: 'SUB',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x97,
    mnemonic: 'SUB',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '1',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x98,
    mnemonic: 'SBC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x99,
    mnemonic: 'SBC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x9a,
    mnemonic: 'SBC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x9b,
    mnemonic: 'SBC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x9c,
    mnemonic: 'SBC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x9d,
    mnemonic: 'SBC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x9e,
    mnemonic: 'SBC',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0x9f,
    mnemonic: 'SBC',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xa0,
    mnemonic: 'AND',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '0',
    },
  },
  {
    opcode: 0xa1,
    mnemonic: 'AND',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '0',
    },
  },
  {
    opcode: 0xa2,
    mnemonic: 'AND',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '0',
    },
  },
  {
    opcode: 0xa3,
    mnemonic: 'AND',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '0',
    },
  },
  {
    opcode: 0xa4,
    mnemonic: 'AND',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '0',
    },
  },
  {
    opcode: 0xa5,
    mnemonic: 'AND',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '0',
    },
  },
  {
    opcode: 0xa6,
    mnemonic: 'AND',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '0',
    },
  },
  {
    opcode: 0xa7,
    mnemonic: 'AND',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '0',
    },
  },
  {
    opcode: 0xa8,
    mnemonic: 'XOR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xa9,
    mnemonic: 'XOR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xaa,
    mnemonic: 'XOR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xab,
    mnemonic: 'XOR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xac,
    mnemonic: 'XOR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xad,
    mnemonic: 'XOR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xae,
    mnemonic: 'XOR',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xaf,
    mnemonic: 'XOR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '1',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xb0,
    mnemonic: 'OR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xb1,
    mnemonic: 'OR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xb2,
    mnemonic: 'OR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xb3,
    mnemonic: 'OR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xb4,
    mnemonic: 'OR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xb5,
    mnemonic: 'OR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xb6,
    mnemonic: 'OR',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xb7,
    mnemonic: 'OR',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xb8,
    mnemonic: 'CP',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xb9,
    mnemonic: 'CP',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xba,
    mnemonic: 'CP',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xbb,
    mnemonic: 'CP',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xbc,
    mnemonic: 'CP',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xbd,
    mnemonic: 'CP',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xbe,
    mnemonic: 'CP',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xbf,
    mnemonic: 'CP',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '1',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xc0,
    mnemonic: 'RET',
    bytes: 1,
    cycles: [20, 8],
    operands: [
      {
        name: 'NZ',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc1,
    mnemonic: 'POP',
    bytes: 1,
    cycles: [12],
    operands: [
      {
        name: 'BC',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc2,
    mnemonic: 'JP',
    bytes: 3,
    cycles: [16, 12],
    operands: [
      {
        name: 'NZ',
        immediate: true,
      },
      {
        name: 'a16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc3,
    mnemonic: 'JP',
    bytes: 3,
    cycles: [16],
    operands: [
      {
        name: 'a16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc4,
    mnemonic: 'CALL',
    bytes: 3,
    cycles: [24, 12],
    operands: [
      {
        name: 'NZ',
        immediate: true,
      },
      {
        name: 'a16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc5,
    mnemonic: 'PUSH',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: 'BC',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc6,
    mnemonic: 'ADD',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xc7,
    mnemonic: 'RST',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: '00H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc8,
    mnemonic: 'RET',
    bytes: 1,
    cycles: [20, 8],
    operands: [
      {
        name: 'Z',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc9,
    mnemonic: 'RET',
    bytes: 1,
    cycles: [16],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xca,
    mnemonic: 'JP',
    bytes: 3,
    cycles: [16, 12],
    operands: [
      {
        name: 'Z',
        immediate: true,
      },
      {
        name: 'a16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xcb,
    mnemonic: 'PREFIX',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xcc,
    mnemonic: 'CALL',
    bytes: 3,
    cycles: [24, 12],
    operands: [
      {
        name: 'Z',
        immediate: true,
      },
      {
        name: 'a16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xcd,
    mnemonic: 'CALL',
    bytes: 3,
    cycles: [24],
    operands: [
      {
        name: 'a16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xce,
    mnemonic: 'ADC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xcf,
    mnemonic: 'RST',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: '08H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd0,
    mnemonic: 'RET',
    bytes: 1,
    cycles: [20, 8],
    operands: [
      {
        name: 'NC',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd1,
    mnemonic: 'POP',
    bytes: 1,
    cycles: [12],
    operands: [
      {
        name: 'DE',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd2,
    mnemonic: 'JP',
    bytes: 3,
    cycles: [16, 12],
    operands: [
      {
        name: 'NC',
        immediate: true,
      },
      {
        name: 'a16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd3,
    mnemonic: 'ILLEGAL_D3',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd4,
    mnemonic: 'CALL',
    bytes: 3,
    cycles: [24, 12],
    operands: [
      {
        name: 'NC',
        immediate: true,
      },
      {
        name: 'a16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd5,
    mnemonic: 'PUSH',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: 'DE',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd6,
    mnemonic: 'SUB',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xd7,
    mnemonic: 'RST',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: '10H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd8,
    mnemonic: 'RET',
    bytes: 1,
    cycles: [20, 8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd9,
    mnemonic: 'RETI',
    bytes: 1,
    cycles: [16],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xda,
    mnemonic: 'JP',
    bytes: 3,
    cycles: [16, 12],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'a16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xdb,
    mnemonic: 'ILLEGAL_DB',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xdc,
    mnemonic: 'CALL',
    bytes: 3,
    cycles: [24, 12],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
      {
        name: 'a16',
        bytes: 2,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xdd,
    mnemonic: 'ILLEGAL_DD',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xde,
    mnemonic: 'SBC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xdf,
    mnemonic: 'RST',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: '18H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe0,
    mnemonic: 'LDH',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 'a8',
        bytes: 1,
        immediate: false,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe1,
    mnemonic: 'POP',
    bytes: 1,
    cycles: [12],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe2,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: false,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe3,
    mnemonic: 'ILLEGAL_E3',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe4,
    mnemonic: 'ILLEGAL_E4',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe5,
    mnemonic: 'PUSH',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe6,
    mnemonic: 'AND',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '0',
    },
  },
  {
    opcode: 0xe7,
    mnemonic: 'RST',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: '20H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe8,
    mnemonic: 'ADD',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 'SP',
        immediate: true,
      },
      {
        name: 'r8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '0',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xe9,
    mnemonic: 'JP',
    bytes: 1,
    cycles: [4],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xea,
    mnemonic: 'LD',
    bytes: 3,
    cycles: [16],
    operands: [
      {
        name: 'a16',
        bytes: 2,
        immediate: false,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xeb,
    mnemonic: 'ILLEGAL_EB',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xec,
    mnemonic: 'ILLEGAL_EC',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xed,
    mnemonic: 'ILLEGAL_ED',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xee,
    mnemonic: 'XOR',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xef,
    mnemonic: 'RST',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: '28H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf0,
    mnemonic: 'LDH',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'a8',
        bytes: 1,
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf1,
    mnemonic: 'POP',
    bytes: 1,
    cycles: [12],
    operands: [
      {
        name: 'AF',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: 'N',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xf2,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'C',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf3,
    mnemonic: 'DI',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf4,
    mnemonic: 'ILLEGAL_F4',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf5,
    mnemonic: 'PUSH',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: 'AF',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf6,
    mnemonic: 'OR',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0xf7,
    mnemonic: 'RST',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: '30H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf8,
    mnemonic: 'LD',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 'HL',
        immediate: true,
      },
      {
        name: 'SP',
        increment: true,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '0',
      N: '0',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xf9,
    mnemonic: 'LD',
    bytes: 1,
    cycles: [8],
    operands: [
      {
        name: 'SP',
        immediate: true,
      },
      {
        name: 'HL',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xfa,
    mnemonic: 'LD',
    bytes: 3,
    cycles: [16],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
      {
        name: 'a16',
        bytes: 2,
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xfb,
    mnemonic: 'EI',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xfc,
    mnemonic: 'ILLEGAL_FC',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xfd,
    mnemonic: 'ILLEGAL_FD',
    bytes: 1,
    cycles: [4],
    operands: [],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xfe,
    mnemonic: 'CP',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'd8',
        bytes: 1,
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '1',
      H: 'H',
      C: 'C',
    },
  },
  {
    opcode: 0xff,
    mnemonic: 'RST',
    bytes: 1,
    cycles: [16],
    operands: [
      {
        name: '38H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
];

export const cbPrefixedInstructionSet: InstructionToken[] = [
  {
    opcode: 0x00,
    mnemonic: 'RLC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x01,
    mnemonic: 'RLC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x02,
    mnemonic: 'RLC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x03,
    mnemonic: 'RLC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x04,
    mnemonic: 'RLC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x05,
    mnemonic: 'RLC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x06,
    mnemonic: 'RLC',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x07,
    mnemonic: 'RLC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x08,
    mnemonic: 'RRC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x09,
    mnemonic: 'RRC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x0a,
    mnemonic: 'RRC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x0b,
    mnemonic: 'RRC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x0c,
    mnemonic: 'RRC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x0d,
    mnemonic: 'RRC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x0e,
    mnemonic: 'RRC',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x0f,
    mnemonic: 'RRC',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x10,
    mnemonic: 'RL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x11,
    mnemonic: 'RL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x12,
    mnemonic: 'RL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x13,
    mnemonic: 'RL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x14,
    mnemonic: 'RL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x15,
    mnemonic: 'RL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x16,
    mnemonic: 'RL',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x17,
    mnemonic: 'RL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x18,
    mnemonic: 'RR',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x19,
    mnemonic: 'RR',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x1a,
    mnemonic: 'RR',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x1b,
    mnemonic: 'RR',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x1c,
    mnemonic: 'RR',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x1d,
    mnemonic: 'RR',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x1e,
    mnemonic: 'RR',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x1f,
    mnemonic: 'RR',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x20,
    mnemonic: 'SLA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x21,
    mnemonic: 'SLA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x22,
    mnemonic: 'SLA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x23,
    mnemonic: 'SLA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x24,
    mnemonic: 'SLA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x25,
    mnemonic: 'SLA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x26,
    mnemonic: 'SLA',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x27,
    mnemonic: 'SLA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x28,
    mnemonic: 'SRA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x29,
    mnemonic: 'SRA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x2a,
    mnemonic: 'SRA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x2b,
    mnemonic: 'SRA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x2c,
    mnemonic: 'SRA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x2d,
    mnemonic: 'SRA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x2e,
    mnemonic: 'SRA',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x2f,
    mnemonic: 'SRA',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x30,
    mnemonic: 'SWAP',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0x31,
    mnemonic: 'SWAP',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0x32,
    mnemonic: 'SWAP',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0x33,
    mnemonic: 'SWAP',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0x34,
    mnemonic: 'SWAP',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0x35,
    mnemonic: 'SWAP',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0x36,
    mnemonic: 'SWAP',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0x37,
    mnemonic: 'SWAP',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: '0',
    },
  },
  {
    opcode: 0x38,
    mnemonic: 'SRL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x39,
    mnemonic: 'SRL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x3a,
    mnemonic: 'SRL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x3b,
    mnemonic: 'SRL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x3c,
    mnemonic: 'SRL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x3d,
    mnemonic: 'SRL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x3e,
    mnemonic: 'SRL',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x3f,
    mnemonic: 'SRL',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '0',
      C: 'C',
    },
  },
  {
    opcode: 0x40,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x41,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x42,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x43,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x44,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x45,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x46,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x47,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x48,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x49,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x4a,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x4b,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x4c,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x4d,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x4e,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x4f,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x50,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x51,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x52,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x53,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x54,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x55,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x56,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x57,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x58,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x59,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x5a,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x5b,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x5c,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x5d,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x5e,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x5f,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x60,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x61,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x62,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x63,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x64,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x65,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x66,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x67,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x68,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x69,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x6a,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x6b,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x6c,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x6d,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x6e,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x6f,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x70,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x71,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x72,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x73,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x74,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x75,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x76,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x77,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x78,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x79,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x7a,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x7b,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x7c,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x7d,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x7e,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [12],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x7f,
    mnemonic: 'BIT',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: 'Z',
      N: '0',
      H: '1',
      C: '-',
    },
  },
  {
    opcode: 0x80,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x81,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x82,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x83,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x84,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x85,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x86,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x87,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x88,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x89,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x8a,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x8b,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x8c,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x8d,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x8e,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x8f,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x90,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x91,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x92,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x93,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x94,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x95,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x96,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x97,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x98,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x99,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x9a,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x9b,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x9c,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x9d,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x9e,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0x9f,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xa0,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xa1,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xa2,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xa3,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xa4,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xa5,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xa6,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xa7,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xa8,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xa9,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xaa,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xab,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xac,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xad,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xae,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xaf,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xb0,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xb1,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xb2,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xb3,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xb4,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xb5,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xb6,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xb7,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xb8,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xb9,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xba,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xbb,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xbc,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xbd,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xbe,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xbf,
    mnemonic: 'RES',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc0,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc1,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc2,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc3,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc4,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc5,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc6,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc7,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 0,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc8,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xc9,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xca,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xcb,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xcc,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xcd,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xce,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xcf,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 1,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd0,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd1,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd2,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd3,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd4,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd5,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd6,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd7,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 2,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd8,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xd9,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xda,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xdb,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xdc,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xdd,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xde,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xdf,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 3,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe0,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe1,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe2,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe3,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe4,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe5,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe6,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe7,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 4,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe8,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xe9,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xea,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xeb,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xec,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xed,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xee,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xef,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 5,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf0,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf1,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf2,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf3,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf4,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf5,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf6,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf7,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 6,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf8,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'B',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xf9,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'C',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xfa,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'D',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xfb,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'E',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xfc,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'H',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xfd,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'L',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xfe,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [16],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'HL',
        immediate: false,
      },
    ],
    immediate: false,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
  {
    opcode: 0xff,
    mnemonic: 'SET',
    bytes: 2,
    cycles: [8],
    operands: [
      {
        name: 7,
        immediate: true,
      },
      {
        name: 'A',
        immediate: true,
      },
    ],
    immediate: true,
    flags: {
      Z: '-',
      N: '-',
      H: '-',
      C: '-',
    },
  },
];
