// eg 压缩
// const fs = require("fs");
// const zlib = require("zlib");
// const gzip = zlib.createGzip();
// const inFile = fs.createReadStream("./data.txt");
// const out = fs.createWriteStream("./data.txt.gz");
// inFile.pipe(gzip).pipe(out);

// eg 解压
// const fs = require("fs");
// const zlib = require("zlib");
// const gunzip = zlib.createGunzip();
// const inFile = fs.createReadStream("data.txt.gz");
// const outFile = fs.createWriteStream("data.txt");
// inFile.pipe(gunzip).pipe(outFile);

//eg 服务端gizp压缩
// 判断是否存在未压缩文件
// const http = require("http");
// const zlib = require("zlib");
// const fs = require("fs");
// const filePath = "./index.html";
// const server = http.createServer((req, res) => {
//     const acceptEncoding = req.headers['accept-encoding'];
//     let gzip;
//     if (acceptEncoding.indexOf("gzip") !== -1) {
//         gzip = zlib.createGzip();
//         res.writeHead(200, {
//             'Content-Encoding': 'gzip'
//         })
//         fs.createReadStream(filePath).pipe(gzip).pipe(res);
//     } else {
//         fs.createReadStream(filePath).pipe(res)
//     };
// })
// server.listen('3001');

// 服务端字符串gzip压缩
const http = require("http");
const zlib = require("zlib");
const responseText = "hello world";
const server = http.createServer((req, res) => {
    const acceptEncoding = req.headers['accept-encoding'];
    if (acceptEncoding.indexOf('gzip') !== -1) {
        res.writeHead(200, {
            'Content-encoding': 'gzip'
        })
        res.end(zlib.gzipSync(responseText));
    } else {
        res.end(responseText)
    };
})
server.listen('3001')