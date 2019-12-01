import ArrayUtils from '../Utils/ArrayUtils';
import GameSeedUtils from '../Utils/GameSeedUtils';

/**
 * Verifies all card games.
 * @class
 */
export default class Cards {
  /**
   * Verifies a blackjack card game by returning the first 52 cards for
   * a given GAME_SEED_DATA object.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {Object[]} The cards.
   */
  verifyBlackjack(GAME_SEED_DATA) {
    return this._getCards(GAME_SEED_DATA, 52);
  }

  /**
   * Verifies a hilo card game by returning the first 52 cards for a given
   * GAME_SEED_DATA object.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {Object[]} The cards.
   */
  verifyHilo(GAME_SEED_DATA) {
    return this._getCards(GAME_SEED_DATA, 52);
  }

  /**
   * Verifies a video poker card game by returning the first 10 cards for
   * a given GAME_SEED_DATA object. Uses the fisher-yates shuffle.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {Object[]} The cards.
   */
  verifyVideoPoker(GAME_SEED_DATA) {
    return this._getCards(GAME_SEED_DATA, 10, true);
  }

  /**
   * Verifies a baccarat card game by returning the first 6 cards for
   * a given GAME_SEED_DATA object.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {Object[]} The cards.
   */
  verifyBaccarat(GAME_SEED_DATA) {
    return this._getCards(GAME_SEED_DATA, 6);
  }

  /**
   * Verifies a diamond poker card game by returning the first 10 cards
   * for a given GAME_SEED_DATA object.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {Object[]} The cards.
   */
  verifyDiamondPoker(GAME_SEED_DATA) {
    const GEMS = ['green', 'purple', 'yellow', 'red', 'cyan', 'orange', 'blue'];
    const MAX_GEMS = 10;

    return GameSeedUtils.extractFloats(GAME_SEED_DATA, MAX_GEMS).map(
        (cardIndex) => GEMS[Math.floor(cardIndex * 7)]);
  }

  /**
   * Given a GAME_SEED_DATA object, will get the given number of cards
   * from the HMAC_SHA256 sequence it generates - supports fisher yates.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @param {integer} COUNT - The number of cards.
   * @param {boolean} [FISHER_YATES=false] - TRUE to use fisher yates.
   * @return {object[]} The cards.
   */
  _getCards(GAME_SEED_DATA, COUNT, FISHER_YATES = false) {
    const CARDS = ArrayUtils.generateArrayWithRange(0, 207);

    return GameSeedUtils.extractFloats(GAME_SEED_DATA, COUNT).map(
        (cardIndex, index) => FISHER_YATES ?
          CARDS.splice(Math.floor(cardIndex * (52 - index)), 1)[0] :
          CARDS[Math.floor(cardIndex * 52)]);
  }
}
