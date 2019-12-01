import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Cards from '../../Games/Cards';

describe('Blackjack Verifier Tests', function() {
  const CARDS_VERIFIER = new Cards;

  const TEST_CASES = [{
    'clientSeed': 'oTmxwsdI',
    'serverSeed':
      'abf5e01d286b951bf4ef72b87720aeed3889b467660deeec3a0b1df677282ad6',
    'serverSeedHash':
      'abc88e14244679872089502840777fef301cd3dd958922face034bc704350b1d',
    'range': [1, 21],
    'games': [
      [42, 37, 30, 11, 45],
      [27, 9, 18, 46, 20, 0],
      [32, 32, 40, 42],
      [42, 21, 18, 5, 16, 46],
      [34, 38, 50, 19, 25],
      [30, 48, 22, 29, 36],
      [40, 4, 34, 2, 17],
      [27, 23, 37, 36, 37],
      [17, 7, 10, 1, 49, 17, 36],
      [10, 6, 9, 45, 39, 0, 18],
      [39, 40, 36, 11, 17],
      [17, 39, 44, 51],
      [2, 41, 13, 13, 20, 47],
      [17, 16, 17, 39, 43, 24, 35, 6],
      [34, 50, 51, 2],
      [33, 50, 19, 14],
      [33, 2, 44, 12, 27, 50, 23],
      [8, 44, 49, 51, 2, 7],
      [44, 4, 15, 0, 19, 21, 16],
      [23, 51, 32, 46],
      [49, 32, 1, 22],
    ],
  }];

  // eslint-disable-next-line max-len
  it('can verify 21 blackjack games using the "Blackjack" provably fair algorithm.',
      function() {
        for (const {
          clientSeed,
          serverSeed,
          range,
          games,
        } of TEST_CASES) {
          for (let nonce = range[0]; nonce <= range[1]; nonce++) {
            const CURRENT_GAME = games[nonce - range[0]];

            expect(CARDS_VERIFIER.verifyBlackjack({
              clientSeed,
              serverSeed,
              nonce,
            }).slice(0, CURRENT_GAME.length)).to.be.eql(CURRENT_GAME);
          }
        }
      });
});
