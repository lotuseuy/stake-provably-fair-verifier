import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Limbo from '../../Games/Limbo';

describe('Limbo Verifier Tests', function() {
  const LIMBO_VERIFIER = new Limbo;

  const TEST_CASES = [{
    'clientSeed': 'Hxn8AwMB',
    'serverSeed':
      '0723cade85eb0996f4a20eabedd973fae0e301e709f34bc87be5bf7f347f7aab',
    'serverSeedHash':
      '2d370d8dd501039579530f781d5cac42c0897ff47fb69352a46e4c2f773e029e',
    'range': [1, 49],
    'stoppages': [
      '4.39',
      '7.63',
      '2.87',
      '11.04',
      '2.46',
      '1.52',
      '1.17',
      '1.05',
      '1.16',
      '4.85',
      '1.36',
      '4.35',
      '2.68',
      '2.22',
      '1.02',
      '1.25',
      '1.51',
      '1.72',
      '14.50',
      '2.45',
      '1.62',
      '1.46',
      '1.04',
      '121.88',
      '1.27',
      '2.77',
      '4.49',
      '1.12',
      '1.87',
      '7.39',
      '3.85',
      '1.73',
      '2.35',
      '43.25',
      '6.90',
      '2.98',
      '95.56',
      '6.52',
      '2.72',
      '1.15',
      '1.43',
      '5.56',
      '1.31',
      '1.40',
      '3.55',
      '16.63',
      '1.06',
      '2.58',
      '9.08',
    ],
  }];

  it('can verify 49 limbo stoppages using the "Limbo" provably fair algorithm.',
      function() {
        for (const {
          clientSeed,
          serverSeed,
          range,
          stoppages,
        } of TEST_CASES) {
          for (let nonce = range[0]; nonce <= range[1]; nonce++) {
            expect(LIMBO_VERIFIER.verify({
              clientSeed,
              serverSeed,
              nonce,
            })).to.be.equal(stoppages[nonce - range[0]]);
          }
        }
      });
});
