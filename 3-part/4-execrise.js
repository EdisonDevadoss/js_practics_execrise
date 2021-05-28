// Exercise 4:
// Write a JavaScript program to get the largest even number from an array of integers.

const largestEven = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEven([1, 2, 3, 4, 5, 6]));
console.log(largestEven([1, 2, 33, 4, 5, 6]));
console.log(largestEven([1, 2, 33, 44, 5, 6]));
