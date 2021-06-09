// Exercise 4:
// Write a JavaScript function to extract unique characters from a string.

// Method 1

// const getUniqueChars = (str) =>
//   str
//     .split('')
//     .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

// Method 2

const getUniqueChars = (str) => [...new Set(str.split(''))];

console.log(getUniqueChars('edisondevadoss'));
