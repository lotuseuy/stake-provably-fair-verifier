import GameSeedUtils from '../Utils/GameSeedUtils';

/**
 * Verifies a roulette game.
 * @class
 */
export default class Roulette {
  /**
   * Verifies a roulette game by returning the chosen pocket for a given
   * GAME_SEED_DATA object.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {integer} The chosen number.
   */
  verify(GAME_SEED_DATA) {
    return Math.floor(GameSeedUtils.extractFloat(GAME_SEED_DATA) * 37);
  }
}
