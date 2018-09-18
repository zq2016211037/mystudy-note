## 一、安装vue.js

```
$npm -v
//2.3.0

//全局安装
$cnpm install --global vue-cli

//初始化 创建项目
$vue init webpack my-project

//进入项目 安装依赖项
$cd my-project
$npm install

//运行，打开http://localhost:8080/可以访问
$npm run dev
```
## 二、目录结构

```
build	项目构建(webpack)相关代码
config	配置目录，包括端口号等。我们初学可以使用默认的。
node_modules	npm 加载的项目依赖模块
src	
这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：

assets: 放置一些图片，如logo等。
components: 目录里面放了一个组件文件，可以不用。
App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。
main.js: 项目的核心文件。
static	静态资源目录，如图片、字体等。
test	初始测试目录，可删除
.xxxx文件	这些是一些配置文件，包括语法配置，git配置等。
index.html	首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
package.json	项目配置文件。
README.md	项目的说明文档，markdown 格式
```
## 三、vue构造器

### 1. vue构造器创建
```
var vm = new Vue({
    //选项
})
```

```
<!--实例 -->
<div id="vue_det">
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>{{details()}}</h1>
</div>
<script type="text/javascript">
    var vm = new Vue({
        el: '#vue_det',
        data: {
            site: "菜鸟教程",
            url: "www.runoob.com",
            alexa: "10000"
        },
        methods: {
            details: function() {
                return  this.site + " - 学的不仅是技术，更是梦想！";
            }
        }
    })
</script>
```
### 2. vue数据对象的定义

```
vue构造器中
1. data： 定义属性
2. methods：定义函数

DOM中
3. {{}} 用于输出对象属性和函数返回值

```
### vue的data中属性与HTML对应关系
Vue实例被创建时，它的响应式系统中加入了data对象中能找的所有属性。即data对象中的属性发生改变时，HTML视图也会产生相应变化。

```
<div id="vue_det">
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>Alexa : {{alexa}}</h1>
</div>
<script type="text/javascript">
// 我们的数据对象
var data = { site: "菜鸟教程", url: "www.runoob.com", alexa: 10000}
var vm = new Vue({
    el: '#vue_det',
    data: data
})
// 它们引用相同的对象！
document.write(vm.a === data.a) // true
document.write("<br>")
// 设置属性也会影响到原始数据
vm.site = "Runoob"
document.write(data.site + "<br>") // Runoob
 
// ……反之亦然
data.alexa = 1234
document.write(vm.alexa) // 1234
</script>
```

### vue实例属性和方法
除了数据属性，Vue 实例还提供了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来
```
<div id="vue_det">
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>Alexa : {{alexa}}</h1>
</div>
<script type="text/javascript">
// 我们的数据对象
var data = { site: "菜鸟教程", url: "www.runoob.com", alexa: 10000}
var vm = new Vue({
    el: '#vue_det',
    data: data
})
 
document.write(vm.$data === data) // true
document.write("<br>") // true
document.write(vm.$el === document.getElementById('vue_det')) // true
</script>
```
## 四、模板语法

### 1. 插值


```
//1. 文本插值：{{}}
<div id="app">
  <p>{{ message }}</p>
</div>

//2. HTML：v-html指令输出HTML代码
<div id="app">
    <div v-html="message"></div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: '<h1>菜鸟教程</h1>'
  }
})
</script>

//3. 属性：v-bind属性插值，注意类名需要加{}，否则取得的是类名的值而不是类名
<div id="app">
  <label for="r1">修改颜色</label><input type="checkbox" v-model="class1" id="r1">
  <br><br>
  <div v-bind:class="{'class1': class1}">
    directiva v-bind:class
  </div>
</div>
    
<script>
new Vue({
    el: '#app',
  data:{
      class1: false
  }
});
</script>


//4. 表达式
<div id="app">
    {{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">菜鸟教程</div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    ok: true,
    message: 'RUNOOB',
    id : 1
  }
})
</script>
```
### 2. 指令

1. 指令是带有 v- 前缀的特殊属性。指令用于在表达式的值改变时，将某些行为应用到 DOM 上
```
//这里， v-if 指令将根据表达式 seen 的值(true 或 false )来决定是否插入 p 元素。
<div id="app">
    <p v-if="seen">现在你看到我了</p>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    seen: true
  }
})
</script>

```

