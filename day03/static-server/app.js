const express = require('express')
const app = express()
app.get('/',function(req,res){
    res.send('哈哈')
})

app.listen(3000,function(){
    console.log('running……')
})