import {stdin as input, stdout as output} from 'node:process';
import {createInterface} from 'node:readline';

const answers = ['Ok', 'ok', 'yes', 'YES', 'Yes', ''];

export async function isAgain(): Promise<boolean> {
  const rl = createInterface({input, output});

  return new Promise((resolve) => {
    rl.question('Will play further?: Ok(yes) ', (answer) => {
      rl.close();
      if (answers.includes(answer)) {
        resolve(true);
      } else resolve(false);
    });
  });
}
