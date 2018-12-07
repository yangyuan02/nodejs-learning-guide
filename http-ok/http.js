const http = require("http");
// http server例子
server = http.createServer((req, res) => {
    const url = req.url;
    res.end(`您访问的地址是：${url}`);
})
server.listen(3001);

// http client 例子
const client = http.get("http://127.0.0.1:3001", clientRes => {
    clientRes.pipe(process.stdout)
})