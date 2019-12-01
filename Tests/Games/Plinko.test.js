import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Plinko from '../../Games/Plinko';

describe('Plinko Verifier Tests', function() {
  const PLINKO_VERIFIER = new Plinko;

  const TEST_CASES = [{
    'clientSeed': 'Se6QIZfZ',
    'serverSeed':
        '05ab9aeec2e6a8cd924f2aeab4dabe68f53c75c43c5fde1f2e0b5103cdd8efc9',
    'serverSeedHash':
        '892c49b804dea2b7ab4845b70f5a0ad8fbe05a6d90a6defb4b532112b87b6889',
    'range': [1, 49],
    'drops': [
      ['L', 'L', 'R', 'R', 'L', 'L', 'L', 'L', 'R', 'R', 'L', 'R', 'L', 'R',
        'L', 'R'],
      ['L', 'R', 'L', 'R', 'L', 'L', 'L', 'L', 'R', 'L', 'R', 'L', 'L', 'R',
        'R', 'L'],
      ['R', 'L', 'R', 'L', 'R', 'R', 'L', 'R', 'R', 'R', 'R', 'R', 'L', 'L',
        'R', 'R'],
      ['R', 'R', 'L', 'R', 'L', 'L', 'L', 'R', 'R', 'L', 'R', 'L', 'L', 'R',
        'L', 'L'],
      ['R', 'L', 'L', 'R', 'L', 'L', 'L', 'R', 'R', 'R', 'L', 'L', 'R', 'L',
        'L', 'L'],
      ['R', 'R', 'R', 'R', 'R', 'L', 'R', 'R', 'R', 'R', 'L', 'L', 'L', 'R',
        'L', 'L'],
      ['L', 'L', 'L', 'L', 'R', 'L', 'L', 'L', 'R', 'L', 'R', 'R', 'L', 'L',
        'L', 'R'],
      ['R', 'R', 'L', 'L', 'L', 'R', 'R', 'R', 'R', 'L', 'R', 'R', 'L', 'R',
        'L', 'L'],
      ['L', 'L', 'L', 'L', 'R', 'R', 'L', 'L', 'R', 'R', 'R', 'L', 'L', 'L',
        'R', 'R'],
      ['L', 'R', 'R', 'L', 'R', 'R', 'R', 'L', 'R', 'R', 'L', 'L', 'L', 'L',
        'L', 'L'],
      ['L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'R', 'R', 'L', 'R',
        'L', 'L'],
      ['R', 'L', 'L', 'R', 'L', 'R', 'R', 'L', 'L', 'R', 'L', 'R', 'L', 'R',
        'L', 'R'],
      ['R', 'R', 'L', 'R', 'R', 'L', 'R', 'R', 'L', 'L', 'R', 'L', 'R', 'R',
        'R', 'R'],
      ['R', 'R', 'L', 'L', 'L', 'R', 'R', 'L', 'R', 'L', 'R', 'L', 'L', 'L',
        'L', 'L'],
      ['R', 'L', 'R', 'L', 'R', 'L', 'R', 'R', 'L', 'L', 'R', 'R', 'R', 'L',
        'L', 'R'],
      ['L', 'L', 'R', 'R', 'R', 'L', 'L', 'R', 'R', 'L', 'R', 'R', 'L', 'L',
        'L', 'R'],
      ['R', 'R', 'L', 'L', 'R', 'R', 'L', 'R', 'L', 'L', 'L', 'L', 'R', 'L',
        'L', 'R'],
      ['R', 'R', 'L', 'R', 'L', 'R', 'R', 'R', 'R', 'R', 'L', 'R', 'L', 'R',
        'L', 'L'],
      ['L', 'R', 'L', 'L', 'R', 'R', 'L', 'R', 'R', 'R', 'R', 'R', 'R', 'R',
        'R', 'R'],
      ['R', 'R', 'R', 'R', 'L', 'L', 'L', 'R', 'R', 'L', 'L', 'L', 'L', 'R',
        'L', 'R'],
      ['R', 'L', 'L', 'R', 'L', 'L', 'L', 'R', 'L', 'R', 'R', 'L', 'R', 'R',
        'R', 'L'],
      ['R', 'L', 'L', 'R', 'L', 'R', 'L', 'L', 'R', 'L', 'L', 'R', 'R', 'R',
        'L', 'L'],
      ['R', 'L', 'R', 'R', 'R', 'R', 'R', 'R', 'L', 'R', 'R', 'R', 'R', 'R',
        'R', 'R'],
      ['L', 'L', 'L', 'R', 'L', 'R', 'R', 'L', 'R', 'R', 'L', 'R', 'R', 'R',
        'L', 'L'],
      ['L', 'L', 'L', 'L', 'L', 'R', 'R', 'R', 'L', 'L', 'R', 'R', 'R', 'L',
        'R', 'R'],
      ['R', 'R', 'R', 'R', 'L', 'R', 'R', 'L', 'L', 'R', 'R', 'R', 'R', 'L',
        'R', 'R'],
      ['R', 'L', 'L', 'L', 'R', 'L', 'L', 'L', 'L', 'R', 'R', 'L', 'L', 'R',
        'R', 'L'],
      ['L', 'L', 'R', 'L', 'L', 'L', 'R', 'L', 'L', 'R', 'R', 'L', 'R', 'R',
        'L', 'R'],
      ['R', 'L', 'L', 'R', 'L', 'R', 'L', 'L', 'L', 'L', 'R', 'R', 'R', 'L',
        'R', 'R'],
      ['L', 'L', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'L', 'R', 'L', 'L', 'L',
        'R', 'L'],
      ['R', 'R', 'R', 'R', 'L', 'R', 'R', 'L', 'R', 'L', 'L', 'R', 'R', 'L',
        'R', 'R'],
      ['L', 'R', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'R', 'R', 'R', 'L', 'R',
        'L', 'R'],
      ['R', 'L', 'L', 'L', 'R', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R',
        'L', 'R'],
      ['R', 'R', 'L', 'L', 'L', 'R', 'R', 'L', 'R', 'L', 'L', 'R', 'R', 'R',
        'L', 'R'],
      ['R', 'R', 'R', 'R', 'R', 'L', 'R', 'R', 'L', 'L', 'R', 'L', 'R', 'R',
        'R', 'R'],
      ['R', 'L', 'R', 'R', 'L', 'L', 'L', 'R', 'R', 'L', 'R', 'R', 'L', 'L',
        'L', 'R'],
      ['R', 'R', 'L', 'R', 'L', 'L', 'R', 'R', 'L', 'L', 'R', 'R', 'L', 'R',
        'L', 'L'],
      ['L', 'L', 'R', 'L', 'R', 'L', 'L', 'R', 'R', 'L', 'R', 'L', 'L', 'L',
        'L', 'L'],
      ['R', 'L', 'R', 'L', 'L', 'L', 'L', 'L', 'R', 'L', 'R', 'L', 'L', 'L',
        'L', 'R'],
      ['L', 'L', 'L', 'L', 'R', 'L', 'L', 'L', 'L', 'R', 'L', 'R', 'R', 'L',
        'L', 'R'],
      ['L', 'L', 'R', 'L', 'L', 'R', 'R', 'L', 'L', 'L', 'L', 'R', 'R', 'L',
        'L', 'R'],
      ['R', 'L', 'L', 'R', 'L', 'L', 'L', 'L', 'L', 'R', 'R', 'R', 'L', 'R',
        'R', 'R'],
      ['L', 'R', 'L', 'L', 'R', 'R', 'L', 'L', 'R', 'L', 'L', 'L', 'R', 'L',
        'L', 'R'],
      ['R', 'L', 'L', 'R', 'L', 'L', 'R', 'L', 'L', 'R', 'R', 'R', 'L', 'L',
        'R', 'L'],
      ['R', 'R', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'R', 'R', 'R', 'L', 'L',
        'L', 'L'],
      ['L', 'L', 'R', 'L', 'R', 'R', 'R', 'L', 'L', 'R', 'L', 'R', 'R', 'L',
        'L', 'R'],
      ['L', 'R', 'R', 'L', 'L', 'L', 'R', 'L', 'L', 'R', 'L', 'L', 'R', 'L',
        'L', 'L'],
      ['L', 'L', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'R', 'R', 'R', 'R', 'R',
        'R', 'L'],
      ['L', 'R', 'R', 'R', 'R', 'L', 'R', 'R', 'R', 'R', 'R', 'L', 'L', 'R',
        'L', 'L'],
    ],
  }];

  it('can verify 49 plinko drops using the "Plinko" provably fair algorithm.',
      function() {
        for (const {
          clientSeed,
          serverSeed,
          range,
          drops,
        } of TEST_CASES) {
          for (let nonce = range[0]; nonce <= range[1]; nonce++) {
            expect(PLINKO_VERIFIER.verify({
              clientSeed,
              serverSeed,
              nonce,
            })).to.be.eql(drops[nonce - range[0]]);
          }
        }
      });
});
