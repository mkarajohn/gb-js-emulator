let tick = 0;
let halt = true;
const callbacks: ((start: () => void, stop: () => void) => void)[] = [];

function loop() {
  while (!halt) {
    tick = tick ? 0 : 1;

    if (tick) {
      for (let i = 0; i < callbacks.length; i++) {
        callbacks[i](start, stop);
      }
    }
  }
}

function subscribe(fn: () => void) {
  callbacks.push(fn);
}

function stop() {
  halt = true;
}

function start() {
  if (!halt) {
    return;
  }

  halt = false;
  loop();
}

export const clock = { subscribe, stop, start };
