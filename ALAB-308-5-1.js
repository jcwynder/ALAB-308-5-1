// 1. Thinking Functionally

// Takes an array of numbers and returns the sum
function sumArray(array) {
  var total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

var numbers = [1, 2, 3, 4, 5];
var result = sumArray(numbers);
console.log(result);
