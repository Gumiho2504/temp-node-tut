const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home page')
    }
    if(req.url === '/about'){
        res.end('About page')
    }
    res.end('Error page')

})
server.listen(8080,()=>{
    console.log('Sever is listening on port 8080.....')
})


