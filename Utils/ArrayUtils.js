/**
 * Provides utility methods for creating and manipulating arrays.
 * @class
 */
export default class ArrayUtils {
  /**
   * Generates a new array containing a range of numbers from min to max.
   *
   * @param {integer} MIN - The min.
   * @param {integer} MAX - The max.
   * @return {integer[]} The array covering the given range.
   */
  static generateArrayWithRange(MIN, MAX) {
    return Array.from({length: MAX - MIN + 1}, (_, index) => index + MIN);
  }

  /**
   * Generates a new array containing only unique items from the given array.
   *
   * @param {Object[]} ARRAY - The array.
   * @return {Object[]} The array containing unique items.
   */
  static generateArrayOfUniqueItems(ARRAY) {
    return [...new Set(ARRAY)];
  }

  /**
   * Chunks array by given size.
   *
   * @param {Object[]} ARRAY - The array.
   * @param {integer} SIZE - The size.
   * @return {Object[]} The array split into chunks.
   */
  static chunkArray(ARRAY, SIZE) {
    return Array.from({length: Math.ceil(ARRAY.length / SIZE)}, (_, index) =>
      ARRAY.slice(index * SIZE, index * SIZE + SIZE));
  }
}
