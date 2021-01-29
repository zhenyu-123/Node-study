const express =require('express')
const app = express();
const router = require('./router')
const bodyParser = require('body-parser')
// 模板引擎
app.engine('html',require('express-art-template'))
// 开放资源
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))
// 设置post请求
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// 注册路由
app.use(router)



app.listen(3000,function(){
    console.log('running')
})
module.exports=app