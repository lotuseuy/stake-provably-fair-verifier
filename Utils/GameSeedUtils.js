import ArrayUtils from './ArrayUtils';
import {sha256} from './Sha256Utils';

/**
 * Provides utility method for extracting floats from a game seed.
 * @class
 */
export default class GameSeedUtils {
  /**
   * Given a GAME_SEED_DATA object, will extract a single floats from its
   * HMAC_SHA256 sequence.
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @return {float} The float.
   */
  static extractFloat(GAME_SEED_DATA) {
    return GameSeedUtils.extractFloats(GAME_SEED_DATA, 1)[0];
  }

  /**
   * Given a GAME_SEED_DATA object, will extract a given number of floats from
   * its HMAC_SHA256 sequence.
   *
   * @see {@link https://stake.com/provably-fair/conversions}
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @param {integer} count - The number of floats to extract.
   * @return {float[]} The floats.
   */
  static extractFloats(GAME_SEED_DATA, count) {
    const BYTE_GENERATOR = GameSeedUtils._byteGenerator(GAME_SEED_DATA);

    const BYTES = Array.from({length: count * 4}, () =>
      BYTE_GENERATOR.next().value);

    const BYTE_TO_FLOAT = (byte) => byte.reduce((result, value, index) =>
      result + (value / (256 ** (index + 1))), 0);

    return ArrayUtils.chunkArray(BYTES, 4).map(BYTE_TO_FLOAT);
  }

  /**
   * Given a GAME_SEED_DATA object will keep yielding the next byte from its
   * HMAC_SHA256 sequence.Please be aware this method will start with cursor
   * set to zero, and in the case of all 32 bytes getting used it will
   * increment the cursor to generate a new HMAC_SHA256 sequence.
   *
   * @see {@link https://stake.com/provably-fair/implementation}
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.clientSeed - The client seed.
   * @param {integer} GAME_SEED_DATA.nonce - The nonce.
   * @yields {number} the next byte in the HMAC_SHA256 sequence
   */
  static* _byteGenerator({serverSeed, clientSeed, nonce}) {
    let currentRound = 0;

    while (true) {
      const HASH = sha256.hmac.create(serverSeed);
      HASH.update(`${clientSeed}:${nonce}:${currentRound++}`);

      const BUFFER = HASH.digest();

      for (let i = 0; i < 32; i++) {
        yield Number(BUFFER[i]);
      }
    }
  }
}
