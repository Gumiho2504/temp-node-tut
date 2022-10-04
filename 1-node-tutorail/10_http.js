import { createServer } from 'http'
const server = createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    if(req.url === '/about'){
        res.end('Here is our shoot history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `
    )
   // console.log(req)
   // res.write('Welcome to home page')
   // res.end()
})
server.listen(5000)