import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Cards from '../../Games/Cards';

describe('Video Poker Verifier Tests', function() {
  const CARDS_VERIFIER = new Cards;

  const TEST_CASES = [{
    'clientSeed': '7pwXtJ6R',
    'serverSeed':
      'ae5baafb37cfd372fcf07cc85d3b924af4ad1691dd451529b13bf8f272926525',
    'serverSeedHash':
      '3ac95843b5415eef35cbd1556879739e9e766dcf2811265c8e2ca1f45a06d4cc',
    'range': [1, 11],
    'games': [
      [36, 38, 47, 39, 1, 35, 25, 29, 30, 15],
      [1, 37, 2, 8, 40, 38, 51, 7, 31, 6],
      [16, 39, 32, 3, 21, 49, 38, 18, 50, 29],
      [26, 22, 15, 7, 35, 3, 4, 5, 0, 34],
      [33, 26, 44, 17, 34, 45, 12, 27, 38, 16],
      [6, 9, 14, 35, 24, 15, 13, 21, 4, 2],
      [31, 3, 39, 0, 4, 14, 18, 9, 24, 12],
      [12, 36, 8, 48, 1, 18, 5, 42, 17, 22],
      [34, 28, 46, 5, 23, 43, 44, 17, 37, 24],
      [12, 7, 2, 16, 23, 37, 33, 46, 43, 26],
      [42, 25, 50, 1, 19, 23, 22, 4, 37, 21],
    ],
  }];

  // eslint-disable-next-line max-len
  it('can verify 11 video poker games using the "Video Poker" provably fair algorithm.',
      function() {
        for (const {
          clientSeed,
          serverSeed,
          range,
          games,
        } of TEST_CASES) {
          for (let nonce = range[0]; nonce <= range[1]; nonce++) {
            const CURRENT_GAME = games[nonce - range[0]];

            expect(CARDS_VERIFIER.verifyVideoPoker({
              clientSeed,
              serverSeed,
              nonce,
            }).slice(0, CURRENT_GAME.length)).to.be.eql(CURRENT_GAME);
          }
        }
      });
});
