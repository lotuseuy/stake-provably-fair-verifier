import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Cards from '../../Games/Cards';

describe('Hilo Verifier Tests', function() {
  const CARDS_VERIFIER = new Cards;

  const TEST_CASES = [{
    'clientSeed': '7pwXtJ6R',
    'serverSeed':
      'ae5baafb37cfd372fcf07cc85d3b924af4ad1691dd451529b13bf8f272926525',
    'serverSeedHash':
      '3ac95843b5415eef35cbd1556879739e9e766dcf2811265c8e2ca1f45a06d4cc',
    'range': [23, 33],
    'games': [
      [49],
      [19, 19, 48],
      [38, 19, 19, 39],
      [15, 11],
      [34, 45],
      [2, 30, 3, 9, 27, 50, 18, 42, 45],
      [37],
      [22, 28, 2, 24, 14],
      [30],
      [35],
      [33, 26, 25, 17, 30, 2, 31, 15, 12, 35, 47, 20, 3, 2, 21, 27],
    ],
  }];

  it('can verify 11 hilo games using the "Hilo" provably fair algorithm.',
      function() {
        for (const {
          clientSeed,
          serverSeed,
          range,
          games,
        } of TEST_CASES) {
          for (let nonce = range[0]; nonce <= range[1]; nonce++) {
            const CURRENT_GAME = games[nonce - range[0]];

            expect(CARDS_VERIFIER.verifyHilo({
              clientSeed,
              serverSeed,
              nonce,
            }).slice(0, CURRENT_GAME.length)).to.be.eql(CURRENT_GAME);
          }
        }
      });
});
