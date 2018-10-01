## nodejs

### 模块作用域

```
每个文件就是一个模块，每个模块都有自己的作用域，我们使用var森名的变量,它的作用域并不是全局的，而是当前作用域下的。

__filename:返回当前模块文件解析后的绝对路径，该属性不能全局的，而是模块作用域下的
__dirname:返回当前模块文件目录解析后的绝对路径，该属性不能全局的，而是模块作用域下的
```

### 模块加载

```
1.加载路径可以为绝对路径，相对路径
require('./a.js')

2.模块文件查找顺序
文件名--> .js -->.json -->.node
```

### 模块和exports
```
1. 一个模块中var 定义的变量，其作用域是当前模块，外部不能直接访问

2. 如何让一个模块访问另一个模块的变量：

	- 把变量作为global对象的一个属性，这样的做法不推荐

	- 使用模块对象 module

	（module对象提供和当前模块有关的一些信息，其中module对象的exports对象,可以通过这个对象把一个模块中的局部变量进行使用。 | 在模块中有一个内置对象exports，相当于module.exports）

    **注意不要为module.exports和exports对象赋值，而是为他们添加属性，否则会导致module.exports和exports对象的联系断开**
	//a.js
	var a = 1;
	module.exports.a = a;

	//b.js
	var getA = require('./a.js');

	console.log(getA);
```
## node 内置api
### global对象
```
1. process对象：全局对象，对当前正在进行的进程进行控制，因为是全局变量，无需使用require()    

global.process == process;  //true

-属性
    - 1. process.argv ：返回一个数组，第一个元素为process.execpath ‘node.exe’,第二个参数为当前执行文件的路径。剩余元素为其他命令行参数。
    
        当运行文件 node a.js  process.argv只含有 前两个参数 ;
        
        果用node a.js a=1 b=2 process.argv返回的其余参数多了 a=1,b=2
        
    - 2.process.env：属性返回一个包含用户环境信息的对象 
    
        这个对象的修改与删除
        //修改
        process.env.foo = 'bar';
        console.log(process.env.foo);
        
        //删除
        process.env.TEST = 1;
        delete process.env.TEST;
        console.log(process.env.TEST);
        // => undefined
        
        //环境变量不区分大小写
        process.env.TEST = 1;
        console.log(process.env.test);
        // => 1
        
      3. process.pid:返回当前进程pid
      
      4. process.title:返回当前进程title
      
      5. stdin、stdout:标准输入输出流:提供输入数据和输出数据的方法，称为io操作

    process.stdout.write('nihao')
    
        - 默认情况下输入流失关闭的，要监听输入流数据，首先要开启输入流
        
        process.stdin.resume()
        
        //监听用户的输入数据
        
        process.stdin.on('data',function(chunk){
            console.log('数据已经输入：'+chunk);
        })
        
2. buffer对象：用于操作二进制数据流

      1.buffer类创建     http://nodejs.cn/api/buffer.html
      
      var bf = new Buffer()
```

### node全栈  node+mongoose+bootstrap

1. 项目初始化,创建目录demo

```
cd demo
npm init
```
2. 安装依赖项

```
需要依赖包：
express:
mongoose：数据库操作
bodyParse:解析用户post请求数据
cookies:读写cookie,存取用户登录信息
swig:模板解析引擎
...
```
3. 配置app.js入口文件，创建一个服务，监听端口

```
var express = require('express');
var app = express();

app.listen(8080);
```
4. 配置模板引擎，便于加载模块（html） 使用swig

```
var swig = require('swig');
//定义模板引擎
app.engine('html',swig.renderFile);
//设置模板引擎存放位置
app.set('view','./view')
//注册模板引擎
app.set('view engine','html')
//开发过程中清除模板缓存
swig.setDefault({cache:false});
```
5.静态文件托管（避免对js\css文件的请求处理，便于加载）

```
var express= require('express');

app.use('/public',express.static(__dirname+'public'));
```
6. 模块划分（根据前端展示、后台管理、用户等划分）

```
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));
```

7. 处理post请求数据

```
//body-parser  将post提交请求数据保存在body中
var bodyParse = require('body-parse');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
```
8. 数据库连接、schema结构定义、model创建

```
（1）数据库连接：
    安装mongodb--启动服务 进入bin路径 win+R打开控制台 mongod（首次需指定dbpath）
（2）schema结构定义

    var mongoose = require('mongoose');
    module.exports = new mongoose.Schema({
        name:String,
        psd:{
            type:String,
            default:''
        }
    })
 （3）创建model
 
    var mongoose = require('mongoose');
    var userSchema = require('../models/user');
    
    module.exports = mongoose.model('User',userSchema);
```
