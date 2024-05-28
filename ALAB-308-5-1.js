// 1. Thinking Functionally

// Takes an array of numbers and returns the sum
function sumArray(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
// Takes an array of numbers and returns the average
function averageArray(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}
// Takes an array of strings and return the longest
function longestString(array) {
  let maxLength = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
    }
  }
  const longestString = array.filter((str) => str.length === maxLength);

  return longestString;
}
const numbers = [1, 2, 3, 4, 5];
const strings = [`sour`, `skittles`, `are`, `the`, `best`];
const result = sumArray(numbers);
const result2 = averageArray(numbers);
const longest = longestString(strings);
console.log(result);
console.log(result2);
console.log(longest);
