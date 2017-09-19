<template>
  <div class="Header">
  	<router-link :to="{name:'root'}">
  		<img src="../assets/cnodejs_light.svg"/>
  	</router-link>
  	<span><a href="#">关于</a></span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Header {
		background:#5a5555 ;
		height: 50px;
	}
	a {
		text-decoration: none;
		color: #cbc9c9;
	}
	img {
		max-width: 120px;
		margin-left: 50px;
		margin-top: 10px;
	}
	 span {
		float: right;
		margin-right: 50px;
		margin-top: 10px;
	}
</style>
