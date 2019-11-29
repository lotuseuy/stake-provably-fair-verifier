import ArrayUtils from '../Utils/ArrayUtils';
import GameSeedUtils from '../Utils/GameSeedUtils';

/**
 * Verifies a mines game.
 * @class
 */
export default class Mines {
  /**
   * Verifies a mines game by returning the 24 chosen mines for a given
   * GAME_SEED_DATA object.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {integer[]} The mines
   */
  verify(GAME_SEED_DATA) {
    const MAX_MINES = 25;

    const MINES = ArrayUtils.generateArrayWithRange(1, MAX_MINES);

    return GameSeedUtils.extractFloats(GAME_SEED_DATA, MAX_MINES)
        .map((float, index) =>
          MINES.splice(Math.floor(float * (MAX_MINES - index)), 1)[0]);
  }
}
