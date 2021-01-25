const express = require('express')
const app=express();//启动服务


// 响应以html结尾的文件,且默认区找跟目录的views文件夹下的文件
app.engine('html',require('express-art-template'))

app.get('/404',function(req,res){
    res.render("404.html" ,{
        title:'第二个参数'
    })
}) 
app.get('/',function(req,res){
    res.send("welcome")
}) 
 
app.listen(3000,function(){
    console.log('running')
})