// one way to export functions from a module is to make const variables
// that contain functionality and, in a later line of code, export them as modules
/***
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = {add, subtract, multiply, divide}
***/

// a more code-friendly way of doing it is to use the following syntax
// exports.[functionName] = the functionality
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;