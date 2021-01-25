var http = require('http')
var fs = require('fs')
var server = http.createServer()
//在本地搭建一个Apache服务器
var wwwUrl = 'C:/Users/gsy/Documents/www/'
server.on('request', function (req, res) {
    //先读取文件html,然后读取该目录下的所有文件
    var url = req.url
    if (url === '/') {
        //读取所有文件夹
        fs.readFile('./index.html', function (error, data) {
            if (error) {
                res.end("404 Not Found")
            } else {
                var contentTitle = ''
                // console.log(data.toString())   //html 字符
                fs.readdir(wwwUrl, function (error, files) {
                    //files //[ 'bg-4.jpg', 'test', 'test.html', 'test.js', 'test.txt' ]  文件标题
                    if (error) {
                        return res.end("404 Not Found")
                    }
                    files.forEach(function (item, index) {
                        contentTitle += `<tr>
                        <td data-value="test/"><a class="icon dir" href="file:///C:/Users/gsy/Documents/www/${item}">${item}</a>
                        </td>
                        <td class="detailsColumn" data-value="0"></td>
                        <td class="detailsColumn" data-value="1609990976">2021/1/7 上午11:42:56</td>
                    </tr>
                    `
                    })
                    data = data.toString()
                    data = data.replace('sdd', contentTitle)
                    console.log(contentTitle)
                    res.end(data)
                })



            }
        })
    }
})

server.listen("3000", function () {
    console.log('服务器启动了')
})