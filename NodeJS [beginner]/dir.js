// understanding the checking for, creating, and removal of directories

const fs = require('fs');

// if the directory doesnt exist, make it
if (!fs.existsSync('./newDir')){
    fs.mkdir('./newDir', (err) => {
        if (err) throw err;
        console.log('Directory Created')
    });
}

//if the directory does exist, delete it
if (fs.existsSync('./newDir')){
    fs.rmdir('./newDir', (err) => {
        if (err) throw err;
        console.log('Directory Deleted')
    });
}
