const dns = require("dns");
// dns.lookup("www.baidu.com", (err, address, family) => {
//     if (err) throw err;
//     console.log(`Ip:${address}`)
// })

// const options = {all: true} //查询出一个域名对应的所有ip地址
// dns.lookup('www.qq.com', options, (err, address, family) => {
//     if (err) throw err;
//     console.log(`例子${JSON.stringify(address)}`)
// })
// eg 域名解析 dns.resolve4()和dns.lookup区别在于是否配置本地host
dns.resolve4('id.qq.com', (err, address) => {
    if (err) throw err;
    console.log(JSON.stringify(address))
})

