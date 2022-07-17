import { instructions } from 'instructions';
import { readMemAddr } from 'memory';
import { getRegisterValue, regPC } from 'registers';

function execute(instruction: () => number) {
  return instruction();
}

function run() {
  let work = true;

  const t0 = performance.now();
  let t1;

  while (work) {
    try {
      const address = getRegisterValue(regPC);
      if (address < 20) {
        const instruction = instructions[readMemAddr(address)];

        cpu.execute(instruction);
      } else {
        t1 = performance.now();
        console.log('exiting');
        console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
        work = false;
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
