const EventEmitter = require('events')
const customEmitter = new EventEmitter()
customEmitter.on('response', (name,id)=>{
    console.log('data recieved user ${name} with id : ${id}')
})
customEmitter.on('response', ()=>{
    console.log('some other login here')
})
customEmitter.emit('response','john',34)
console.log('')
