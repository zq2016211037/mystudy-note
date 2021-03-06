import Vue from 'vue'		//引入Vue
import Router from 'vue-router'		//引入vue-router
import HelloWorld from '@/components/HelloWorld'	//引入根目录下的Hello.vue组件
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'

Vue.use(Router)		//Vue全局使用Router

export default new Router({
  routes: [			//配置路由，这里是个数组
    {				//每个链接都是一个对象
      path: '/',		//链接路径
      name: 'HelloWorld',	//路由名称
      components: {
        default:HelloWorld,
        left:Hi1,
        right:Hi2
      }		//对应模板
    },
    {
      path:'/Hi',
      components:{
        default:Hi,
        left:Hi1,
        right:Hi2
      }
    },
    {
      path: '/Hi1',
      name: 'Hi1',
      components: {
        Hi1
      }
    },
    // {
    // 	path:'/Hi',
    // 	component:Hi,
    // 	children:[
    // 	  {path:'/',name:'z/Hi',component:Hi },
    // 	  {path:'/Hi1',name:'Hi1',component:Hi1},
    // 	  {path:'Hi2',  name:'HelloWorld/Hi/Hi2',component:Hi2}
    // 	]
    // }

    // 利用url传递参数
    {
      path:'/params/:newId/:newsTitle',
      component:params 
    }
  ]
})
