import {getCombinations} from './src/getCombinations';
import {isAgain} from './src/isAgain';
import {start} from './src/start';

const game = async (moves: string[]) => {
  const сombinations = getCombinations(moves);
  let loop = true;

  do {
    const isEnd = await start(сombinations, moves);

    isEnd ? (loop = false) : (loop = await isAgain());
  } while (loop);
};

const data: string[] = Array.from(new Set(process.argv.slice(2)));

if (!data.length || data.length < 3 || !(data.length % 2)) {
  console.log('Game must have three or more unique variant. And these amount of vars will be odd. Please check line');
} else {
  try {
    // eslint-disable-next-line
    game(data);
  } catch (_) {
    console.log('Smthng gose wrong. Please try again');
  }
}
