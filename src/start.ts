import * as jwt from 'jsonwebtoken';
import {randomBytes} from 'crypto';
import {showHelp} from './showHelp';
import {tryGetMove} from './tryGetMove';
import {randomNumFromInterval} from './randomNumFromInterval';
import {getWinner} from './getWInner';
import {IObg} from './types';

export async function start(сombinations: IObg<string[]>, moves: string[]) {
  const compMove = randomNumFromInterval(0, moves.length - 1);
  const secret = randomBytes(130).toString('hex');
  const hmac: string = jwt.sign(moves[compMove], secret);
  const decoded = jwt.decode(hmac);

  console.log(`HMAC: ${hmac}`);
  const userStep = await tryGetMove(moves);

  if (userStep && userStep !== '?') {
    console.log(`computer move: ${moves[compMove]}`);

    if (typeof decoded === 'string') {
      getWinner(сombinations, userStep, decoded);

      console.log(`Secret key was: ${secret.toString()}`);
    }
  } else if (userStep === '?') {
    showHelp(сombinations);
  } else if (userStep === null) {
    return true;
  }
}
