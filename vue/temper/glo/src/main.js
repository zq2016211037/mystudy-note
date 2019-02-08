// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Global from './assets/Global'
import store from './store/store'
import Vuex from 'vuex'

Vue.use(Vuex);

Vue.config.productionTip = false
Vue.prototype.Global = Global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
