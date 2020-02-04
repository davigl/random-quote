/**
 * Get a random number.
 *
 * @param {number} min
 * @param {number} max
 */

export const random = (min, max) => {
  return Math.random() * (max - min) + min;
};
