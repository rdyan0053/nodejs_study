const http = require('http')
// 创建http服务器实例
const server = http.createServer()
// 给服务器绑定request事件，监听客户端的请求
server.on('request', (req,res)=>{

    // 1．获取请求的url 地址
    const url = req.url
    // 2．设置默认的响应内容为404 Not found
    let content = '<h1>404 not found</h1>'

    // 3.判断用户请求的是否为/或/index.html首页
    if(url==='/'||url==='/index.html') {     // 三等号 绝对等于（值和类型均相等）
        content = '<h1>首页</h1>'
    // 4．判断用户请求的是否为/about.html 关于页面
    }else if(url==='/about.html'){
        content = '<h1>关于页面</h1>'
    }
    // 5．设置Content-Type响应头，防止中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8')     // 解决乱码问题
    // 6．使用res.end()把内容响应给客户端
    res.end(content)
})
// 启动服务器？
server.listen(8080, ()=>{
    console.log('server runing on http://127.0.0.1:8080');
})