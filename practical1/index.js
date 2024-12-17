const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    res.end('hello world');
}).listen(3000);