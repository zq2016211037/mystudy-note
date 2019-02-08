//创建一个http服务器
// var http=require('http');
// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'Text/html'});
// 	res.write("<h1>Node.js</h1>");
// 	res.end("<p>hello world</p>");
// }).listen(3000);
// console.log("http server is listening at port 3000");


//node.js的异步式I/O
// var fs=require ('fs');

// fs.readFile('file.txt','utf-8',function(err,data){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(data);
// 	}
// });
// console.log('end.');
//发送异步请求，然后立即执行并返回后面的语句，接收到I/O请求完成事件时，时间循环主动调用回调函数已完成后续工作。
//end.
//file.txt内容

//node.js同步式调用
// var fs=require ('fs');

// var data=fs.readFileSync('file.txt','utf-8');
// console.log(data);
// console.log('end.');


//创建模块
//获取module.js接口
//getmodule
// var mymodule=require('./module.js');
// mymodule.setname("zq");
// mymodule.sayname();


//单次加载（require不会重复加载模块，
//也就是说不论调用多少次require，获得的对象搜是同一个）

//1.正常输出
//hellozq
//hellozqian

// var hello=require('./module.js');
// hello.setname('zq');
// hello.sayname();

// var helloagain=require('./module.js');
// helloagain.setname('zqian');
// helloagain.sayname();

// //2.单次加载
// var hello=require('./module.js');
// hello.setname('zq');

// var helloagain=require('./module.js');
// helloagain.setname('zqian');

// helloagain.sayname();
//helloagain覆盖hello，故输出结果为后者。
//hellozqian

//覆盖exports
//将对象封装载模块中
//1.exports.Hello=Hello
// var Hello=require('./module.js').Hello;

// var hellosb=new Hello();
// hellosb.setname('zq');
// hellosb.sayname();

//module.exports=Hello
// var Hello=require('./module.js');

// var hellosb=new Hello();
// hellosb.setname('zq');
// hellosb.sayname();

//两者的区别主要是后者用module.exports代替了exports.Hello
//这样使得在引用该模块的时候，借口对象是要输出的Hello对象本身，
//而不是之前的exports


//创建包

