import GameSeedUtils from '../Utils/GameSeedUtils';

/**
 * Verifies a plinko game.
 * @class
 */
export default class Plinko {
  /**
   * Verifies a plinko game by returning the 16 chosen directions for a given
   * GAME_SEED_DATA object.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {string[]} The directions.
   */
  verify(GAME_SEED_DATA) {
    const DIRECTIONS = ['LEFT', 'RIGHT'];

    return GameSeedUtils.extractFloats(GAME_SEED_DATA, 16).map((rowIndex) =>
      DIRECTIONS[Math.floor(rowIndex * 2)]);
  }
}
