import GameSeedUtils from '../Utils/GameSeedUtils';

/**
 * Verifies a wheel game.
 * @class
 */
export default class Wheel {
  /**
   * Verifies a wheel game by returning the chosen result for given
   * GAME_SEED_DATA object and SEGMENTS.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @param {integer} SEGMENTS - The number of segments.
   * @return {string[]} The directions.
   */
  verify(GAME_SEED_DATA, SEGMENTS) {
    return Math.floor(GameSeedUtils.extractFloat(GAME_SEED_DATA) * SEGMENTS);
  }
}
