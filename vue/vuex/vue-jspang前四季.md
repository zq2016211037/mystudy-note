## 第一季 vue指令
v-if、v-else、v-for
v-model
v-text、v-html
v-bind:动态绑定属性  缩写：
v-on:绑定事件  缩写@
v-pre、、、、
## 第二季 全局API
```
1. 自定义指令 
	 Vue.directive('zqian',function(el,binding,vnode){
			el.style = 'color:' +binding,value
	})
    <div v-zqian="color" id="demo">
    	自定义指令
    </div>

自定义指令生命周期：

bind 、  inserted  、  update  、  componentUpdated  、  unbind
```


```
2. 构造器延伸
	var authorExtends = Vue.extend({
		template : '<p><a :href='authorUrl'>{{authorName}}</a></p>',
		data(){
			return {
				authorUrl = 'http://...',
				authorName = 'zqian'
			}
		}
	})


	//使用时需要挂载
	new authorExtends().$mount('author');
```

```
3. Vue.set()全局操作

(1) 外部数据
var dataout = {
	'name':'zqian',
	'age':'18'
}
var app = new Vue({
	el:'#app',
	data:function(){
		data:dataout
	}
})

(2) 改变外部数据方法

	- Vue.set()
function setData(){
	Vue.set(dataout,'name','zhengqian')
}
	- 用vue对象的方法操作。
	app.name = 'zhengqian'


(3) 使用直接操作外部数据
	dataout.name = 'zhengqian'

```

```
4. 生命周期

beforecreate、created、beforeMount、mounted、beforeUpdate、updated、activated、deactivated、beforeDestroy、destroyed

```

```
5. Template模板

（1） 直接写在选项里
 var app=new Vue({
     el:'#app',
     data:{
         message:'hello Vue!'
      },
     template:`
        <h1 style="color:red">我是选项模板</h1>
     `
})
（2）写在<template>标签里
    <template id="demo2">
             <h2 style="color:red">我是template标签模板</h2>
    </template>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            template:'#demo2'
        })
    </script>
（3）写在<script>标签里
    <script type="x-template" id="demo3">
        <h2 style="color:red">我是script标签模板</h2>
    </script>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            template:'#demo3'
        })
    </script>

```
```
6、 初始component组件

```
(1) Vue.component创建全局组件

    <div id="app">
        <jspang></jspang>
    </div>
 
    <script type="text/javascript">
        //注册全局组件
        Vue.component('jspang',{
            template:`<div style="color:red;">全局化注册的jspang标签</div>`
        })
        var app=new Vue({
            el:'#app',
            data:{
            }
        })
    </script>

（2）局部注册组件

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            components:{
                "panda":{
                    template:`<div style="color:red;">局部注册的panda标签</div>`
                }
            }
        })
    </script>
```
7. component组件 props

先使用构造器向组件传值，再获取定义的属性值
<panda v-bind:here="message"></panda>
        var app=new Vue({
            el:'#app',
            data:{
               message:'SiChuan' 
            },
            components:{
                "panda":{
                    template:`<div style="color:red;">Panda from {{ here }}.</div>`,
                    props:['here']
                }
            }
        })
```

```
8. 父子组件嵌套

    <script type="text/javascript">
       var city={
           template:`<div>Sichuan of China</div>`
       }
        var jspang = {
            template:`<div>
                    <p> Panda from China!</p>
                    <city></city>
            </div>`,
            components:{
                "city":city
            }
        }
        var app=new Vue({
            el:'#app',
            components:{
                "jspang":jspang
            }
           
        })
    </script>
```
## 第三季 option选项

```
1. propsData在全局扩展中传值
<header></header>

var header_a = Vue.extend({
	template:'<p>{{message}} - {{a}}</p>',
	data(){
		return {
			message:'hello world'
		}
	}
})

new header_a({propsData:{a:1}}).$mount('header');
```

```
2. computed option 计算选项
computed:{
    newPrice:function(){
        return this.price='￥' + this.price + '元';
    }
}
```

