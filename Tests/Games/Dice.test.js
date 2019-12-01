import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Dice from '../../Games/Dice';

describe('Dice Verifier Tests', function() {
  const DICE_VERIFIER = new Dice;

  const TEST_CASES = [{
    'clientSeed': 'aR3kRBVn',
    'serverSeed':
      '0f6e8aba300b7f1217ee46606773cf6046b524f74505cf2124ffe181ad6b9dbf',
    'serverSeedHash':
      '97139e593bce24783a3c4be064b07a07952e08f7f6f5d16a28abfc69c8453f99',
    'range': [3, 51],
    'rolls': [
      '59.67', // 3
      '75.88', // 4
      '12.86', // 5
      '28.39', // 6
      '29.19', // 7
      '1.43', // 8
      '16.06', // 9
      '45.69', // 10
      '3.44', // 11
      '84.18', // 12
      '6.97', // 13
      '21.98', // 14
      '32.30', // 15
      '73.17', // 16
      '24.28', // 17
      '1.62', // 18
      '38.07', // 19
      '45.90', // 20
      '20.33', // 21
      '0.06', // 22
      '92.84', // 23
      '91.58', // 24
      '5.82', // 25
      '30.36', // 26
      '52.19', // 27
      '88.18', // 28
      '48.29', // 29
      '0.26', // 30
      '6.56', // 31
      '13.50', // 32
      '86.27', // 33
      '98.51', // 34
      '41.90', // 35
      '99.18', // 36
      '15.90', // 37
      '0.80', // 38
      '66.35', // 39
      '26.37', // 40
      '45.98', // 41
      '1.82', // 42
      '44.77', // 43
      '28.58', // 44
      '92.02', // 45
      '67.25', // 46
      '40.15', // 47
      '89.87', // 48
      '85.34', // 49
      '59.78', // 50
      '30.35', // 51
    ],
  }];

  it('can verify 49 dice rolls using the "Dice Roll" provably fair algorithm.',
      function() {
        for (const {
          clientSeed,
          serverSeed,
          range,
          rolls,
        } of TEST_CASES) {
          for (let nonce = range[0]; nonce <= range[1]; nonce++) {
            expect(DICE_VERIFIER.verify({
              clientSeed,
              serverSeed,
              nonce,
            })).to.be.equal(rolls[nonce - range[0]]);
          }
        }
      });
});
