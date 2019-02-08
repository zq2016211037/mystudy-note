//node.js单步调试
var a=1;
var b='world';

var c=function(x){
	console.log('hello'+x+a);
};
c(b);

// $ node debug debug.js
// < Debugger listening on port 5858
// debug> . ok
// break in E:\mynodeworkplace\node调试\debug.js:2
//   1 //node.js单不调试
// > 2 var a=1;
//   3 var b='world';
//   4
// debug> n
// break in E:\mynodeworkplace\node调试\debug.js:3
//   1 //node.js单不调试
//   2 var a=1;
// > 3 var b='world';
//   4
//   5 var c=function(x){
// debug> n
// break in E:\mynodeworkplace\node调试\debug.js:5
//   3 var b='world';
//   4
// > 5 var c=function(x){
//   6     console.log('hello'+x+a);
//   7 };
// debug> sb('debug.js',6)
//   1 //node.js单不调试
//   2 var a=1;
//   3 var b='world';
//   4
// > 5 var c=function(x){
// * 6     console.log('hello'+x+a);
//   7 };
//   8 c(b);
//   9 });
// debug> c
// break in E:\mynodeworkplace\node调试\debug.js:6
//   4
//   5 var c=function(x){
// > 6     console.log('hello'+x+a);
//   7 };
//   8 c(b);
// debug> c
// < helloworld1


//远程调式

