// Exercise 2:
// Write a JavaScript program to find the number of even values up to a given number

const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
  const returnArray = [];
  for (let i = 1; i <= num; i++) {
    returnArray.push(i);
  }
  return returnArray;
};

console.log(countEvenNumbers(createArrayOfNumbers(9)));
console.log(countEvenNumbers(createArrayOfNumbers(100)));
