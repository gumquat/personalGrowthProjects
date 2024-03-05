const fs = require ('fs');
const path = require('path')

fs.readFile(path.join(__dirname, '.', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

// this is an 'eventListener' - the syntax is 'process.on(event, callback)'
// 'event' is the function youre listening for
// 'callback' is the function to be executed when that event occurs
// this one is a common one, that listens for 'uncaughtException'
// you can use it log errors or run error-handling tasks
// in this one we use it to exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})

fs.writeFile(path.join(__dirname, '.', 'reply.txt'), 'Hello, nice to meet you', (err) => {
    if (err) throw err;
    console.log('Write sucessful');

    fs.appendFile(path.join(__dirname, '.', 'reply.txt'), '\n\nPsych! its NOT nice to meet you', (err) => {
        if (err) throw err;
        console.log('Append sucessful');

        fs.rename(path.join(__dirname, '.', 'reply.txt'), 'renamedReply.txt', (err) => {
            if (err) throw err;
            console.log('Rename sucessful');
        })
    })
})

