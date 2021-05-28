// Exercise 4:
// Given two values, write a JavaScript program to find out which one is nearest to 100

const closeTo100 = (a, b) => (100 - a < 100 - b ? a : b);

console.log(closeTo100(99, 1));
console.log(closeTo100(49, 51));
console.log(closeTo100(50, 50));
