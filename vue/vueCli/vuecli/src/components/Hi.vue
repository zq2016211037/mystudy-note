<template>
	<div>
		<h1>{{msg}}</h1>

		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'this is a hi page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
