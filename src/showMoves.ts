export function showMoves(moves: string[]) {
  console.log('Available moves:');

  moves.forEach((move, i) => {
    console.log(`${i + 1} - ${move}`);
  });
  console.log('0 - exit\n? - help');
}
