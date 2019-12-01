import ArrayUtils from '../Utils/ArrayUtils';
import GameSeedUtils from '../Utils/GameSeedUtils';

/**
 * Verifies a keno game.
 * @class
 */
export default class Keno {
  /**
   * Verifies a keno game by returning the 10 chosen tiles for a given
   * GAME_SEED_DATA object.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {integer[]} The tiles
   */
  verify(GAME_SEED_DATA) {
    const MAX_SQUARES = 39;

    const SQUARES = ArrayUtils.generateArrayWithRange(0, MAX_SQUARES);

    return GameSeedUtils.extractFloats(GAME_SEED_DATA, 10).map((float, index) =>
      SQUARES.splice(Math.floor(float * (MAX_SQUARES - index + 1)), 1)[0]);
  }
}
