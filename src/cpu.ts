import { instructions } from 'instructions';
import { readMem } from 'memory';
import { registers, regPC } from 'registers';

export function cpu() {
  return instructions[readMem(registers[regPC])]();
}
