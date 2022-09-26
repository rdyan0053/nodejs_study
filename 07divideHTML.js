const fs = require('fs')
const path = require('path')

// 创建正则表达式
const regStyle = /<style>[\s\S]*<\/style>/      // 不需要加引号
const regScript = /<script>[\s\S]*<\/script>/


function resolveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr)
    console.log(r1);

    const newCSS = r1[0].replace('<style>', '').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./data/index.css'), newCSS,function (err){
        if(err){
            return console.log('写入css文件失败'+err.message)
        }
        console.log('css文件写入成功');
    })
}


function resolveJS(htmlStr){
    const r2 = regScript.exec(htmlStr)
    console.log(r2);

    const newJS = r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./data/index.js'),newJS,function (err){
        if(err){
            return console.log('写入js文件失败'+err.message)
        }
        console.log('js文件写入成功');
    })
}

function resolveHTML(htmlStr){
    const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './data/index.html'), newHTML, function (err){
        if(err){
            return console.log('写入html文件失败'+err.message)
        }
        console.log('html文件写入成功');
    })
}

fs.readFile(path.join(__dirname,'./data/index.html'),'utf8',function (err,data){
    if(err){
        return console.log('文件读取失败'+err.message)
    }
    // console.log('文件读取成功/n', data)
    resolveCSS(data)     // 写入css
    resolveJS(data)     // 写入js
    resolveHTML(data)   //写入html
})


