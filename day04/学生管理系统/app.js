const express =require('express')
const app = express();

// 模板引擎
app.engine('html',require('express-art-template'))
// 开放资源
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))




app.get('/',function(req,res){
    res.render('index.html',{
        list:[
            // '张三'
            {title:'张三'},
            {title:'李四'},
            {title:'王五'},
            {title:'赵云'},
        ]
    })
})
app.listen(3000,function(){
    console.log('running')
})