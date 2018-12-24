/**
 * Shuffles the numbers in the array
 * @param {Array}
 */
export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Returns true if the numbers in the array are consecutive or false if not
 * @param {Array}
 */
export const consecutive = (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] !== null && arr[i - 1] !== null && arr[i] < arr[i - 1]) return false;
  }
  return true;
}
