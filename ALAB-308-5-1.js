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
// Take an array of strings, and a number and return an array of the strings that are longer than the given number
const words = ["say", "hello", "in", "the", "morning"];
const longerThanNumber = words.filter((word) => word.length > 3);
// Take a number, n, and print every number between 1 and n without using loops. Use recursion
function printNums(n) {
  if (n > 0) {
    printNums(n - 1);
    console.log(n + " ");
  }
  return;
}

let n = 12;
const numbers = [1, 2, 3, 4, 5];
const strings = [`sour`, `skittles`, `are`, `the`, `best`];
const result = sumArray(numbers);
const result2 = averageArray(numbers);
const longest = longestString(strings);
console.log(result);
console.log(result2);
console.log(longest);
console.log(longerThanNumber);
console.log(printNums(n));

// Part 2: Thinking Methodically
let dataTester = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Sort array by age
function sortByAge(a, b) {
  return a.age - b.age;
}
// Filter the array to remove entries with an age greater than 50
const entries50OrLess = dataTester.filter((name) => {
  const is50OrLess = name.age <= 50;
  return is50OrLess;
});
// Map the array to change the “occupation” key to “job”
function rename() {
  dataTester = dataTester.map(function (obj) {
    // Assign new key
    obj["job"] = obj["occupation"];

    // Delete old key
    delete obj["occupation"];

    return obj;
  });
}
rename();
// Increment every age by 1
function incrementAge() {
  dataTester = dataTester.map(function (obj) {
    obj.age++;

    return obj;
  });
}
incrementAge();

// Use the reduce method to calculate the sum of the ages
const agesOfPeople = [41, 25, 19, 58, 111];

const sumOfAges = agesOfPeople.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// Then use the result to calculate the average age
const avgAge = sumOfAges / agesOfPeople.length;

console.log(dataTester.sort(sortByAge));
console.log(entries50OrLess);
console.log(`The sum of the ages for the group is ${sumOfAges}.`);
console.log(`The average age of the group is ${avgAge}.`);

// Part 3: Thinking Critically

// Take an object and increment its age field
const person = { name: `Jermal`, age: `31` };
function incrementer() {
  return person;
}
let incrementedAge = incrementer(person.age++);

// Take an object, make a copy, and increment the age field of the copy. Return the copy
const userDetails = {
  name: "Wynder",
  age: 13,
};
const cloneUser = { ...userDetails };
function incrementerTwo() {
  return cloneUser;
}
let incrementedAgeTwo = incrementerTwo(cloneUser.age++);

console.log(incrementedAge);
console.log(incrementedAgeTwo);
