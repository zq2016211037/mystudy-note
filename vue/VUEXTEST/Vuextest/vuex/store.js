import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  count2: 2,
  count3: 3
}
// 同步修改状态
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  count: function (state) {
    state.count += 100

    return state.count
  }
}
// 异步修改状态
const actions = {
  // 上下文对象
  addAction (context) {
    context.commit('add', 10)
    setTimeOut(() => {
      context.commit('reduce')
    }, 1000)
    console.log('我比reduce先执行')
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}

const moduleA = {
  state, mutations, getters, actions
}
// 封装代码，使外部可以使用
export default new Vuex.Store({
  modules: {
    a: moduleA
  }
})
