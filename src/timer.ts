// T-Edge: A single tick of the Game Boy's clock, from low to high, or high to low - 8,388,608 hz (8Mhz)
// T-Cycle (t): Two T-Edges - 4,194,304 hz (4MHz)
// M-Cycle (m): Four T-Cycles - 1,048,576 hz (1MHz)

const timer = {
  t: 0, // T-Cycle
  m: 0, // M-Cycle
};

export function writeTimerT(value) {
  timer.t = value;
}

export function incTimerT(value) {
  writeTimerT(timer.t + value);
}

export function readTimerT() {
  return timer.t;
}

export function writeTimerM(value) {
  timer.m = value;
}

export function incTimerM(value) {
  writeTimerM(timer.m + value);
}

export function getTimerM() {
  return timer.m;
}
