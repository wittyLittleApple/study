
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http')

/* createServer req传入 res返回 */
http.createServer((req, res) => {
    console.log(req, res)
}).listen(8080) // 当前端口号 8080
