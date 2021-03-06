### 引用css文件（css-loader、style-loader）
```
	require('style-loader!css-loader!./style.css')

	css-loader:使webpack可以处理.css文件；
	style-loader:通过css-loader处理后的文件插入到style标签中

	可在命令行中处理css文件需要的loader，避免每次使用require都需要制定loader

	webpack hello.js hello.bundle.js --moudle-bind 'css=style-loader!css-loader'

```

### 解决<script>标签之间的隐式依赖
```
使用lodash

npm install --save lodash
import _ from 'lodash'

```

### 入口与出口
```
npx webpack会将我们脚本作为入口起点，输出默认为main.js 
```

### bug1
```
 Path must be a string. Received undefined

 因为node版本太高，解决方法：1.降低版本；	2. 使用nvm切换版本（nvm install 版本号   nvm use 版本号）
```

### bug2 

```
npm -v无法执行，删除C:\users\账户\下的.npmrc文件即可
```
### bug3
```
问题：network request to https://registry.npmjs.org/css-loader failed
解决方法：使用淘宝源（三种指定方法）
1. 通过config命令

$ npm config set registry https://registry.npm.taobao.org 
$ npm info underscore （如果上面配置正确这个命令会有字符串response）

2. 命令行指定
$ npm --registry https://registry.npm.taobao.org info underscore 

3. 编辑~/.npmrc加入下面内容(这种方法发吧配置写死了，慢慢下次用的时候配置还在)
$registry = https://registry.npm.taobao.org
```
### module.exports 与export，exports 与exports default的区别
```
1. CommonJS模块规范：每个文件就是一个模块，有自己的作用域，每个文件中定义的变量、函数、类都是私有的，module变量代表当前模块，它的属性exports（module.exports）是对外接口
例：example.js
var x = 5;
var addx = function(val){
	return val += x;
}
module.exports.x = x;
module.exports.addx = addx;		//通过module.exports输出变量和函数

//加载模块
var example = require('./example.js');

console.log(example.x);		//5
console.log(example.addx(1));		//6

2. exports与module.exports
node为每个模块提供一个exports变量指向module.exports,于是可是直接在exports对象上添加方法，便是对外输出接口

3. es6模块规范，使用export与import来导入导出模块，注意export命令规定是对外接口，必须与模块内部变量建立一对一关系

// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

4.export default命令，为模块指定默认输出
export default function（）{
	alert('hello');
}
```

### 1. webpack4安装
```
mkdir webpack-demo && cd webpack-demo
npm init -y		初始化项目
npm install webpack webpack-cli --save-dev	//安装， webpack4+需要安装cli
```
### 2. 使用配置文件(webpack.config.js)
```
const path = require('path');

module.exports = {
	entry:'./src/index.js',		//入口文件
	output:{			//出口文件
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	}
}
```
### 3.打包文件
```
在package.json 添加npm脚本（script）
"build":"webpack"
使用npm run build打包相关文件
```

### 分离入口文件
```
	// entry:'./src/index.js',
	entry:{
		app:'./src/index.js',
		print:'./src/print.js'
	}
	output:{
		// filename:'bundle.js',
		filename:'[name].bundle.js'				//相应生成文件app.bundle.js和print.bundle.js
		path:path.resolve(__dirname,'dist')
	},
```

### 加载css
```
1. 安装相应的loader
npm install style-loader css-loader

2.修改webpack.config.js文件
module:{
	rules:[
		{
			test:/\.css$/,
			use:[
				'style-loader',
				'css-loader'
			]	
		}
	]
}
3.在js文件中应用css
import 'style-loader!css-loader!./style.css'


```
### 加载图片、字体
```
1. 安装file-loader
npm install --save-dev file-loader

2. 加载图片  
修改webpack.config.js文件  在rules中添加
{
	test:'/\.(png|svg|jpg|gif)/',
	use:['file-loader']
}
将图片转成base64的loader：npm install url-loader --save-dev (url-loader包含file-loader)

压缩图片的loader：npm install image-webpack-loader --save-dev

3. 加载字体
     修改webpack.config.js，在rules添加以下部分 

  {    
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader' ]
  }


    在CSS中自定义字体

  @font-face {
   font-family: 'MyFont';
   src:  url('./my-font.woff2') format('woff2'),
         url('./my-font.woff') format('woff');
   font-weight: 600;
   font-style: normal;
 }
```

### HtmlWebpackPlugin

