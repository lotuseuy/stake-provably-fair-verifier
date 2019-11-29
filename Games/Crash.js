import {sha256} from '../Utils/Sha256Utils';

/**
 * Verifies a crash game.
 * @class
 */
export default class Crash {
  /**
   * Verifies a game of Crash given a hash and client seed.
   *
   * @param {Object} CRASH_SEED_DATA - Seed data for crash.
   * @param {string} CRASH_SEED_DATA.hash - The hash.
   * @param {string} CRASH_SEED_DATA.clientSeed - The client seed.
   * @return {float} The result.
   */
  verify({
    hash,
    clientSeed,
  }) {
    const HEX = sha256.hmac.update(hash, clientSeed).hex();
    const INT = parseInt(HEX.substr(0, 8), 16);

    const HOUSE_EDGE = 0.99;
    const CRASH_POINT = Math.max(1, (2 ** 32 / (INT + 1)) * HOUSE_EDGE);

    return (Math.floor(CRASH_POINT * 100) / 100).toFixed(2);
  }
}
