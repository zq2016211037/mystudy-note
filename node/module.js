//module.js
// var name;

// exports.setname=function(thyname){
// 	name=thyname;
// };
// exports.sayname=function(){
// 	console.log("hello"+name);
// };

//将Hello封装module.js


//1.使用module.exports=Hello
// function Hello(){
// 	var name;

// 	this.setname=function(thyname){
// 		name=thyname;
// 	};
// 	this.sayname=function(){
// 		console.log("hello"+name);
// 	};
// }
// exports.Hello=Hello;
//2.使用exports.Hello=Hello
// function Hello(){
// 	var name;

// 	this.setname=function(thyname){
// 		name=thyname;
// 	};
// 	this.sayname=function(){
// 		console.log("hello"+name);
// 	};
// }
// module.exports=Hello;