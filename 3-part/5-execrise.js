// Exercise 5:
// Write a JavaScript program to replace the first digit in a string (should contain at least one
// digit) with a $ character.

const replaceDigit = (str) => str.replace(/[0-9]/, '$');


console.log(replaceDigit('EdisonDevadoss1996'))
console.log(replaceDigit('EdisonDevadoss21'))

