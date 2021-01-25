var fs = require('fs')
fs.readFile('dd.txt',function(error,data){
    console.log(data.toString())
})

// fs.writeFile('/d.txt','哈哈',function(error){
// console.log(1)
// })