```
参数 ： 参数在指令后以冒号形式指明
    
    - 值绑定：参数是一个属性
    <div id="app">
        <pre><a v-bind:href="url">菜鸟教程</a></pre>
    </div>
        
    <script>
    new Vue({
      el: '#app',
      data: {
        url: 'http://www.runoob.com'
      }
    })
    </script>
    
    - 监听事件：参数是一个方法
    <a v-on:click="doSomething">
    
```

```
修饰符：修饰符是以半角句号 . 指明的特殊后缀，用于指出一个指定应该以特殊方式绑定

//例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：

<form v-on:submit.prevent="onSubmit"></form>
```

### 3. 用户输入

```
1. input 输入框中双向数据绑定
<div id="app">
    <p>{{ message }}</p>
    <input v-model="message">
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  }
})
</script>
```

```
//v-on 监听事件
<div id="app">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转字符串</button>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
</script>
```

### 4. 过滤器

```
Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。由"管道符"指示, 格式如下：

<!-- 在两个大括号中 -->
{{ message | capitalize }}

<!-- 在 v-bind 指令中 -->
<div v-bind:id="rawId | formatId"></div>
过滤器函数接受表达式的值作为第一个参数。

以下实例对输入的字符串第一个字母转为大写：
```

```
<div id="app">
  {{ message | capitalize }}
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: 'runoob'
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
</script>
```

### 5. 缩写

```
v-bind 缩写
Vue.js 为两个最为常用的指令提供了特别的缩写：

<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
v-on 缩写
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```
## 五、vuejs条件与循环

### 1. 条件判断

- 1. v-if：在元素和template中使用v-if

```
<div id="app">
    <p v-if="seen">现在你看到我了</p>
    <template v-if="ok">
      <h1>菜鸟教程</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p>哈哈哈，打字辛苦啊！！！</p>
    </template>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    seen: true,
    ok: true
  }
})
</script>
```
- 2. v-else

```
<div id="app">
    <div v-if="Math.random() > 0.5">
      Sorry
    </div>
    <div v-else>
      Not sorry
    </div>
</div>
    
<script>
new Vue({
  el: '#app'
})
</script>
```
- 3 . v-else-if

```
<div id="app">
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    type: 'C'
  }
})
</script>
```
- 4. v-show 我们也可以使用 v-show 指令来根据条件展示元素

```
<h1 v-show="ok">Hello!</h1>
```
### 2. 循环语句
- 1. 循环使用 v-for 指令。v-for 指令需要以 site in sites 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名

```
1. 绑定数据到数组来渲染一个列表
<div id="app">
  <ol>
    <li v-for="site in sites">
      {{ site.name }}
    </li>
  </ol>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ]
  }
})
</script>
```

```
2. 模板中使用 v-for
<ul>
  <template v-for="site in sites">
    <li>{{ site.name }}</li>
    <li>--------------</li>
  </template>
</ul>
```

```
3. v-for 可以通过一个对象的属性来迭代数据
<div id="app">
  <ul>
    <li v-for="value in object">
    {{ value }}
    </li>
  </ul>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    }
  }
})
</script>


//提供第二个参数作为键名
<div id="app">
  <ul>
    <li v-for="(value, key) in object">
    {{ key }} : {{ value }}
    </li>
  </ul>
</div>
//提供第三个参数作为索引
<div id="app">
  <ul>
    <li v-for="(value, key, index) in object">
     {{ index }}. {{ key }} : {{ value }}
    </li>
  </ul>
</div>
```

```
4. v-for 也可以循环整数

<div id="app">
  <ul>
    <li v-for="n in 10">
     {{ n }}
    </li>
  </ul>
</div>
```
## 六、计算属性

### 1. Vue.js 计算属性 计算属性关键词: computed。

```
<!--反转字符串-->
<div id="app">
  {{ message.split('').reverse().join('') }}
</div>
```

```
<!--vm.reversedMessage 依赖于 vm.message，在 vm.message 发生改变时，vm.reversedMessage 也会更新-->
<div id="app">
  <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>
</div>
 
<script>
var vm = new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
</script>
```
### 2. computed vs methods

1. 效果上两个都是一样的

2. computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。

3. 可以说使用 computed 性能会更好，但是如果你不希望缓存，你可以使用 methods 属性。

```
methods: {
  reversedMessage2: function () {
    return this.message.split('').reverse().join('')
  }
}
```
### 3. computed setter

