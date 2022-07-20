import { clock } from 'clock';
import { readUint8 } from 'cpu/read';
import { readRegisterPC } from 'cpu/registers';
import { instructions } from 'instructions';
import { memory } from 'memory';

function fetch(address) {
  return instructions[readUint8(memory, address)];
}

function execute(instruction: () => number) {
  return instruction();
}

function run() {
  try {
    const address = readRegisterPC();
    if (address < 0x14 || address === 0x0100) {
      execute(fetch(address));
    } else {
      console.log('exiting');
      clock.stop();
    }
  } catch (err) {
    console.log(err);
  }
}

export const cpu = {
  run,
};
