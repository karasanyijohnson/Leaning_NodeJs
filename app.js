// function sayHello(name){
// console.log('Hello'+ name)
// }

// sayHello("Johnson")

//================================MODULE=======================
// console.log(module)

// const logger = require('./logger.js')
// console.log(logger)
// logger("Message")


//===================Path Module=======================================

// const path = require('path');
// const pathObj= path.parse(__filename)
// console.log(pathObj)




//================= OS Module =====================================
// const os = require('os');
// const totalMemory= os.totalmem();
// const freeMemory =os.freemem();

// console.log("Total memory: " + totalMemory)

// Template String
// Es6 / Es2015: ECMAScript 6

// console.log(`Total Memory : ${totalMemory}`);
// console.log(`Free Memory : ${freeMemory}`);

// ===================== File system Module =================================

//  const fs = require("fs")
// const files= fs.readdirSync('./')
// console.log(files)

// fs.readdir('$', function(err, files){
//     if(err) console.log('Error' ,err)
//     else console.log('Results', files)
// })

// ====================== Events Module =================================

// const EventEmitter= require('events');
// const emiter= new EventEmitter()

// const Logger = require('./logger');
//  const logger = new Logger()

// Register Listener
// logger.on("Messagelogged", function(arg){
//     console.log("Listener Called", arg)
// })
// logger.log("Message")

//Raise an event
// emiter.emit("Messagelogged", {id:1, url:'http:'})

// =============== Http Module ============================================

const { Socket } = require('dgram');
const http = require('http')
const server= http.createServer( (req, res)=>{
    if(req.url==='/'){
    res.write('Hello World');
    res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
});
// server.on('connection', (Socket)=>{
//     console.log('New Connection ')
// })

server.listen(3002)
console.log("Listening on port 3002 ...........")