```
作用：由webpack output生成的js文件由于常含有hash值，因此文件名是动态变化的，此时如果手动改变HTML文件引用的js是很麻烦的，该插件利用manifest可自动生成含有引用的HTML文件。

1. 安装
npm install --save-dev html-webpack-plugin

2.更改配置
plugins:[
	new HtmlWebpackPlugin({
		title:'output Management',
		template:'./dist/index.html'
	})
]
```
### clean-webpack-plugin(清理./dist文件)
```
1. 作用：由于过去的指南和代码示例遗留下来，导致我们的 /dist 文件夹相当杂乱。webpack 会生成文件，然后将这些文件放置在 /dist 文件夹中，但是 webpack 无法追踪到哪些文件是实际在项目中用到的。通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。  只保留重构之后的新生成文件。

npm install clean-webpack-plugin

2. 配置webpack.config.js
const CleanWebpackPlugin = require('clean-webpack-plugin');

plugins:[
	new CleanWebpackPlugin(['dist']),

	new HtmlWebpackPlugin({
		....
	})
]
```
### source-map
```
1. 作用：source map 功能，将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你

2. 配置：devtool: 'inline-source-map',

```
### 使用webpack-dev-server
```
1. 作用：提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)

2. 修改配置文件：告诉开发服务器(dev server)，在哪里查找文件

  devServer: {
     contentBase: './dist'
  }

3. 在package.json中添加一个 script 脚本，可以直接运行开发服务器(dev server)：

  "start": "webpack-dev-server --open"
```

### 模块热替换
```

自动编译代码：实时重新加载，重新加载整个页面。
模块热替换：避免重新加载整个页面。

模块热替换是在自动编译的基础上进行的！
```

### tree shaking

```
1. 作用：移除JavaScript上下文未引用部分。

2. 将文件标记为无副作用：通过package.json sideEffects属性实现  找出未使用文件

<!-- 无副作用，可删除 -->
{
	"name":"your-project",
	"sideEffects":false
}
<!-- 将由副作用文件添加到side effect列表中 数组方式支持相关文件的相对路径、绝对路径和 glob 模式-->
{
	"name":"your-project",
	"sideEffects":["",""]
}
「副作用」的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。举例说明，例如 polyfill，它影响全局作用域，并且通常不提供 export。

3. 还需要在 bundle 中删除它们。为此，我们将使用 -p(production) 这个 webpack 编译标记，来启用 uglifyjs 压缩插件。

mode:'production'

4. 总结
为了学会使用 tree shaking，你必须……

    使用 ES2015 模块语法（即 import 和 export）。
    在项目 package.json 文件中，添加一个 "sideEffects" 入口。
    引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。

```

### 生产环境构建(为每个环境构建独立的webpack)
```
1. webpack-merge: 通用配置
webpack.config.js => webpack.common.js、webpack.prod.js、webpack.dev.js

//webpack.common.js (入口、出口、HtmlWebpackPlugin)
+ const path = require('path');
+ const CleanWebpackPlugin = require('clean-webpack-plugin');
+ const HtmlWebpackPlugin = require('html-webpack-plugin');
+
+ module.exports = {
+   entry: {
+     app: './src/index.js'
+   },
+   plugins: [
+     new CleanWebpackPlugin(['dist']),
+     new HtmlWebpackPlugin({
+       title: 'Production'
+     })
+   ],
+   output: {
+     filename: '[name].bundle.js',
+     path: path.resolve(__dirname, 'dist')
+   }
+ };

//webpack.prod.js(生产环境) 代码压缩
+ const merge = require('webpack-merge');
+ const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
+ const common = require('./webpack.common.js');
+
+ module.exports = merge(common, {
+   plugins: [
+   devtool: 'source-map',
-     new UglifyJSPlugin()
+     new UglifyJSPlugin({
+       sourceMap: true
+     })
+   ]
+ });


//webpack.dev.js(开发环境)  inline-source-map webpack-dev-server
+ const merge = require('webpack-merge');
+ const common = require('./webpack.common.js');
+
+ module.exports = merge(common, {
+   devtool: 'inline-source-map',
+   devServer: {
+     contentBase: './dist'
+   }
+ });

2. 修改package.json (我们把 scripts 重新指向到新配置。我们将 npm start 定义为开发环境脚本，并在其中使用 webpack-dev-server，将 npm run build 定义为生产环境脚本)
    "scripts": {
-     "start": "webpack-dev-server --open",
+     "start": "webpack-dev-server --open --config webpack.dev.js",
-     "build": "webpack"
+     "build": "webpack --config webpack.prod.js"
    },

 3. 指定生产环境

```

### 代码分离

```
有三种常用的代码分离方法：

    入口起点：使用 entry 配置手动地分离代码。
    防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
    动态导入：通过模块的内联函数调用来分离代码。


1. 入口起点：entry文件对应output为[name].bundle.js

2. 防止重复：CommonsChunkPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。将重复模块去除。
    plugins: [
      new HTMLWebpackPlugin({
        title: 'Code Splitting'
-     })
+     }),
+     new webpack.optimize.CommonsChunkPlugin({
+       name: 'common' // 指定公共 bundle 的名称。
+     })
    ],

3. 动态导入

```