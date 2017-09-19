<template>
  <div id="app">
  	<cn-header></cn-header>
    <router-view name='main'></router-view>
    <router-view name='sidebar'></router-view>
  </div>
</template>

<script>
import cnHeader from './components/Header'

export default {
  name: 'app',
  components:{
  	cnHeader,
  },
  
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-size: 22px;
}
body,div,span,a,p,ul,li {
	margin: 0;
	padding: 0;
}
</style>
