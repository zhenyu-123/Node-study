/*
处理网站中的静态资源
*/
var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    var url=req.url
    if(url==='/'){
        fs.readFile('./view/index.html',function(error,data){
            if(error){
                return res.end('404 NOT Found')
            }
            res.end(data)
        })
    }else if(url.indexOf('/public')===0){
        // 读取本地
        fs.readFile('.'+url,function(error,datas){
            if(error){
                return res.end('404 NOT Found')
            }
            res.end(datas)
        })
    }else{
        res.end('404')
    }
}).listen(3000,function(){
    console.log('running……')
})