const fs = require('fs')
const express = require('express')
const student = require('./student')
// 1、创建一个路由容器
const router = express.Router()
// 2、将路由都挂载到router 路由容器中


router.get('/',function(rq,res){
  res.redirect('/students')
})
// 渲染全部学生信息
router.get('/students', function (req, res) {
  student.query(function (err, data) {
    if (err) {
      return res.status(500).send('服务器错误')
    }
    res.render('index.html', {
      list: data
    })
  })

})
//渲染编辑页面
router.get('/students/edit', function (req, res) {
  student.queryById(req.query.id, function (err, data) {
    if (err) {
      return res.status(500).send('服务器错误')
    }
    res.render('edit.html', {
      students: data
    })
  })

})
// 修改请求
router.post('/students/edit', function (req, res) {
  student.update(req.body, function (err, data) {
    if (err) {
      return res.status(500).send('服务器错误')
    }
    res.redirect('/students')
  })

})
// 跳转添加页面
router.get('/students/new', function (req, res) {
  res.render('new.html')
})
// 添加请求
router.post('/students/new', function (req, res) {
  /**
   * 1、获取表单数据
   * 2、处理，保存到db.jon
   * 4、响应
   *  读取出来转成对象
   *  push数据
   * 对象转为字符串
   * 把字符串再写入文件
   * **/
  student.add(req.body, function (err) {
    if (err) {
      return res.status(500).send('服务器错误,添加失败')
    }
    res.redirect('/students')
  })
})
// 删除
router.get('/students/delete', function (req, res) {
  student.delete(req.query.id, function (err) {
    if (err) {
      return res.status(500).send('服务器错误,添加失败')
    }
    res.redirect('/students')
  })
})

// 3、导出router
module.exports = router