const express= require('express')

const app = express()

const {products}= require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products/">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts= products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })

     res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    // console.log(req.params);
    const {productID} = req.params
    const singleProduct = products.find((product)=>product.id===Number(productID))
    if(!singleProduct){
        return res.status(404).send('<h1>Product does not exist</h1>')
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('<h4>Hello reviews</h4>')
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit} = req.query
    let productsCopy = [...products]
    if (search) {
        productsCopy = productsCopy.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        productsCopy=productsCopy.slice(0,Number(limit))
    }
    if (productsCopy.length<1) {
        // res.status(200).send('No products matched')
        return res.status(200).json({success:true,data:[]})
    }

    return res.status(200).send(productsCopy)
})

app.listen(4000,()=>{
    console.log('Server on 4000...');
})