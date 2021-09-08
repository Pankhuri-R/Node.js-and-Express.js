const express = require('express');
const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.listen
// app.use

app.get('/',(req,res)=>{
    // console.log(req);
    res.status(200).send('<h1>Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('<h1>About Page')
})

app.all('*', (req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(5000, ()=>{
    console.log('Server up on 5000...');
})