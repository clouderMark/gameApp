import {IObg} from './types';

export function getCombinations(vars: string[]): IObg<string[]> {
  const divider = Math.floor(vars.length / 2);

  return vars.reduce((rules: IObg<string[]>, el, i) => {
    rules[el] = [];
    for (let r = 0; r < divider; r++) {
      const item = vars.at(i - (r + 1));

      if (item) {
        rules[el].push(item);
      }
    }

    return rules;
  }, {});
}
