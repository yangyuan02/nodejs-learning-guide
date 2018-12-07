// const http = require("https");
// https.get("http://www.baidu.com", res => {
//     console.log(`status code${res.statusCode}`)
//     console.log(`headers${JSON.stringify(res.headers)}`)
//     res.on('data', data => {
//         process.studout.write(data)
//     }).on('error', err => {
//         console.log(err)
//     })
// })

// openssl genrsa -out chyingp-keyof.pem 2048 生成私钥


// 生成证书签名请求
// openssl req -new \
//   -sha256
//   -key chyingp-key.key.pem \
//   -out chyingp-csr.pem \
//   -subj "/C=CN/ST=Guandong/L=Shenzhen/O=YH Inc/CN=www.chyingp.com"

  //生成证书

//   openssl x509 \
//   -req -in chyingp-csr.pem \
//   -signkey chyingp-key.pem \
//   -out chyingp-cert.pem

// https服务端
const https = require("https");
const fs = require("fs");
const options = {
    key: fs.readFileSync("./chyingp-key.pem"),
    cert: fs.readFileSync("./chyingp-cert.pem")
};
const server = https.createServer(options, (req, res) => {
    res.end("这是来自https服务器的返回")
})
server.listen(3000)