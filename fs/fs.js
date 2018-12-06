// eg 普通读取
// const fs = require("fs");
// let data;
// try {
//     data = fs.readFileSync('data.txt','utf8');
//     console.log(`文件内容${data}`)
// } catch(err) {
//     console.error(`文件读取错误${err.message}`)
// }

// eg 异步读取
// const fs =require("fs");
// fs.readFile("./data.txt","utf8",(err, data) => {
//     if (err) {
//         return console.error(`文件读取错误${err.message}`)
//     }
//     console.log(`文件内容${data}`)
// })

// eg 通过文件流读取 适合大文件
// const fs = require("fs");
// const readStream = fs.createReadStream("./data.txt","utf8");
// readStream.on('data', chunk => {
//     console.log(`读取的数据${chunk}`)
// }).on('error', err => {
//     console.error(`出错${err.message}`)
// }).on('end', () => {
//     console.log('没有数据了')
// }).on('close', () => {
//     console.log('已经关闭')
// })

// eg 异步写入 文件写入 文件不存在则创建文件、存在则覆盖
// const fs = require("fs");
// fs.writeFile("./data.txt", "hello world", "utf8", err => {
//     if (err) throw err;
//     console.log('文件写入成功')
// })

// eg 同步写入
// const fs = require("fs");
// try {
//     fs.writeFileSync("./data.txt", "hello world a", "utf8")
//     console.log('文件写入成功');
// } catch (err) {
//     throw err;
// }

// eg 通过文件流写入 更多参数请google
// const fs = require("fs");
// const writeStream = fs.createWriteStream("./data.txt", "utf8");
// writeStream.on("close", () => {
//     console.log('已经关闭')
// })
// writeStream.write('hello');
// writeStream.write('world');
// writeStream.end('');

// eg 文件是否存在 fs.access()除了判断文件是否存在（默认模式），还可以用来判断文件的权限
// const fs = require("fs");
// fs.access("./data.txt", err => {
//     if(err) throw err;
//     console.log('文件存在')
// })

// eg 异步 创建文件目录 如果目录存在报错
// const fs = require("fs");
// fs.mkdir("./test", err => {
//     if (err) throw err;
//     console.log('创建成功');
// })

// eg 同步
// const fs = require("fs");
// try {
//     fs.mkdirSync("./test");
// } catch (err) {
//     throw err;
// }

// eg 删除文件 异步
// const fs = require("fs");
// fs.unlink("./data.txt", err => {
//     if (err) throw err;
//     console.log('文件删除成功');
// })

// eg 删除文件 同步
// const fs = require("fs");
// try {
//     fs.unlinkSync("./data.txt");
// } catch (err) {
//     throw err;
// }

// eg 同步 fs.readdirSync()只会读一层，所以需要判断文件类型是否目录，如果是，则进行递归遍历
// const fs = require('fs');
// const path = require('path');

// const getFilesInDir = function(dir){

//     let results = [ path.resolve(dir) ];
//     const files = fs.readdirSync(dir, 'utf8');

//     files.forEach(function(file){

//         file = path.resolve(dir, file);

//         const stats = fs.statSync(file);

//         if(stats.isFile()){
//             results.push(file);
//         }else if(stats.isDirectory()){
//             results = results.concat( getFilesInDir(file) );
//         }
//     });

//     return results;
// };

// const files = getFilesInDir('../');
// console.log(files);

// eg 文件重命名 异步
// const fs = require("fs");
// fs.rename("./test", "./test2", err => {
//     if (err) throw err;
//     console.log('重命名成功')
// })

// eg 同步
// const fs  = require("fs");
// try {
//     fs.renameSync("./test2", "./test")
// } catch (err) {
//     throw err;
// }

// eg 监听文件修改 fs.watch()比fs.watchFile()高效很多 原理 轮训检查文件是否发生变化
// const fs = require("fs");
// const options = {
//     persistent: true, //默认是true
//     interval: 200 //多久检查一次
// };
//curr,prev是被监听文件的状态，fs.Stat实列 fs.unwatch()移除监听
// fs.watchFile("./data.txt", options, (curr, prev) => {
//     console.log(`修改时间为${curr.mtime}`)
// })

// eg 异步 修改权限
// fs.chmod)、fs.fchmod()区别：传的是文件路径，还是文件句柄。
// fs.chmod()、fs.lchmod()区别：如果文件是软连接，那么fs.chmod()修改的是软连接指向的目标文件；fs.lchmod()修改的是软连接
// const fs = require("fs");
// fs.chmod("./data.txt", "777", err => {
//     if (err) throw err;
//     console.log("修改权限成功")
// })
// try { // 同步
//     fs.chmodSync("./data.txt", "777")
//     console.log("修改成功")
// } catch (err) {
//     throw err;
// }

// eg 异步 获取文件状态
// fs.stat() vs fs.fstat()：传文件路径 vs 文件句柄。
// fs.stat() vs fs.lstat()：如果文件是软链接，那么fs.stat()返回目标文件的状态，fs.lstat()返回软链接本身的状态
// const fs = require("fs");
// const getTimeDesc = function(d){
//     return [d.getFullYear(), d.getMonth()+1, d.getDate()].join('-') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
// };
// fs.stat("./data.txt", (err, stat) => {
//     console.log(`文件大小${stat.size}`)
//     console.log(`创建时间${getTimeDesc(stat.birthtime)}`)
//     console.log(`文件${stat}`)
// })
// //同步
// const stats = fs.statSync("./data.txt")
// try {
//     console.log(stats.size)
// } catch (err) {
//     throw err;
// }

// eg 异步 访问/权限检测
// const fs = require("fs");
// fs.access("./data.txt", err => {
//     if (err) throw err;
//     console.log('可以访问')
// })
// try {
//     fs.accessSync("./data.txt")
// } catch (err) {
//     throw err
// }

// eg 文件打开/关闭
// fs.open()

// eg 文件读取(底层) 
// fs.read()

//eg 追加文件内容
// const fs = require("fs");
// fs.appendFile("./data.txt", "hello", "utf8", err => {
//     if (err) throw err;
//     console.log("append成功")
// })

// eg 文件内容截取
// fs.truncate(path, len, callback);
// fs.truncateSync(path, len)

// eg 修改文件属性(时间)
// fs.utimes(path, atime, mtime, callback)

// eg 创建文件链接
// fs.symlink(target, path)

// eg 创建临时目录 fs.mkdtemp(prefix,callback) fs.mkdtempSync(prefix)
// const fs = require("fs");
// fs.mkdtemp("/tmp/", (err, folder) => {
//     if (err) throw err;
//     console.log(`创建临时目录${folder}`)
// })

// eg 删除目录
// const fs = require("fs");
// fs.rmdir("./test", err => {
//     if (err) throw err;
//     console.log('目录删除成功')
// })