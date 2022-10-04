console.log('Exprees tutorail2')
// buid sever with http mod')
const http = require ('http')
const {readFileSync} = require ('fs')
// get all file
const homePage =  readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const sever = http.createServer((req,res) =>{
// console.log('user hit the server')
// console.log(req.url)
const url = req.url;
console.log(url)
// hone page////////////////////////
if (url === '/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage) 
    res.end() 
}
// abou page/////////////////////
else if (url === '/about'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(
       '<h1>about page</h1><h2>hello all sis cute </h2><a>https://www.youtube.com/</a>'
        ) 
    res.end() 
}
//style//////////////////////////////
else if (url === '/styles.css'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles) 
    res.end() 
}
// image logo/////////////////////
else if (url === '/logo.svg'){
    res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeImage) 
    res.end() 
}
//logi/////////////////////////////
else if (url === '/browser-app.js'){
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeLogic) 
    res.end() 
}
//404 mean erorr////////////////////////
else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>page not found</h1>') 
    res.end() 
}
 
})
sever.listen(8080)  