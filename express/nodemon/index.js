const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan('tiny'));

app.get("/",(req,res)=>{
    res.send("hi");
})

app.listen("3000",(req,res)=>{
    console.log("Server is running on port 3000");
}); 