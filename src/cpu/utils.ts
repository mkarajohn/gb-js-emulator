import { writeUint8 } from 'cpu/write';
import { memory } from 'memory';

function disableBootROM() {
  writeUint8(memory, 0xff50, 0);
}

function enableBootROM() {
  writeUint8(memory, 0xff50, 1);
}
