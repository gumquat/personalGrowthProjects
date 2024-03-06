const fsPromises = require ('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        // 1A.) read data from an existing file
        const data = await fsPromises.readFile(path.join(__dirname, 'textFiles', 'hello.txt'), 'utf8')
        console.log(data);
        // 1B.) 'unlink' or delete the original file
        await fsPromises.unlink(path.join(__dirname, 'textFiles', 'hello.txt'));
        // 2.) write that data to a new file
        await fsPromises.writeFile(path.join(__dirname, 'textFiles', 'promiseWrite.txt'), data);
        // 3.) append data to that new file
        await fsPromises.appendFile(path.join(__dirname, 'textFiles', 'promiseWrite.txt'), '\n\nappended data');
        // 4.) rename the new file
        await fsPromises.rename(path.join(__dirname, 'textFiles', 'promiseWrite.txt'), (path.join(__dirname, 'textFiles', 'promiseComplete.txt')));
        // 5.) read the newly named, new file
        const newData = await fsPromises.readFile(path.join(__dirname, 'textFiles', 'promiseComplete.txt'), 'utf8')
        // 6.) log the data from that file to console
        console.log(newData);
    } catch(err) {
        console.error(err);
    }
}

fileOps();

/**
fs.readFile(path.join(__dirname, 'textFiles', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})
**/

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

//this performs what we want it to BUT it's 'callback hell' too many callback functions
/**
fs.writeFile(path.join(__dirname, 'textFiles', 'reply.txt'), 'Hello, nice to meet you', (err) => {
    if (err) throw err;
    console.log('Write sucessful');

    fs.appendFile(path.join(__dirname, 'textFiles', 'reply.txt'), '\n\nPsych! its NOT nice to meet you', (err) => {
        if (err) throw err;
        console.log('Append sucessful');

        fs.rename(path.join(__dirname, 'textFiles', 'reply.txt'), 'renamedReply.txt', (err) => {
            if (err) throw err;
            console.log('Rename sucessful');
        })
    })
})
**/
