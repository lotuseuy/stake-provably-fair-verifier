import sha256 from '../Utils/Sha256Utils';

/**
 * Verifies all games except Crash, making sure the revealed server seed when
 * hashed using SHA256 is equal to the server seed hash.
 * @class
 */
export default class Default {
  /**
   * Given serverSeed and serverSeedHash, will verify:
   * sha256(serverSeed) == serverSeedHash
   *
   * @param {Object} GAME_SEED_DATA - The game seed data.
   * @param {string} GAME_SEED_DATA.serverSeed - The server seed.
   * @param {string} GAME_SEED_DATA.serverSeedHash - The server seed hash.
   * @return {boolean} true if sha256(serverSeed) == serverSeedHash
   */
  verify({
    serverSeed,
    serverSeedHash,
  }) {
    return sha256(serverSeed) === serverSeedHash;
  }
}
