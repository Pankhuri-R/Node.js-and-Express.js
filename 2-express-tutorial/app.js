const express=require('express')

const app= express()

let {people}= require('./data')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))

app.post('/login',(req,res)=>{
    // console.log(req.body);
    const {name}= req.body

    if (name) {
        res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.listen(4000,()=>{
    console.log('Server up on 4000');
})