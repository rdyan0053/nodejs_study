const fs = require('fs')

fs.readFile('./data/score.txt', 'utf-8', function (err, data) {

    if (err) {
        return console.log("文件读取失败"+err.message)
    }
    // 文件读取成功
    console.log(data)

    // 处理数据
    const arrOld = data.split(' ')
    console.log(arrOld);
    const arrNew = []
    arrOld.forEach(item=>{
        console.log(item);
        arrNew.push(item.replace('=', ':'))
    })
    console.log(arrNew);
    const newStr = arrNew.join('\r\n')
    console.log(newStr);

    // 调用writeFile函数写入文件
    fs.writeFile('./data/成绩-ok.txt', newStr, function (err){
        if(err){
            return console.log('写入文件失败'+err.message)
        }
        console.log('成绩写入成功')
    })
})


