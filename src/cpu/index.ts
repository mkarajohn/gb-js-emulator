import { clock } from '~/clock';
import { instructions } from '~/cpu/instructions';
import { readUint8 } from '~/cpu/read';
import { readRegisterPC } from '~/cpu/registers';
import { memory } from '~/memory';

function fetch() {
  const PC = readRegisterPC();
  const opcode = readUint8(memory, PC);

  if (PC < 0x14 || PC === 0x0100) {
    return instructions[opcode];
  } else {
    console.log('exiting');
    clock.stop();

    return instructions[0];
  }
}

function execute(instruction: () => number) {
  return instruction();
}

function run() {
  try {
    execute(fetch());
  } catch (err) {
    console.log(err);
    clock.stop();
  }
}

export const cpu = {
  run,
};
