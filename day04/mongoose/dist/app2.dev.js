"use strict";

var mongoose = require('mongoose'); // 链接数据库()


mongoose.connect('mongodb://localhost/test'); //创建文档

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}); //将文档发布为模型

/**
 * 第一个参数是跟 model 对应的集合（ collection ）名字的 单数 形式。 Mongoose 会自动找到名称是 model 名字 复数 形式的 collection 。
 * 第二个参数文档
 * 返回值：模型的构造函数
 */

var User = mongoose.model('User', userSchema);
var user = new User({
  username: "admin12",
  password: '123456'
});
/**
 * 存储
 */
// user.save().then((res)=>{
//     console.log('存储成功',res)
// }).catch((err)=>{
//     console.log('存储失败',err)
// })

/**
 * 查询
 */

User.find(function (err, res) {
  console.log(res);
}); // /**
//  * 按条件查询一个
//  */
// User.findOne({username:'admin'},function(err,res){
//     console.log(res)
// }) 
// /**
//  * 删除
//  */
// User.remove(function(err,res){
//     console.log(res)
// })
// /**
//  * 条件删除
//  */
// User.remove({username:'admin'},function(err,res){
//     console.log(res)
// })

/**
 * 修改
 */

User.findByIdAndUpdate('6013a4b94331b11ea4d0725d', {
  username: '哈哈'
}, function (err, res) {
  console.log(res);
});