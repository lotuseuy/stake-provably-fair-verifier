import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Crash from '../../Games/Crash';

describe('Crash Verifier Tests', function() {
  const CRASH_VERIFIER = new Crash;

  const SEED =
    '0000000000000000001b34dc6a1e86083f95500b096231436e9b25cbdd0075c4';

  const TEST_CASES = [
    [{
      'hash':
        'f951df36a7a0781b332493fe5d0fe38f64a0517d9318c20a664ff88142b89699',
      'stoppage': '1.21',
    },
    {
      'hash':
        'ec43103fc75da482a4fb4b7d8ff70606099693920c70b6bda002dca7d6711a80',
      'stoppage': '1.40',
    },
    {
      'hash':
        '0e1ab031cd19b6b72d077887ae1d44cbf301f6854c67d1a407fdbed80d048273',
      'stoppage': '3.96',
    },
    {
      'hash':
        '39b6c0b2ed6caad21580e2f76514e1eabf6e2aed57079cbd36a58c35091005d9',
      'stoppage': '6.46',
    },
    {
      'hash':
        '7bde4c13a179022e3c6d516f2e5b991699ca59bfca3d27a27908f14ab9f3bad0',
      'stoppage': '1.16',
    },
    {
      'hash':
        '674aa748ddb21610215acae765da80e4e2c65c3c007c2624bd1a3a5e4e0338e0',
      'stoppage': '2.90',
    },
    {
      'hash':
        '3939b8cc2fa03bb369f0d10b86e1533723111e425eba967200e3dbbbf7d90390',
      'stoppage': '2.11',
    },
    {
      'hash':
        'cb6291becd51cee276648cc18795ad3858c830755fa73b7de921a01a4c09854a',
      'stoppage': '1.23',
    },
    {
      'hash':
        'fabf1c91de4b2e4bdf5ebc582fceb7bd7851420f7aa6ba9dc1eaa7be7dca583f',
      'stoppage': '24.47',
    },
    {
      'hash':
        'de059df6152008724056badf6336552a692f367acdb5a39b6c927eb911dd6446',
      'stoppage': '1.11',
    },
    ],
  ];

  it('can verify 10 crash stoppages using the "Crash" provably fair algorithm.',
      function() {
        for (const TEST_CASE of TEST_CASES) {
          for (const {
            hash,
            stoppage,
          } of TEST_CASE) {
            expect(CRASH_VERIFIER.verify({
              hash,
              clientSeed: SEED,
            })).to.be.equal(stoppage);
          }
        }
      });
});
