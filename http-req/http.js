// const http = require("http");
// const server = http.createServer((req, res) => {
//     console.log(req.headers);
//     res.end('ok');
// })
// server.listen(3001)

// http.get("http://127.0.0.1：3000", res =>{
//     console.log(res.statusCode)
// })

// // 获取http请求报文信息
// const server = http.createServer((req, res) => {
//     console.log(`客户端请求url${req.url}`)
//     console.log(`http版本${req.http}`)
//     console.log(`http请求方法${req.method}`)
//     console.log(`http请求头部${JSON.stringify(req.method)}`)
//     res.end('ok')
// })
// server.listen(3001)

// 获取get请求参数
// const http = require("http");
// const url = require("url");
// const querystring = require("querystring");
// const server = http.createServer((req, res) => {
//     const urlObj = url.parse(req.url);
//     const query = urlObj.query;
//     const queryObj = querystring.parse(query)
//     console.log(JSON.stringify(queryObj))
//     res.end('ok');
// })
// server.listen(3001)

// 获取post请求 ost请求中，不同的Content-type，post body有不小差异，感兴趣的同学可以研究下
// const http = require("http");
// const url = require("url");
// const querystring = require("querystring");
// const server = http.createServer((req, res) => {
//     let body = '';
//     req.on("data", chunk => {
//         body += chunk;
//     })
//     req.on("end", () => {
//         console.log(`post body is` + body)
//     })
// })
// server.listen(3001)

//客户端例子
const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/plain'})
    res.end('from server');
})
server.listen(3001)
const client = http.get("http://127.0.0.1:3001", res => {
    console.log('1、http版本：' + res.httpVersion);
    console.log('2、返回状态码：' + res.statusCode);
    console.log('3、返回状态描述信息：' + res.statusMessage);
    console.log('4、返回正文：');
    res.pipe(process.stdout);
})