// Exercise 2:
// Write a JavaScript exercise to get the extension of a filename.

const getFileExtenstion = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtenstion('index.html'));
console.log(getFileExtenstion('webpack.config.js'));
