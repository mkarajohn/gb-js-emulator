import './style.css';
import { clock } from '~/clock.ts';
import { cpu } from '~/cpu';
import { memory } from '~/memory.ts';

memory.initialise();
clock.subscribe(cpu.run);
clock.start();
