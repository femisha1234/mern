const express = require('express')
const app = express()
const PORT = 5578  
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://femisha1234:user1@cluster0.nddkfti.mongodb.net/").then(()=>{
console.log('MongoDB connected sucessfully')
}).catch((err)=>{
console.log('Error')
})

app.get('/',(req,res)=>{
    res.send('server hosting')
}
)
app.get('/about',(req,res)=>{
    res.send('About')
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})