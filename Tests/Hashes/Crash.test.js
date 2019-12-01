import {
  expect,
} from 'chai';

import CrashHashVerifier from '../../Hashes/Crash';

describe('Crash Hash Verifier Tests', function() {
  const CRASH_HASH_VERIFIER = new CrashHashVerifier;

  const TEST_CASES = [{
    'hash':
      'de059df6152008724056badf6336552a692f367acdb5a39b6c927eb911dd6446',
    'previousGameHash':
      'fabf1c91de4b2e4bdf5ebc582fceb7bd7851420f7aa6ba9dc1eaa7be7dca583f',
  }, {
    'hash':
      'fabf1c91de4b2e4bdf5ebc582fceb7bd7851420f7aa6ba9dc1eaa7be7dca583f',
    'previousGameHash':
      'cb6291becd51cee276648cc18795ad3858c830755fa73b7de921a01a4c09854a',
  }, {
    'hash':
      'cb6291becd51cee276648cc18795ad3858c830755fa73b7de921a01a4c09854a',
    'previousGameHash':
      '3939b8cc2fa03bb369f0d10b86e1533723111e425eba967200e3dbbbf7d90390',
  }, {
    'hash':
      '3939b8cc2fa03bb369f0d10b86e1533723111e425eba967200e3dbbbf7d90390',
    'previousGameHash':
      '674aa748ddb21610215acae765da80e4e2c65c3c007c2624bd1a3a5e4e0338e0',
  }, {
    'hash':
      '674aa748ddb21610215acae765da80e4e2c65c3c007c2624bd1a3a5e4e0338e0',
    'previousGameHash':
      '7bde4c13a179022e3c6d516f2e5b991699ca59bfca3d27a27908f14ab9f3bad0',
  }, {
    'hash':
      '7bde4c13a179022e3c6d516f2e5b991699ca59bfca3d27a27908f14ab9f3bad0',
    'previousGameHash':
      '39b6c0b2ed6caad21580e2f76514e1eabf6e2aed57079cbd36a58c35091005d9',
  }, {
    'hash':
      '39b6c0b2ed6caad21580e2f76514e1eabf6e2aed57079cbd36a58c35091005d9',
    'previousGameHash':
      '0e1ab031cd19b6b72d077887ae1d44cbf301f6854c67d1a407fdbed80d048273',
  }, {
    'hash':
      '0e1ab031cd19b6b72d077887ae1d44cbf301f6854c67d1a407fdbed80d048273',
    'previousGameHash':
      'ec43103fc75da482a4fb4b7d8ff70606099693920c70b6bda002dca7d6711a80',
  }, {
    'hash':
      'ec43103fc75da482a4fb4b7d8ff70606099693920c70b6bda002dca7d6711a80',
    'previousGameHash':
      'f951df36a7a0781b332493fe5d0fe38f64a0517d9318c20a664ff88142b89699',
  }];

  it('can verify the integrity of 9 crash games.', function() {
    for (const TEST_CASE of TEST_CASES) {
      expect(CRASH_HASH_VERIFIER.verify(TEST_CASE)).to.be.true;
    }
  });
});
