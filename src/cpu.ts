import { instructions } from 'instructions';
import { memory } from 'memory';
import { getRegisterValue, regPC } from 'registers';

function fetch(address) {
  return instructions[memory.readUint8(address)];
}

function execute(instruction: () => number) {
  return instruction();
}

function run() {
  let halt = false;

  const t0 = performance.now();
  let t1;

  while (!halt) {
    try {
      const address = getRegisterValue(regPC);
      if (address < 0x14 || address === 0x0100) {
        cpu.execute(fetch(address));
      } else {
        t1 = performance.now();
        console.log(`Iteration took ${t1 - t0} milliseconds.`);
        console.log('exiting');
        halt = true;
      }
    } catch (err) {
      console.log(err);
    }
  }

  // const interval = setInterval(function () {
  //   try {
  //     const address = getRegisterValue(regPC);
  //     if (address < 20) {
  //       const instruction = instructions[readMemAddr(address)];
  //
  //       cpu.execute(instruction);
  //     } else {
  //       t1 = performance.now();
  //       console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
  //       console.log('exiting');
  //       clearInterval(interval);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, 1000 / 4000000000); // 4MHz
}

export const cpu = {
  execute,
  run,
};
