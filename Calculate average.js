// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  let sum = array.reduce((acc, a) => acc + a, 0);
  return sum === 0 ? 0 : sum / array.length;
}
