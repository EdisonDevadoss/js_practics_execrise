// Exercise 1:
// Write a JavaScript program to find the number of even digits in a an array of integers

const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;


console.log(countEvenNumbers([1,2,3,4,5,6]))
console.log(countEvenNumbers([2,2,2,2,2,2]))
console.log(countEvenNumbers([3,7,9,10,5,100]))