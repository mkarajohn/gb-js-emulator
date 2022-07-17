import { instructions } from 'instructions';
import { readMem } from 'memory';
import { registers, regPC } from 'registers';

export const cpu = {
  execute: function (instruction: () => number) {
    return instruction();
  },
  run: function () {
    while (registers[regPC] < 20) {
      const address = registers[regPC];
      const instruction = instructions[readMem(address)];

      cpu.execute(instruction);
    }

    // let cont = true;
    // while (cont) {
    //   try {
    //     const cycles = cpu();
    //   } catch (e) {
    //     cont = false;
    //   }
    // }
  },
};
