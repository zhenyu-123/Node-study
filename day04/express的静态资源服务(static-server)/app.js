const express = require('express')
const app=express();//启动服务
app.get('/',function(req,res){
    res.send("hello express 哈哈")
}) 
// 指定公开目录 1、加/public/
// app.use('/public/',express.static('./public/'))
// 指定公开目录 2、 没有第二个参数 不加/public/，前台直接请求里边的路径;  如果加了会找不到
app.use(express.static('./public/'))

app.listen(3000,function(){
    console.log('running')
})