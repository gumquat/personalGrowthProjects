// part 1
console.log('hello world');

console.log(global.luckyNum);

global.luckyNum = '23';

console.log(global.luckyNum);

// part 2
console.log(process.platform);
// console.log(process.platform.env.USER);
process.on('exit', function() {
// do something here
})

//part 3
const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('Yum!')
})
eventEmitter.emit('lunch');

//part 4
// const {readFile, readFileSync} = require('fs');
// const txt = readFileSync('./hello.txt', 'utf8');
// readFile('./hello/txt', 'utf8', () =>{
//     console.log(txt)
// })
// console.log('Do this first')

//part 5
// const {readFile} = require('fs').promises;
// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }

const {readFile} = require('fs').promises

//part 6
const myModule = require('./myModule');
console.log(myModule)

//part 7
const express = require('express');
const app = express();
app.get('/', async() => {
    // readFile('./home.html', 'utf8', () => {
    //     if (err){
    //         response.status(500).send('sorry, out of order')
    //     }
    //     response.send(html);
    // })
    response.send(await readFile('./home.html', 'utf8'))
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))