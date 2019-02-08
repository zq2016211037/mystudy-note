<template>
  <div id="app">
    <img src="./assets/logo.png">
    <headTab></headTab>
    <router-view/>
  </div>
</template>

<script>
import headTab from './components/headTab'
import HelloWorld from './components/HelloWorld'
import Global from './assets/Global'
import store from './store/store'
export default {
  name: 'App',
  components:{
    headTab,
  },
  mounted(){
    console.log(this.$store.state);
    console.log(store.state.count);
  },
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
