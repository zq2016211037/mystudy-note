import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import correct from '@/components/correct'
import editor from '@/components/editor'
import loginAndregister from '@/components/loginAndregister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/correct',
      name:'correct',
      component:index
    },
    {
      path:'/editor',
      name:'editor',
      component:editor
    },
    {
      path:'/loginAndregister',
      name:'loginAndregister',
      component:loginAndregister
    }
  ]
})
