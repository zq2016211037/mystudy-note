//process.nextTick()
// function dosomething(args,callback){
// 	somthingComplicated(args);
// 	process.nextTick(callback);
// }
// dosomething(function onload(){
// 	compute();
// });

//console

//常用工具util
//util.inherits
var util = require('util');

function Base(){
	this.name="base";
	this.base=1991;
	this.sayHello=function(){
		console.log("HEllo"+this.name);
	}
}

Base.prototype.Showname=function(){
	console.log(this.name);
};

function sub(){
	this.name="sub";
}

util.inherits(sub,Base);

var objBase=new Base();
objBase.Showname();
objBase.sayHello();
console.log(objBase);

var objsub=new sub();
objsub.Showname();
//objsub.sayHello();	//报错
console.log(objsub);

//util.inspect
var util=require('util');
function Person(){
	this.name='zq';
	this.toString=function(){
		return this.name;
	};
}
var obj =new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj),true);

//事件驱动Events
//事件发射器
var events=require('events');

var emitter=new events.EventEmitter();

emitter.on('someEvent',function(arg1,arg2){
	console.log('listen1',arg1,arg2);
});
emitter.on('someEvent',function(arg1,arg2){
	console.log('listen2',arg1,arg2);
});
emitter.emit('someEvent','byvoid',1991);

//error事件,当error被发射，EventEmitter规定如果没有响应的监听器，
//node.js会把它当做异常，退出程序并打印调用栈
// var events=require('events');

// var emitter=new events.EventEmitter();

// emitter.emit('error');

//文件系统fs
//读取文件
//node.js的异步编程习惯是以函数最后一个参数作为回调函数，通常一个函数只有一个回调函数
//回调函数中第一个参数是err，其余的参数是其他返回的内容。
//异步readFile（）
var fs=require('fs');

fs.readFile('content.txt',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});

//fs.readFileSync同步读取文件，需要使用try-catch捕获异常

//fs.open
//fs.open(path,flags,modle,callback(err,fd))

//fs.read
//fs.read(fd,buffer,offset,length,opsition,[callback(err,bytesRead,buffer)])
var fs=require('fs');

fs.open('content.txt','r',function(err,fd){
	if(err){
		console.log(err);
		return;
	}

	var buf=new Buffer(24);
	fs.read(fd,buf,0,24,null,function(err,bytesRead,buffer){
		if(err){
			console.log(err);
			return;
		}
		console.log('bytesRead:'+bytesRead);
		console.log(buffer);
	})
});

//HTTP服务器与客户端

//HTTP服务器
