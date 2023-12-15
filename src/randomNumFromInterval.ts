import {randomInt} from 'crypto';

export function randomNumFromInterval(min: number, max: number) {
  return randomInt(min, max + 1);
}
