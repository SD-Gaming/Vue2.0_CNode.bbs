<template>
	<div class="SideBar">
	    <div class="loading" v-if="loading">
	        Loading...
	    </div>		
		<div v-else>
			作者
			<img :src="userinfo.avatar_url" :title="userinfo.loginname" />
			<router-link  :to="{ name: 'user_info', params: { name: userinfo.loginname }}" :title="userinfo.loginname">
				{{userinfo.loginname}}
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'SideBar',
	  data () {
	    return {
	      userinfo:null,
	      loading:false
	    }
	  },
	  methods: {
	  	getData(){
			this.$http({
	            url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
	            method: 'get',
	          })
			  .then( (response) => {
			  	if( response.data.success === true ){
			  		this.userinfo = response.data.data.author;
			  		this.loading = false
			  	}
			  })
			  .catch(function (error) {
			  	console.log(error);
			  });
		  	}
		 },
	    beforeMount() {
	    	this.loading = true
	        this.getData();
	  }
	}
</script>

<style scoped>
	.SideBar {
		float: right;
		width: 24%;
		box-sizing: border-box;
	    margin-right: 3%;
	    padding: 0.1rem 0.4rem;		
	}
	.SideBar img {
		width: 100%;
	}
</style>