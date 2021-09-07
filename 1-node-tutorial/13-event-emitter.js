// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const eventEmitter= require('events')

const customEmitter = new eventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response',(name,id)=>{
    console.log(`Data received by user ${name} and id ${id}`);
})

customEmitter.on('response',()=>{
    console.log('Some other logic');
})

customEmitter.emit('response','John',34)