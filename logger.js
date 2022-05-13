const EventEmitter= require('events');
// const emiter= new EventEmitter()
// console.log(__filename);
// console.log(__dirname)
var url = 'http://myLogger.io/log';
class Logger extends EventEmitter{
     log(Message){
        // Send an Http requests
        console.log(Message)
        //Raise an event
        this.emit("Messagelogged", {id:1, url:'http:'})
    }
}

// module.exports.log= log;
// module.exports = log;
module.exports= Logger;
//internally
// module.exports.url =url;
// when we exports it internally
// module.exports.endPoint