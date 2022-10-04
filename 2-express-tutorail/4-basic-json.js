const express = require('express');
const app = express()
const {products} = require('./2-express-tutorail/data')

app.get('/', (req,res) =>{
    res.send('<h1>Home Page</h1><a href = "/api/products">product</a>')
})

app.get('/api/products', (req,res)=>{
    const NewProducts = products.map((product) =>{
        const { id,name,image} = product;
        return {id,name,image}
    })

    res.json(NewProducts)
})

app.get('/api/products/:productID', (req,res)=>{
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }
    console.log(singleProduct)
    res.json(singleProduct)
    })

app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params)
    res.send('helllo world')
})

app.get('/api/v1/query', (req,res)=>{
    //console.log(req.query)
    const {search,limit} = req.query
    let sortProducts = [...products];

    if(search){
        sortProducts = sortProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortProducts = sortProducts.slice(0,Number(limit))
    }

    if(sortProducts.length < 1){
      //  res.status(200).send('No product match you search')
      return res.status(200).json({sucess:true, data:[]})
    }
    res.status(200).json(sortProducts)
    //res.send('hello world')
})

app.listen(5000, () =>{
    console.log('Sever is listening port 5000.....')
})