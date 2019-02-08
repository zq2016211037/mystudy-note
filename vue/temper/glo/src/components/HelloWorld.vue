<template>
  <div class="hello">
    <button @click='login'>登录</button>
  </div>
</template>

<script>
import Global from '../assets/Global'
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  mounted:function(){
    // this.Global.login = true;
    // console.log(this.Global.headCon);
    // location.reload();
    var time = new Date();
    console.log('hello'+ time);
  },
  methods:{
    login:function(){
      this.Global.login = true;
      console.log('change login');
      console.log(this.Global);
      // location.reload();
      // console.log(this.Global.login);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  margin-top:100px;
  border:none;
  background:pink;
  padding:20px;
  color: #fff;
}
button:hover{
  cursor:pointer;
}
</style>