- computed 属性默认只有 getter ，不过在需要时你也可以提供一个 setter 


```
var vm = new Vue({
  el: '#app',
  data: {
    name: 'Google',
    url: 'http://www.google.com'
  },
  computed: {
    site: {
      // getter
      get: function () {
        return this.name + ' ' + this.url
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  }
})
// 调用 setter， vm.name 和 vm.url 也会被对应更新
vm.site = '菜鸟教程 http://www.runoob.com';
document.write('name: ' + vm.name);
document.write('<br>');
document.write('url: ' + vm.url);
```

## 七、vuejs 监听属性

-  Vue.js 监听属性 watch，我们可以通过 watch 来响应数据的变化

```
<div id = "computed_props">
    千米 : <input type = "text" v-model = "kilometers">
    米 : <input type = "text" v-model = "meters">
</div>
<p id="info"></p>
<script type = "text/javascript">
    var vm = new Vue({
    el: '#computed_props',
    data: {
        kilometers : 0,
        meters:0
    },
    methods: {
    },
    computed :{
    },
    watch : {
        kilometers:function(val) {
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters : function (val) {
            this.kilometers = val/ 1000;
            this.meters = val;
        }
    }
    });
    // $watch 是一个实例方法
    vm.$watch('kilometers', function (newValue, oldValue) {
    // 这个回调将在 vm.kilometers 改变后调用
    document.getElementById ("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
})
</script>

```
## 八、vuejs 样式绑定

class 与 style 是 HTML 元素的属性，用于设置元素的样式，我们可以用 v-bind 来设置样式属性。（表达式可以为字符串、数组、对象）

### 1. vuejs class属性绑定


```
1. 字符串

 <!--isActive 设置为 true 显示了一个绿色的 div 块-->
<div v-bind:class = "{active：isActive}"></div>
```

```
2. 绑定数据里的一个对象

<div id="app">
  <div v-bind:class="classObject"></div>
</div>
<script>
new Vue({
  el: '#app',
  data: {
    classObject: {
      active: true,
      'text-danger': true
    }
  }
})
</script>

<!--绑定数据对象的计算属性-->
<div id="app">
  <div v-bind:class="classObject"></div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
  isActive: true,
  error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
      }
    }
  }
})
</script>

```

```
3. 数组语法
<div v-bind:class="[activeClass, errorClass]"></div>

<!--三元表达式-->
<div v-bind:class="[errorClass ,isActive ? activeClass : '']"></div>
```

### 2. vuejs style内联样式

```
1. 字符串
<div id="app">
	<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">菜鸟教程</div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    activeColor: 'green',
	fontSize: 30
  }
})
</script>
```

```
2. 样式对象
<div id="app">
  <div v-bind:style="styleObject">菜鸟教程</div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    styleObject: {
      color: 'green',
      fontSize: '30px'
    }
  }
})
</script>
```

```
3. 数组
<div id="app">
  <div v-bind:style="[baseStyles, overridingStyles]">菜鸟教程</div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    baseStyles: {
      color: 'green',
      fontSize: '30px'
    },
	overridingStyles: {
      'font-weight': 'bold'
    }
  }
})
</script>
```
==当 v-bind:style 使用需要特定前缀的 CSS 属性时，如 transform ，Vue.js 会自动侦测并添加相应的前缀。==

## 九、事件处理器

v-on指令勇于事件监听

```
<div id="app">
   <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
 
<script>
var app = new Vue({
  el: '#app',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
          alert(event.target.tagName)
      }
    }
  }
})
// 也可以用 JavaScript 直接调用方法
app.greet() // -> 'Hello Vue.js!'
</script>
```
### 1. 事件修饰符
```
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>

<!-- click 事件只能点击一次，2.1.4版本新增 -->
<a v-on:click.once="doThis"></a>
```
### 3. 按键修饰符

```
按键修饰符
Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：

<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">
记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：

<!-- 同上 -->
<input v-on:keyup.enter="submit">
<!-- 缩写语法 -->
<input @keyup.enter="submit">

```

```
全部的按键别名：
.enter
.tab
.delete (捕获 "删除" 和 "退格" 键)
.esc
.space
.up
.down
.left
.right
.ctrl
.alt
.shift
.meta
```
## 十、 表单的双向数据绑定

## 十一、组件
