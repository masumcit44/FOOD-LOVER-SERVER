const express = require('express')
const app = express()
const port = 3000;
const chef = require('./data/chef.json')
const receipe = require('./data/receipe.json')
const cors =  require('cors')
app.use(cors())
app.get("/",(req,res)=>{
    res.send("food lover is running ")
})

app.get("/chef",(req,res)=>{
    res.send(chef)
})
app.get("/receipe",(req,res)=>{
    res.send(chef)
})
app.get("/receipe/:id",(req,res)=>{
    const id = req.params.id;
    const selectedReceipe = receipe.find(single=> single.id == id )
    res.send(selectedReceipe)
})


app.listen(port,()=>{
    console.log(`food lover is running on ${port}`);
})