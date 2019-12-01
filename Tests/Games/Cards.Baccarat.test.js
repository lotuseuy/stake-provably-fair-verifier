import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Cards from '../../Games/Cards';

describe('Baccarat Verifier Tests', function() {
  const CARDS_VERIFIER = new Cards;

  const TEST_CASES = [{
    'clientSeed': '7pwXtJ6R',
    'serverSeed':
      'ae5baafb37cfd372fcf07cc85d3b924af4ad1691dd451529b13bf8f272926525',
    'serverSeedHash':
      '3ac95843b5415eef35cbd1556879739e9e766dcf2811265c8e2ca1f45a06d4cc',
    'range': [12, 22],
    'games': [
      [37, 24, 3, 4],
      [49, 37, 6, 40, 26],
      [3, 47, 22, 14, 25, 22],
      [29, 42, 35, 15],
      [49, 28, 42, 24],
      [7, 16, 32, 43],
      [27, 38, 3, 25],
      [34, 24, 28, 6],
      [47, 14, 17, 27, 33],
      [25, 46, 30, 44],
      [23, 9, 2, 10, 11],
    ],
  }];

  // eslint-disable-next-line max-len
  it('can verify 11 baccarat games using the "Baccarat" provably fair algorithm.',
      function() {
        for (const {
          clientSeed,
          serverSeed,
          range,
          games,
        } of TEST_CASES) {
          for (let nonce = range[0]; nonce <= range[1]; nonce++) {
            const CURRENT_GAME = games[nonce - range[0]];

            expect(CARDS_VERIFIER.verifyBaccarat({
              clientSeed,
              serverSeed,
              nonce,
            }).slice(0, CURRENT_GAME.length)).to.be.eql(CURRENT_GAME);
          }
        }
      });
});
