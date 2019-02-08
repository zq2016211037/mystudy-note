<template>
  <div class="headTab">
    <router-link to='/'>首页</router-link>
    <router-link to='/'>下载</router-link>
    {{login}}
    <div>
      <ul class='login' v-if='!login'>
        登录
      </ul>
      <div v-else> zqian </div>
    </div>

  </div>
</template>

<script>
import Global from '../assets/Global'
import store from '../store/store'

export default {
  name: 'headTab',
  data () {
    return {
      login:this.Global.getLogin(),
    }
  },
  store,
  mounted(){
    var time = new Date();
    // console.log('head'+time);
    this.Global.headCon = '这是从headtab传过来的值';
    // alert(this.Global.login);
    console.log(this.$store.state.count);
  }
}

</script>


<style scoped>
.headTab{
  display: block;
  width: 100%;
  height: 40px;
  color: #000;
  background:#bde;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  color: #000;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
