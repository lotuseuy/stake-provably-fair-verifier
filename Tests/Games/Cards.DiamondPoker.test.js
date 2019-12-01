import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Cards from '../../Games/Cards';

describe('Diamond Poker Verifier Tests', function() {
  const CARDS_VERIFIER = new Cards;

  const TEST_CASES = [{
    'clientSeed': '0IIspHiL',
    'serverSeed':
      'f19428a59b46edad1f01ecdb37561fc69a6911ab395fe4ee4afce83a9f154372',
    'serverSeedHash':
      'e170635e3b9282a8f46687947f559b34a1421f95f107cc4fca0f2c2e9fff0c48',
    'range': [1, 49],
    'games': [
      ['red', 'yellow', 'red', 'green', 'purple', 'yellow', 'blue',
        'cyan', 'red', 'purple'],
      ['orange', 'yellow', 'purple', 'red', 'purple', 'orange', 'yellow',
        'blue', 'purple', 'blue'],
      ['green', 'purple', 'orange', 'purple', 'cyan', 'green', 'red',
        'green', 'yellow', 'purple'],
      ['orange', 'purple', 'blue', 'purple', 'cyan', 'green', 'yellow',
        'purple', 'red', 'purple'],
      ['yellow', 'red', 'purple', 'orange', 'blue', 'orange', 'purple',
        'blue', 'purple', 'blue'],
      ['red', 'purple', 'purple', 'cyan', 'blue', 'red', 'blue', 'cyan',
        'cyan', 'green'],
      ['yellow', 'orange', 'green', 'yellow', 'purple', 'blue', 'orange',
        'red', 'red', 'cyan'],
      ['red', 'orange', 'red', 'cyan', 'purple', 'green', 'purple', 'orange',
        'red', 'green'],
      ['red', 'blue', 'cyan', 'green', 'purple', 'red', 'red', 'blue', 'green',
        'orange'],
      ['red', 'yellow', 'red', 'cyan', 'red', 'green', 'green', 'cyan', 'cyan',
        'orange'],
      ['blue', 'orange', 'red', 'blue', 'red', 'purple', 'red', 'green', 'cyan',
        'yellow'],
      ['green', 'red', 'blue', 'blue', 'yellow', 'red', 'yellow', 'red', 'red',
        'yellow'],
      ['blue', 'purple', 'green', 'green', 'orange', 'blue', 'orange', 'orange',
        'green', 'purple'],
      ['orange', 'green', 'blue', 'purple', 'blue', 'red', 'purple', 'cyan',
        'green', 'yellow'],
      ['purple', 'cyan', 'cyan', 'red', 'yellow', 'cyan', 'purple', 'purple',
        'red', 'red'],
      ['red', 'purple', 'cyan', 'cyan', 'green', 'purple', 'cyan', 'red', 'red',
        'red'],
      ['blue', 'yellow', 'green', 'yellow', 'cyan', 'yellow', 'blue', 'orange',
        'purple', 'green'],
      ['green', 'blue', 'green', 'yellow', 'green', 'orange', 'purple',
        'purple', 'purple', 'green'],
      ['yellow', 'purple', 'orange', 'cyan', 'blue', 'blue', 'red', 'purple',
        'yellow', 'orange'],
      ['red', 'purple', 'orange', 'purple', 'blue', 'orange', 'cyan', 'orange',
        'red', 'green'],
      ['cyan', 'blue', 'orange', 'cyan', 'yellow', 'cyan', 'green', 'red',
        'green', 'blue'],
      ['blue', 'green', 'red', 'green', 'blue', 'orange', 'blue', 'cyan',
        'blue', 'orange'],
      ['red', 'orange', 'cyan', 'red', 'yellow', 'yellow', 'green', 'purple',
        'blue', 'orange'],
      ['red', 'green', 'green', 'cyan', 'cyan', 'yellow', 'purple', 'blue',
        'orange', 'red'],
      ['orange', 'purple', 'yellow', 'green', 'purple', 'green', 'orange',
        'red', 'red', 'red'],
      ['red', 'cyan', 'blue', 'cyan', 'cyan', 'purple', 'red', 'red', 'yellow',
        'blue'],
      ['blue', 'red', 'blue', 'yellow', 'red', 'cyan', 'red', 'cyan', 'orange',
        'cyan'],
      ['yellow', 'yellow', 'green', 'orange', 'orange', 'red', 'yellow',
        'green', 'cyan', 'red'],
      ['green', 'red', 'purple', 'green', 'cyan', 'green', 'orange', 'green',
        'cyan', 'cyan'],
      ['red', 'yellow', 'yellow', 'red', 'purple', 'orange', 'yellow', 'cyan',
        'purple', 'cyan'],
      ['blue', 'orange', 'blue', 'red', 'blue', 'purple', 'cyan', 'green',
        'blue', 'red'],
      ['green', 'purple', 'orange', 'green', 'purple', 'cyan', 'purple', 'cyan',
        'green', 'yellow'],
      ['cyan', 'red', 'orange', 'red', 'purple', 'cyan', 'red', 'blue',
        'orange', 'green'],
      ['red', 'purple', 'blue', 'purple', 'orange', 'purple', 'cyan', 'green',
        'blue', 'red'],
      ['purple', 'blue', 'cyan', 'yellow', 'blue', 'green', 'cyan', 'yellow',
        'blue', 'cyan'],
      ['cyan', 'blue', 'yellow', 'cyan', 'cyan', 'cyan', 'red', 'blue', 'blue',
        'cyan'],
      ['yellow', 'yellow', 'cyan', 'purple', 'purple', 'cyan', 'purple', 'cyan',
        'purple', 'orange'],
      ['red', 'blue', 'cyan', 'red', 'cyan', 'yellow', 'blue', 'orange', 'cyan',
        'cyan'],
      ['orange', 'yellow', 'red', 'yellow', 'yellow', 'blue', 'green', 'cyan',
        'red', 'green'],
      ['cyan', 'blue', 'blue', 'cyan', 'purple', 'blue', 'green', 'blue',
        'yellow', 'blue'],
      ['purple', 'orange', 'red', 'orange', 'cyan', 'purple', 'cyan', 'green',
        'red', 'purple'],
      ['orange', 'green', 'orange', 'green', 'orange', 'purple', 'orange',
        'purple', 'red', 'blue'],
      ['yellow', 'red', 'blue', 'cyan', 'yellow', 'red', 'red', 'purple',
        'cyan', 'red'],
      ['blue', 'green', 'blue', 'green', 'red', 'yellow', 'blue', 'yellow',
        'yellow', 'green'],
      ['orange', 'green', 'blue', 'yellow', 'yellow', 'cyan', 'purple', 'red',
        'green', 'cyan'],
      ['cyan', 'green', 'orange', 'cyan', 'blue', 'green', 'cyan', 'blue',
        'blue', 'green'],
      ['blue', 'green', 'purple', 'purple', 'orange', 'green', 'yellow',
        'red', 'blue', 'red'],
      ['yellow', 'red', 'green', 'blue', 'purple', 'green', 'orange', 'blue',
        'cyan', 'purple'],
      ['red', 'orange', 'yellow', 'orange', 'red', 'orange', 'green', 'orange',
        'purple', 'purple'],
    ],
  }];

  // eslint-disable-next-line max-len
  it('can verify 49 diamond poker games using the "Diamond Poker" provably fair algorithm.',
      function() {
        for (const {
          clientSeed,
          serverSeed,
          range,
          games,
        } of TEST_CASES) {
          for (let nonce = range[0]; nonce <= range[1]; nonce++) {
            const CURRENT_GAME = games[nonce - range[0]];

            expect(CARDS_VERIFIER.verifyDiamondPoker({
              clientSeed,
              serverSeed,
              nonce,
            }).slice(0, CURRENT_GAME.length)).to.be.eql(CURRENT_GAME);
          }
        }
      });
});
