const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("Universal middleware executed");
    next();
})

app.get('/',(req,res) => {
    res.send("Hello from express js");
})

app.use('/payment',(req,res,next)=>{
    console.log("payment middleware executed ");
    next();
})

app.get('/payment',(req,res)=>{
    res.send("hello from payment page");
    
})

app.listen(3000,()=>{
    console.log('Server running on port 3000');
})