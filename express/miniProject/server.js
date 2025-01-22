const express = require('express');
const app = express();
const file = express('fs');

app.use((req,res,next) => {
    console.log(`${req.method} request for ${req.url} with ip address: ${req.ip}`);
    next();
});

app.get('/',(req,res)=>{    
    res.end("server is running. ");
});

app.get('/about',(req,res)=>{    
    res.end("server is running on /about. ");
});

app.get('/hi/:why',(req,res)=>{
    const {why} = req.params;
    res.end(`Profile ${why}`);
});

app.listen(3000,()=>{
    console.log("server running on 3000 port. ");
});