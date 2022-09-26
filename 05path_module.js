const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, './data/1.txt'),'utf8',function (err,data){
    if(err){
        return console.log("文件读取失败"+err.message)
    }
    console.log("文件读取成功"+data);
})