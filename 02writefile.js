const fs = require('fs')

fs.writeFile('data/1.txt', 'abcd', function (err) {
    if (err) {
        return console.log("文件写入失败" + err.message)
    }
    console.log("file write down because the error encode")
})
