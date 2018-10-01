

```
express

http模块创建服务器

事件循环 EventEmitter的监听和绑定

Buffer缓冲区

fs文件模块

函数

模块系统

路由

全局对象

stream

get/post请求
```

### express 框架

1. 简介：

```
express框架：

1. 提供中间件响应http请求  

2. 定义路由表来执行不同的http请求  

app.get('/user',function(req,res,next){
    
})
app.post('/user',function(req,res,next){
    
})

3. 通过模板传递参数动态渲染html页面

app.get('/',function(req,res,next){
    res.render('main',{
        userInfo:'blablabla'
    })
})
```

2. 安装

```
npm install express --save

- 一起安装的插件

    body-parse: nodejs中间件，处于处理JSON，Raw，Text，URL编码的数据
    
    cookie-parse: 解析cookie的工具，通过req.cookies可以取到传过来的cookie，并把它转成对象
    
    multer:  node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据
```

3. express框架实例

```
var express = require('express');
var app = express();

app.get('/',function(req,res,next){
    res.send('hello world');
})

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('应用实例，访问地址为http://%s%s',host,port);
})
```

4. 请求与响应

```
req: req.get()获取请求头、req.query获取URL查询参数串、res.params获取路由参数
res:常见属性：res.set()设置头、res.cookie(name,value)、res.render(view,[locals],callback)、res.send()传送http响应
```

5. 路由：响应客户端请求

```
app.get('/',function(req,res){
    
})
app.post('/',function(req,res){
    
})
```


### node
1.创建服务器

```
//http模块
var http = require('http');

http.createServer(function(req,res){
    
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hello world');
    
}).listen(8080);

//express模块
var express = require('express');
var app = express();

app.listenTR5(8080);
```
2. 事件循环  实例化EventEmitter来绑定和监听事件

```
var events =require('events');
var eventEmitter = new events.EventEmitter();

//绑定事件
eventEmitter.on('login',function(){
    console.log('login');
})

//触发事件
EventEmitter.emit('login');
```
3. Buffer(用于存放二进制数据的缓存区)

```
（1）Buffer与字符编码  ：Buffer一般表示编码字符序列如utf-8,base64,十六进制编码等。

//buffer字符与普通js字符串之间的转化

  var buffer = Buffer.from('runnob','ascii');
  
  console.log(buffer.toString('hex'));
  
  console.log(buffer.toString('base64'));
  
 (2) 创建Buffer类
 //创建长度为10且用0x1填满的buffer。
 var buffer = Buffer.alloc(10,1); 
 // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

(3) 写入缓存区
buf.write(string,offset,length,encoding);

(4) 从缓存区读取数据
buf.toString(encoding,start,end);

(5) 将buffer对象转换为JSON对象
buf.toJSON()

(6) 缓存区合并
Buffer.concat(list,totalLength)
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);

(7) 拷贝缓存区
buf.copy(targetBuffer,targetStart,sourceStart,sourceEnd)

(8) 缓存区裁剪

buf.slice(start,end);

(9) 缓存区长度
buf.length
```
4. stream 
5. 模块系统

```
1. 模块：nodejs中文件就是一个模块，模块系统使得nodejs中文件可以相互调用
2. 创建模块和加载模块
//hello.js 
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;
//main.js 
var Hello = require('./hello'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 
3. 模块加载优先级
文件模块缓存中 -- 原生模块（fs,http等） -- 文件加载

```
6. 函数

```
作为函数参数的函数
```

7. 路由：url 和 querystring 模块（解析数据）

```
var s = 'http://localhost:8888/start?foo=bar&hello=world';
console.log(url.parse(s).pathname);      //start
console.log(url.parse(start).query));   //foo=bar&hello=world
console.log(querystring.parse(s)["foo"]);       //bar
```
8. 全局对象
9. 文件系统

```
var fs = require('fs');
（1）读取文件

fs.readFile('input.txt',function(err,data){
    if(err){
        
    }else{
        console.log(data.toString());
    }
})
(2) 打开文件
fs.open('input.txt',r+,function(err,fd){
    
})
(3) 获取文件信息
fs.stat(path,callback)
(4)写入文件
fs.writeFile(file,data,options,callback)

(5) 关闭文件
fs.close(fd,callback)
(6) 截取文件
fs.ftruncate(fd, len, callback)
...
```

10. get/post请求

```

```

11. web模块
