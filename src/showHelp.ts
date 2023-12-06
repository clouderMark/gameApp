import {table} from 'table';
import {IObg} from './types';

enum ERes {
  DRAW = 'Draw',
  WIN = 'Win',
  LOSE = 'Lose',
}

const config = {
  border: {
    topBody: '-',
    topJoin: '+',
    topLeft: '+',
    topRight: '+',

    bottomBody: '-',
    bottomJoin: '+',
    bottomLeft: '+',
    bottomRight: '+',

    bodyLeft: '|',
    bodyRight: '│',
    bodyJoin: '│',

    joinBody: '-',
    joinLeft: '+',
    joinRight: '+',
    joinJoin: '+',
  },
};

export function showHelp(combinations: IObg<string[]>) {
  const tb = [];
  const args: string[] = [];

  for (const arg in combinations) {
    if (arg) {
      args.push(arg);
    }
  }

  tb.push(['< PC\\User >', ...args]);

  args.forEach((arg, r) => {
    const row: string[] = [];

    row.push(arg);
    for (let i = 0; i < args.length; i++) {
      let cell;

      if (r === i) {
        cell = ERes.DRAW;
      } else if (combinations[arg].includes(args[i])) {
        cell = ERes.LOSE;
      } else {
        cell = ERes.WIN;
      }

      row.push(cell);
    }

    tb.push(row);
  });

  console.log(table(tb, config));
}
