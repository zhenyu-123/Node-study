var fs=require('fs')
var template=require('art-template')

fs.readFile('./index2.html',function(error,data){
    if(error){
        console.log('文件读取失败')
    }else{
        var ret=template.render(data.toString(),{
            name:'小明',
            arr:['玩游戏','看动漫','交朋友']
        })
        console.log(ret)
    }
})