const express = require('express')
const app = express()
const port = 3000;

app.get("/",(req,res)=>{
    res.send("food lover is running ")
})


app.listen(port,()=>{
    console.log(`food lover is running on ${port}`);
})