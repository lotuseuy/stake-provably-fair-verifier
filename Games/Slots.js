import GameSeedUtils from '../Utils/GameSeedUtils';

const SLOTS_TABLE = [
  [
    'five', 'queen', 'ten', 'three', 'jack', 'ace',
    'four', 'ten', 'queen', 'two', 'nine', 'ten',
    'scatter', 'queen', 'jack', 'wild', 'queen',
    'ace', 'two', 'king', 'one', 'queen', 'five',
    'king', 'four', 'ten', 'one', 'nine', 'three',
    'ten',
  ],
  [
    'queen', 'jack', 'three', 'queen', 'ace', 'wild',
    'queen', 'jack', 'five', 'nine', 'queen', 'three',
    'king', 'one', 'jack', 'two', 'ten', 'one',
    'nine', 'scatter', 'ace', 'four', 'ten', 'king',
    'two', 'jack', 'queen', 'five', 'jack', 'four',
  ],
  [
    'king', 'nine', 'five', 'ten', 'three', 'king',
    'jack', 'wild', 'queen', 'ten', 'three', 'nine',
    'jack', 'one', 'ace', 'ten', 'four', 'ace',
    'king', 'one', 'nine', 'ten', 'two', 'queen',
    'nine', 'four', 'king', 'five', 'nine',
    'scatter',
  ],
  [
    'king', 'nine', 'five', 'ace', 'two', 'jack',
    'one', 'ten', 'four', 'jack', 'three', 'queen',
    'five', 'jack', 'ten', 'four', 'ace', 'queen',
    'scatter', 'ten', 'king', 'three', 'jack', 'four',
    'nine', 'ace', 'two', 'nine', 'ace', 'wild',
  ],
  [

    'three', 'ten', 'jack', 'two', 'king', 'ten',
    'wild', 'king', 'nine', 'one', 'ten', 'five',
    'ace', 'jack', 'scatter', 'nine', 'ace', 'four',
    'queen', 'ace', 'four', 'ten', 'five', 'queen',
    'three', 'nine', 'wild', 'jack', 'two', 'queen',
    'king', 'five', 'jack', 'ten', 'three', 'queen',
    'four', 'nine', 'one', 'ace', 'nine',
  ],
];

/**
 * Verifies a slots game.
 * @class
 */
export default class Slots {
  /**
   * Verifies a game of slots by returning an array of central positions for
   * each possible round given through the GAME_SEED_DATA object.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @return {string[]} An array of central positions for each possible round.
   */
  verify(GAME_SEED_DATA) {
    const RESULT = [];

    for (let i = 0, rounds = 1; i < rounds; i++) {
      const OFFSETS = this._getOffsetsForRound(GAME_SEED_DATA, i);
      const ITEMS = this._getItemsShownForOffsets(OFFSETS);

      RESULT.push(OFFSETS);

      rounds += (ITEMS.reduce((sum, item) =>
        sum + (item === 'scatter'), 0) >= 3) * 15;
    }

    return RESULT;
  }

  /**
   * Gets offsets selected for given round.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @param {integer} ROUND - The round.
   * @return {integer[]} offsets selected for given round.
   */
  _getOffsetsForRound(GAME_SEED_DATA, ROUND) {
    return GameSeedUtils.extractFloats(GAME_SEED_DATA, ROUND * 5 + 5)
        // eslint-disable-next-line max-len
        .slice(-5).map((float, i) => Math.floor(float * SLOTS_TABLE[i % 5].length));
  }

  /**
   * Gets items displayed for reels given offsets.
   *
   * @param {integer[]} OFFSETS - The offsets.
   * @return {Object} items displayed in reels given offsets.
   */
  _getItemsShownForOffsets(OFFSETS) {
    const CHOSEN = [];

    for (let i = 0; i < 5; i++) {
      // top row
      CHOSEN.push(SLOTS_TABLE[i][OFFSETS[i] - 1 < 0 ?
        SLOTS_TABLE[i].length - 1 : OFFSETS[i] - 1]);

      // middle row
      CHOSEN.push(SLOTS_TABLE[i][OFFSETS[i]]);

      // bottom row
      CHOSEN.push(SLOTS_TABLE[i][OFFSETS[i] + 1 === SLOTS_TABLE.length ?
        0 : OFFSETS[i] + 1]);
    }

    return CHOSEN;
  }
}
