/**
 * 处理文件中的数据
 */
const fs = require('fs')
var dbPath = './db.json'

/**
 * 添加
 * student：要添加的学生
 */
exports.add = function (student, callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var students = JSON.parse(data).list
            // 让id自增1,唯一
            if(students.length!=0){
                student.id = students[students.length - 1].id + 1
            }else{
                student.id =  1
            }
            students.push(student)
            var fileData = JSON.stringify({
                list: students
            })
            fs.writeFile(dbPath, fileData, function (err) {
                if (err) {
                    return callback(err)
                }
                //写成功，不报错
                callback(null)
            })
        }
    })
}

/**
 * 删除
 */
exports.delete = function (id, callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var students = JSON.parse(data).list

            var deleteId = students.findIndex(function (item) {
                return item.id === id
            })

            students.splice(deleteId, 1)
            var fileData = JSON.stringify({
                list: students
            })
            fs.writeFile(dbPath, fileData, function (err) {
                if (err) {
                    return callback(err)
                }
                //写成功，不报错
                callback(null)
            })
        }
    })
}
/**
 * 修改
 */
exports.update = function (student, callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var students = JSON.parse(data).list
            student.id=parseInt(student.id)
            //找到旧的一条数据
            var oldObj = students.find(function (item) {
                return item.id === student.id
            })
            //将旧的一条数据修改
            for (var key in student) {
                oldObj[key] = student[key]
            }

            var fileData = JSON.stringify({
                list: students
            })
            fs.writeFile(dbPath, fileData, function (err) {
                if (err) {
                    return callback(err)
                }
                //写成功，不报错
                callback(null)
            })
        }
    })
}
/**
 * 查询全部
 */
exports.query = function (callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        } else {
            callback(null, JSON.parse(data).list)
        }
    })
}
/**
 * 查询单个
 */
exports.queryById = function (id, callback) {

    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var students = JSON.parse(data).list
            var oneObj = ''
            oneObj = students.find(function (item) {
                return item.id === parseInt(id)
            })
            callback(null, oneObj)
        }
    })
}