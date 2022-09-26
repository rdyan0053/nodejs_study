const fs = require('fs')

fs.readFile('data/1.txt', 'utf-8', function (err, data) {
    if (err) {
        return console.log("文件读取失败!" + err.message) //如果文件写入失败，直接return结束，防止执行下面的代码
    }
    console.log("文件读取成功，文件的内容是:" + data)
})
