const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()
server.on('request',(req,res)=>{
    const url = req.url     //  /clock/index.html
    const fpath = path.join(__dirname,url)
    console.log(fpath);

    fs.readFile(fpath,'utf8',(err,data)=>{
        if(err){
            return res.end('404 not found') // 文件读取失败，响应404
        }
        res.end(data)   // 文件读取成功
    })
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})

// E:\development\front_end\nodejs_study\clock\index.html