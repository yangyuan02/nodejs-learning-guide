// 一个web服务程序，接受到来自客户端的http请求后，向客户端返回正确的响应内容，这就是res的职责。
const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, 'ok', {"Content-Type":"text/plain"})
    res.end('hello');
})
server.listen(3001)

res.writeHead(200, 'ok')
// 等价
res.statusCode = 200;
res.statusMessage = 'ok'