import {getMove} from './getMove';
import {showMoves} from './showMoves';

export async function tryGetMove(moves: string[]): Promise<string | null> {
  let isError;
  let result: string | null = null;

  do {
    try {
      showMoves(moves);
      result = await getMove(moves);
      isError = false;
    } catch (e) {
      isError = true;
    }
  } while (isError);

  return result;
}
