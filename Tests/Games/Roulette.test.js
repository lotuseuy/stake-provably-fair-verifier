import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Roulette from '../../Games/Roulette';

describe('Roulette Verifier Tests', function() {
  const ROULETTE_VERIFIER = new Roulette;

  const TEST_CASES = [{
    'clientSeed': 'OpNst_Ro',
    'serverSeed':
      '2c4f173f849a236499c5f6b7fe245a2d1b20d1c00f28caa7aa9186b9b0137138',
    'serverSeedHash':
      'f94239a8450e06eacc15ebdba496b67b98594c365ebe529a178e5a13df9abb79',
    'range': [1, 49],
    'games': [
      14,
      11,
      16,
      22,
      21,
      33,
      14,
      1,
      25,
      14,
      34,
      22,
      26,
      28,
      34,
      36,
      29,
      35,
      18,
      5,
      19,
      13,
      0,
      14,
      9,
      25,
      24,
      24,
      8,
      15,
      14,
      23,
      24,
      11,
      23,
      22,
      8,
      21,
      33,
      9,
      11,
      31,
      32,
      35,
      12,
      1,
      17,
      8,
      14,
    ],
  }];

  // eslint-disable-next-line max-len
  it('can verify 49 roulette games using the "Roulette" provably fair algorithm.',
      function() {
        for (const {
          clientSeed,
          serverSeed,
          range,
          games,
        } of TEST_CASES) {
          for (let nonce = range[0]; nonce <= range[1]; nonce++) {
            expect(ROULETTE_VERIFIER.verify({
              clientSeed,
              serverSeed,
              nonce,
            })).to.be.equal(games[nonce - range[0]]);
          }
        }
      });
});
