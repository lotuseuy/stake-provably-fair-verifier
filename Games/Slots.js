import GameSeedUtils from '../Utils/GameSeedUtils';

/**
 * Verifies a slots game.
 * @class
 */
export default class Slots {
  /**
   * Verifies a slot game by returning the central positions for each reel.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @param {integer} ROUNDS - The number of rounds.
   * @return {string[]} The central positions for each reel.
   */
  verify(GAME_SEED_DATA, ROUNDS) {
    return GameSeedUtils.extractFloats(GAME_SEED_DATA, ROUNDS * 5 + 5)
        .slice(-5)
        .map((float, index) =>
          Math.floor(float * (index === 4 ? 41 : 30)));
  }
}
