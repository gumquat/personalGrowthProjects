// 1.) node runs on a server, not in a browser (this means its purely backend)
// 2.) the console is the terminal window
console.log('hello server')
// 3.) global object instead of window object
// think of global objects like the 'window' object in a web browser
console.log(global)
// 4.) has common core modules 
// events, file system operations, HTTP, URL, Path, Utilities (util, typeof, isntanceof, etc.)

// below is the syntax/how to import modules. We're importing 'os'.
const os = require('os');
const path = require('path');

// below is material that uses the 'os' and 'path' module imports
/***
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
***/

//you can import module files using this syntax:
// const math = require('./math');
//another way is to name the individual functions in the module itself ...
//(make sure you use module.exports in the muodule itself!)
//this makes using them in your code shorter 'add(2, 3)' instead of 'math.add(2, 3)'
const {add, subtract, multiply, divide} = require('./math')

// below is the material that uses the './math' module we made
console.log(add(1, 2))
console.log(subtract(1, 2))
console.log(multiply(1, 2))
console.log(divide(1, 2))

// NodeJS is missing some JS APIs like 'fetch'