```
3. methods option 方法选项
（1） methods选项
var app=new Vue({
    el:'#app',
    data:{
        a:1
    },
    methods:{
        add:function(){
            this.a++
        }
    }
})
（2） methods传参

<button @click='add(2)'></button>

var app=new Vue({
    el:'#app',
    data:{
        a:1
    },
    methods:{
        add:function(num){
			if(num!=''){this.a+=num}
            else{this.a++}
        }
    }
})
(3) methods中的$event参数
<button @click="add(2,$event)">add</button>

(4) native  给组件绑定构造器里的原生事件
<button @click.native="add(2)">add</button>
    
（5）作用域外部调用构造器里的方法
<button onclick='app.add(3)'>外部构造器调用方法</button>

 4. watch选项 监控数据

 （1） watch属性监控实例
 js:
 var suggestion=['T恤短袖','夹克长裙','棉衣羽绒服'];
	var app=new Vue({
	    el:'#app',
	    data:{
	        temperature:14,
	        suggestion:'夹克长裙'
	    },
	    methods:{
	        add:function(){
	            this.temperature+=5;
	        },
	        reduce:function(){
	            this.temperature-=5;
	        }
	    },
	    watch:{
	        temperature:function(newVal,oldVal){
	            if(newVal>=26){
	                this.suggestion=suggestion[0];
	            }else if(newVal<26 && newVal >=0)
	            {
	                this.suggestion=suggestion[1];
	            }else{
	                this.suggestion=suggestion[2];
	            }
	        }
	    }

	})
html:
<div id="app">
        <p>今日温度：{{temperature}}°C</p>
        <p>穿衣建议:{{this.suggestion}}</p>
        <p>
            <button @click="add">添加温度</button>
            <button @click="reduce">减少温度</button>

        </p>
</div>
(2) 用实例属性写watch（把watch写在构造器外面）：降低代码耦合度
app.$watch('xxx',function(){})

app.$watch('temperature',function(newVal,oldVal){
    if(newVal>=26){
        this.suggestion=suggestion[0];
    }else if(newVal<26 && newVal >=0)
    {
        this.suggestion=suggestion[1];
    }else{
        this.suggestion=suggestion[2];
    }
 
})

```

```
5. mixins 混入选项

1、在你已经写好了构造器后，需要增加方法或者临时的活动时使用的方法，这时用混入会减少源代码的污染。

2、很多地方都会用到的公用方法，用混入的方法可以减少代码量，实现代码重用。

（1） 用法
       //额外临时加入时，用于显示日志
        var addLog={
            updated:function(){
                console.log("数据放生变化,变化成"+this.num+".");
            }
        }
        var app=new Vue({
            el:'#app',
            data:{
                num:1
            },
            methods:{
                add:function(){
                    this.num++;
                }
            },
            mixins:[addLog]//混入
        })
 （2）调用顺序
 都是混入的先执行，然后构造器里的再执行，需要注意的是，这并不是方法的覆盖，而是被执行了两边。

 （3）全局API混入模式
	Vue.mixin({
	    updated:function(){
	        console.log('我是全局被混入的');
	    }
	})

```

```
6. extends option 扩展选项
        var bbb={
            created:function(){
                console.log("我是被扩展出来的");
            },
            methods:{
                add:function(){
                    console.log('我是被扩展出来的方法！');
                }
            }
        };
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            methods:{
                add:function(){
                    console.log('我是原生方法');
                }
            },
            extends:bbb
        })

```

```
7. delimiters 选项,
改变我们插值的符号。Vue默认的插值是双大括号{{}}。但有时我们会有需求更改这个插值的形式。

delimiters:['${','}']

将差值形式改为了${}
```

## 第四季 实例和内置组件

```
2. 实例方法
（1） $mount()挂载
（2） $destroy()卸载
（3） $forceUpdate()更新方法
（4） $nextTick()数据修改方法
```

```
3. 实例事件

实例事件就是在构造器外部写一个调用构造器内部的方法

(1) $on 在构造器外部添加事件

(2) $once 执行一次的事件

(3) $off 关闭事件

```

```
4. 内置组件 -- slot讲解

slot为自定义组件传递内容

step1 : 在HTML的组件中用slot属性传值

<jspang>
    <span slot="bolgUrl">{{jspangData.bolgUrl}}</span>    
    <span slot="netName">{{jspangData.netName}}</span>    
    <span slot="skill">{{jspangData.skill}}</span>    
</jspang>

step2 : 在组件模板中用slot标签接收值

<template id="tmp">
    <div>
        <p>博客地址：<slot name="bolgUrl"></slot></p>
        <p>网名：<slot name="netName"></slot></p>
        <p>技术类型：<slot name="skill"></slot></p>
        
    </div>
</template>
```


