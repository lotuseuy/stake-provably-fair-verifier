import sha256 from '../Utils/Sha256Utils';

/**
 * Verifies crash game has a provably fair hash for the current game by checking
 * if it forms the previous game's hash when hashed using SHA256.
 * @class
 */
export default class Crash {
  /**
   * Given hash and previousGameHash, will verify:
   * sha256(hash) == previousGameHash
   *
   * @param {Object} CRASH_SEED_DATA - Seed data for crash.
   * @param {string} CRASH_SEED_DATA.hash - The hash.
   * @param {string} CRASH_SEED_DATA.previousGameHash - The previous game hash.
   * @return {boolean} true if sha256(hash) == previousGameHash
   */
  verify({
    hash,
    previousGameHash,
  }) {
    return sha256(hash) === previousGameHash;
  }
}
