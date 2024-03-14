//IMPORTS
const logEvents = require('./logEvents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// init obj
const myEmitter = new MyEmitter();

//add listener for log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //emit the event
    myEmitter.emit('log', 'Log Event Emitted');
}, 2000);