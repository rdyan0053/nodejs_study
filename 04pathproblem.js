console.log(__dirname);

const fs = require('fs')

fs.readFile(__dirname+'/data/score.txt','utf-8',function (err,data){
    if (err){
        return console.log("文件读取失败"+err)
    }
    console.log("文件读取成功"+data)
})