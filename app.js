const express = require ('express')
const app = express()
//let { people} = require ('./2-express-tutorail/data')
const people = require ('./2-express-tutorail/routes/people')
const auth = require ('./2-express-tutorail/routes/auth')
// static assets
app.use(express.static('./2-express-tutorail/methods-public'))
//parse from data
app.use(express.urlencoded({ extended : false}))
//parse Json
app.use(express.json())

app.use('/api/people',people)
app.use('/login', auth)



app.listen(5000, ()=>{
    console.log('Server is listening port 5000 .....')
})