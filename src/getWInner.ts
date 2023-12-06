import {IObg} from './types';

export function getWinner(combinations: IObg<string[]>, user: string, comp: string): void {
  const isUserWin = combinations[user].includes(comp);
  let isCompWin;

  if (!(comp in combinations)) {
    console.log('Computer is cheater. Fear him');
  } else {
    isCompWin = combinations[comp].includes(user);
  }

  if (isUserWin) console.log('You win!');
  if (isCompWin) console.log('Computer win!');
  if (!isUserWin && !isCompWin) console.log('Draw!!!');
}
