import GameSeedUtils from '../Utils/GameSeedUtils';
import PayoutTables from './PayoutTables';

/**
 * Verifies a wheel game.
 * @class
 */
export default class Wheel {
  /**
   * Verifies a wheel game by returning the chosen multiplier for a given
   * GAME_SEED_DATA object, SEGMENTS, and RISK.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @param {integer} SEGMENTS - The number of segments.
   * @param {integer} RISK - The risk.
   * @return {string[]} The directions.
   */
  verify(GAME_SEED_DATA, SEGMENTS, RISK) {
    const MULTIPLIER_INDEX = Math.floor(GameSeedUtils.extractFloat(
        GAME_SEED_DATA) * SEGMENTS);

    return PayoutTables.getWheelPayoutTable()[SEGMENTS][RISK][MULTIPLIER_INDEX]
        .toFixed(2);
  }
}
