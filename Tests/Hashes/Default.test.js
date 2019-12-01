import {
  expect,
} from 'chai';

import DefaultHashVerifier from '../../Hashes/Default';

describe('Default Hash Verifier Tests', function() {
  const DEFAULT_HASH_VERIFIER = new DefaultHashVerifier;

  const TEST_CASES = [
    {
      'serverSeed':
        'ae5baafb37cfd372fcf07cc85d3b924af4ad1691dd451529b13bf8f272926525',
      'serverSeedHash':
        '3ac95843b5415eef35cbd1556879739e9e766dcf2811265c8e2ca1f45a06d4cc',
    },
    {
      'serverSeed':
        'abf5e01d286b951bf4ef72b87720aeed3889b467660deeec3a0b1df677282ad6',
      'serverSeedHash':
        'abc88e14244679872089502840777fef301cd3dd958922face034bc704350b1d',
    },
    {
      'serverSeed':
        'f19428a59b46edad1f01ecdb37561fc69a6911ab395fe4ee4afce83a9f154372',
      'serverSeedHash':
        'e170635e3b9282a8f46687947f559b34a1421f95f107cc4fca0f2c2e9fff0c48',
    },
    {
      'serverSeed':
        '0f6e8aba300b7f1217ee46606773cf6046b524f74505cf2124ffe181ad6b9dbf',
      'serverSeedHash':
        '97139e593bce24783a3c4be064b07a07952e08f7f6f5d16a28abfc69c8453f99',
    },
    {
      'serverSeed':
        '9f7e2493d3e64681667295f3a2ffd7da0fcf1d24181bbb1ca71df589304e878d',
      'serverSeedHash':
        'd6679446de4072486dbcbed19aaaa4c93c8d8fa02afe57efe17ad1b0632593cf',
    },
    {
      'serverSeed':
        '0723cade85eb0996f4a20eabedd973fae0e301e709f34bc87be5bf7f347f7aab',
      'serverSeedHash':
        '2d370d8dd501039579530f781d5cac42c0897ff47fb69352a46e4c2f773e029e',
    },
    {
      'serverSeed':
        'e8c495e2af38633f6ad42e0da12c8e3de7420d5284d054e36e83fdd2f13db44d',
      'serverSeedHash':
        'ec8cb86c52ac4bfeb60ce5bc2d5d7b7d91036dc543c006febf7ad46ea0636b50',
    },
    {
      'serverSeed':
        '05ab9aeec2e6a8cd924f2aeab4dabe68f53c75c43c5fde1f2e0b5103cdd8efc9',
      'serverSeedHash':
        '892c49b804dea2b7ab4845b70f5a0ad8fbe05a6d90a6defb4b532112b87b6889',
    },
    {
      'serverSeed':
        '2c4f173f849a236499c5f6b7fe245a2d1b20d1c00f28caa7aa9186b9b0137138',
      'serverSeedHash':
        'f94239a8450e06eacc15ebdba496b67b98594c365ebe529a178e5a13df9abb79',
    },
    {
      'serverSeed':
        'e53bf7c2493baffcf1fbc7a63673f54cb5bb7a50a9b6a8e5b0ff1fefbd27ac6e',
      'serverSeedHash':
        'cd4da1cace16ad892760b38b18b72adb86dc5f007d1390d805ac452c4a9ef270',
    },
    {
      'serverSeed':
        'accc520a414257281e9259fe5515f56e7f6882a7bfab78707158f95b444a8332',
      'serverSeedHash':
        '1a4fea0d96d381839c573dfb8020e46347405eafcbdc540d76d135d946515609',
    },
    {
      'serverSeed':
        '94487b24ed990e977c5c386bf78f4196bc8a35dd268b5459166e4b277d705cfb',
      'serverSeedHash':
        '3b9b9836373cab637ca6705a7506a59bcc2a72a20722a1cbfc206a6026cb2554',
    },
    {
      'serverSeed':
        'bcd8de8d37565eb34905a85dcd8eb07e62c992a351f42f34368d597578d8f0ee',
      'serverSeedHash':
        '4919e0b93d6b73199c3ad0e67316211eb7e0c59e8c695c30e6b7efaa9a255748',
    },
  ];

  it('can verify the integrity of 13 revealed seeds.', function() {
    for (const TEST_CASE of TEST_CASES) {
      expect(DEFAULT_HASH_VERIFIER.verify(TEST_CASE)).to.be.true;
    }
  });
});
