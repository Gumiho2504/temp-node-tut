var http = require('http')
var fs = require('fs')
http
    .createServer(function (req,res){
        const text = fs.readFileSync('./content/big.txt', 'utf8')
        res.end(text)
    })
    .listen(2504)
    // console.log('hello')
// const{ createReadStream} = require('fs');
// const { result } = require('lodash');
// const stream = createReadStream('./content/big.txt',{highWaterMark: 90000,encoding:'utf8'});
// stream.on('data', (result)=>{
//     console.log(result)
// })
// stream.on('error',(err) => console.log(err))
var http = require('http')
var fs = require('fs')
http
    .createServer(function (req,res){
        const text = fs.readFileSync('./content/big.txt', 'utf8')
        res.end(text)
        // const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
        // fileStream.on('open',()=>{
        //     fileStream.pipe()
        // })
        // fileStream.on('error', (err)=>{
        //     res.end(err)
        // })
    })
    .listen(2504)