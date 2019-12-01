import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  expect,
} from 'chai';

import Wheel from '../../Games/Wheel';

describe('Wheel Verifier Tests', function() {
  const WHEEL_VERIFIER = new Wheel;

  const TEST_CASES = [{
    'clientSeed': 'qOw5CFFd',
    'serverSeed':
      '94487b24ed990e977c5c386bf78f4196bc8a35dd268b5459166e4b277d705cfb',
    'serverSeedHash':
      '3b9b9836373cab637ca6705a7506a59bcc2a72a20722a1cbfc206a6026cb2554',
    'range': [2, 31],
    'games': [{
      'segments': 10,
      'result': 5,
    }, {
      'segments': 10,
      'result': 0,
    }, {
      'segments': 10,
      'result': 2,
    }, {
      'segments': 10,
      'result': 7,
    }, {
      'segments': 10,
      'result': 4,
    }, {
      'segments': 10,
      'result': 1,
    }, {
      'segments': 20,
      'result': 6,
    }, {
      'segments': 20,
      'result': 4,
    }, {
      'segments': 20,
      'result': 5,
    }, {
      'segments': 20,
      'result': 5,
    }, {
      'segments': 20,
      'result': 1,
    }, {
      'segments': 20,
      'result': 17,
    }, {
      'segments': 30,
      'result': 27,
    }, {
      'segments': 30,
      'result': 24,
    }, {
      'segments': 30,
      'result': 7,
    }, {
      'segments': 30,
      'result': 20,
    }, {
      'segments': 30,
      'result': 12,
    }, {
      'segments': 30,
      'result': 12,
    }, {
      'segments': 40,
      'result': 31,
    }, {
      'segments': 40,
      'result': 18,
    }, {
      'segments': 40,
      'result': 34,
    }, {
      'segments': 40,
      'result': 29,
    }, {
      'segments': 40,
      'result': 27,
    }, {
      'segments': 40,
      'result': 27,
    }, {
      'segments': 50,
      'result': 14,
    }, {
      'segments': 50,
      'result': 29,
    }, {
      'segments': 50,
      'result': 3,
    }, {
      'segments': 50,
      'result': 23,
    }, {
      'segments': 50,
      'result': 1,
    }, {
      'segments': 50,
      'result': 30,
    }],
  }, {
    'clientSeed': '20fGnwY7',
    'serverSeed':
      'bcd8de8d37565eb34905a85dcd8eb07e62c992a351f42f34368d597578d8f0ee',
    'serverSeedHash':
      '4919e0b93d6b73199c3ad0e67316211eb7e0c59e8c695c30e6b7efaa9a255748',
    'range': [54, 60],
    'games': [{
      'segments': 50,
      'result': 49,
    }, {
      'segments': 50,
      'result': 14,
    }, {
      'segments': 50,
      'result': 34,
    }, {
      'segments': 50,
      'result': 2,
    }, {
      'segments': 50,
      'result': 29,
    }, {
      'segments': 50,
      'result': 40,
    }, {
      'segments': 50,
      'result': 14,
    }],
  }];

  it('can verify 37 wheel spins using the "Wheel" provably fair algorithm.',
      function() {
        for (const {
          clientSeed,
          serverSeed,
          range,
          games,
        } of TEST_CASES) {
          for (let nonce = range[0]; nonce <= range[1]; nonce++) {
            const CURRENT_GAME = games[nonce - range[0]];

            const RESULT = WHEEL_VERIFIER.verify({
              clientSeed,
              serverSeed,
              nonce,
            }, CURRENT_GAME.segments);

            expect(RESULT).to.be.equal(CURRENT_GAME.result);
          }
        }
      });
});
