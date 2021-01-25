var http = require('http')
var fs = require('fs')
var server = http.createServer()
// 读取服务器文件响应回去
server.on('request', function (resquest, response) {
    var url = resquest.url
    console.log(url)
    if (url == '/') { //读取文本文件
        fs.readFile('./resource/test.txt', function (error, data) {
            if (error) {
                response.setHeader('Content-Type', "text/plain;charset=utf-8")
                response.end('文件读取失败')
            } else {
                response.setHeader('Content-Type', "text/html;charset=utf-8")
                response.end(data)
            }
        })
    } else if (url == '/ba') {
        console.log(1)
        //读取image
        fs.readFile('./resource/bg-4.jpg', function (error, data) {
            if (error) {
                response.setHeader('Content-Type', "text/plain;charset=utf-8")
                response.end('文件读取失败')
            } else {
                response.setHeader('Content-Type', "image/jpeg")
                response.end(data)
            }
        })

    }

})

server.listen(3000, function () {
    console.log('服务器启动了')
})