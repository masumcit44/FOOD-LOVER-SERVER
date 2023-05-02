const express = require('express')
const app = express()
const port = 3000;
const chef = require('./data/chef.json')
app.get("/",(req,res)=>{
    res.send("food lover is running ")
})

app.get("/chef",(req,res)=>{
    res.send(chef)
})


app.listen(port,()=>{
    console.log(`food lover is running on ${port}`);
})