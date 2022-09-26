const http = require('http')
// 创建http服务器实例
const server = http.createServer()
// 给服务器绑定request事件，监听客户端的请求
// req请求对象，res响应对象
server.on('request', (req,res)=>{
    console.log('someone visit this website');
    const url = req.url
    const method = req.method

    const str = `请求地址 is ${url}, and 请求方法 is ${method}`  // 不设置Header会出现乱码
    // console.log(str);

    res.setHeader('Content-Type','text/html;charset=utf-8')     // 解决乱码问题
    res.end(str)
})
// 启动服务器？
server.listen(8080, ()=>{
    console.log('server runing on http://127.0.0.1:8080');
})