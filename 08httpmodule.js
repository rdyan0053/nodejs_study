const http = require('http')
// 创建http服务器实例
const server = http.createServer()
// 给服务器绑定request事件，监听客户端的请求
// req请求对象，res响应对象
server.on('request', function (req,res){
    console.log('someone visit this website');
    const url = req.url
    const method = req.method

    const str = `your request url is ${url}, and your request method is ${method}`  // 不是引号，而是反引号
    console.log(str);
})
// 启动服务器？
server.listen(8080, function (){
    console.log('server runing on http://127.0.0.1:8080');
})