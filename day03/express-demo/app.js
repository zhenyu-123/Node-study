const express = require('express')
const app=express();//启动服务
app.get('/',function(req,res){
    res.send("hello express 哈哈")
})
// 指定公开目录
app.use('/public/',express.static('./public/'))

app.listen(3000,function(){
    console.log('running')
})