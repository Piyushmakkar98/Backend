const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.end("hello world");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})a