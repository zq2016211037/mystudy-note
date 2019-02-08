<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <p>{{$route.name}}</p>
    <div>导航|
      <router-link to="/">首页</router-link>|
      <router-link to="/Hi">hi 页面</router-link>|
      <router-link :to="{name:'Hi',params:{username: 'Zqian'}}">hi 页面1</router-link>|
      <router-link to="/Hi/Hi2">hi 页面2</router-link>
    </div>

  <router-view/>
  <router-view name="left" style="float:left;background:#ccc;width:50%;height:300px"></router-view>
  <router-view name="right" style="float:right;background:#c0c;width:50%;height:300px"></router-view>

  <router-link to="/params/198/jspang website is very good">params</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
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
