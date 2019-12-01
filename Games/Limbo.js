import GameSeedUtils from '../Utils/GameSeedUtils';

/**
 * Verifies a limbo game.
 * @class
 */
export default class Limbo {
  /**
   * Verifies a limbo game by returning the stoppage point for a given
   * GAME_SEED_DATA object.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {float} The float.
   */
  verify(GAME_SEED_DATA) {
    const MAX_MULTIPLIER = 1e8;

    const FLOAT_POINT = MAX_MULTIPLIER /
      (GameSeedUtils.extractFloat(GAME_SEED_DATA) * MAX_MULTIPLIER) * 0.99;

    return (Math.floor(FLOAT_POINT * 100) / 100).toFixed(2);
  }
}
