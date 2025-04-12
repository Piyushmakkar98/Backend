const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("Hello world");
});

app.listen(3000,() => {
    console.log("Server running on port 3000");
});
