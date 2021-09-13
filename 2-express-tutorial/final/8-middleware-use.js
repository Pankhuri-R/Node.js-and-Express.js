const express=require('express')

const app= express()
//  req => middleware => res
const logger = require('./logger')
const authorize = require('./authorize')
app.use([authorize,logger])

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})

app.get('/api/items',(req,res)=>{
    res.send('Items')
})

app.listen(4000,()=>{
    console.log('Server up on 4000');
})