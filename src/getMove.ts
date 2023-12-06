import {stdin as input, stdout as output} from 'node:process';
import {createInterface} from 'node:readline';

export async function getMove(moves: string[]): Promise<string | null> {
  const rl = createInterface({input, output});

  return new Promise((resolve, reject) => {
    rl.question('Enter your move: ', (answer) => {
      rl.close();
      if (
        Array(moves.length)
          .fill(null)
          .map((_, i) => `${i + 1}`)
          .includes(answer)
      ) {
        const to: number = +answer - 1;

        console.log(`Your move: ${moves[to]}`);
        resolve(moves[to]);
      } else if (answer === '0') {
        console.log('Thank you for the game!');
        resolve(null);
      } else if (answer === '?') {
        resolve('?');
      } else {
        reject();
      }
    });
  });
}
