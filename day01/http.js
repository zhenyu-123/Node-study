var http = require('http')

var server=http.createServer();

server.on('request', function (request, response) {
    console.log("收到了请求来自：" + request.url)
    response.setHeader('Content-Type','text-plain;charset=utf-8')//设置响应类型
    response.write("结束".toString())
    response.end('213');

    // 根据不同的请求参数，发送不同的响应
    var url =request.url//获取端口号后的路径
})

server.listen(3000,function(){
    console.log('服务器启动。。。')
})