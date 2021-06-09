// Exercise 2:
// Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.

const countLetters = (str, letters = ['a', 'e', 'i', 'o', 'u']) =>
  str.split('').filter((row) => letters.indexOf(row) > -1).length;

console.log(countLetters('Edison'));
