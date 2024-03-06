// understanding the read and write streams

const fs = require('fs');
const path = require('path');

//readable stream
const rs = fs.createReadStream(path.join(__dirname, './textFiles', 'lorem.txt'), 'utf8');
//writable stream
const ws = fs.createWriteStream(path.join(__dirname, './textFiles', 'new-lorem.txt'));

// this will take the data being read by rs and have ws write it into a new file
// a better way to accomplish this is written below, using 'pipe'
/*
rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
})
*/

rs.pipe(ws);