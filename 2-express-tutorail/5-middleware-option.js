const express = require ('express');
const app =  express()
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');
// 1 . use vs route
// 2 . option - own / express /. third party
app.use(morgan('tiny'))
//app.use([logger,authorize])
app.get('/', (req,res)=> {
  res.send('Home ')
})

app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})
app.listen(5000,()=>{
    console.log('Sever is listening on port 5000.....')
})