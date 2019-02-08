<template>
	<div>
		<h2>{{msg}}<!-- +{{$route.params.username}}+{{$route.params.username}} --></h2>
	</div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: 'this is a hi1 page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
