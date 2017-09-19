<template>
	<div class="UserInfo">
	    <div class="loading" v-if="loading">
	        Loading...
	    </div>
	    <div class="userInfomation" v-else>
			<img :src="userinfo.avatar_url" :title="userinfo.loginname"/>
			{{userinfo.loginname}}
			<p>账号创建于：{{ userinfo.create_at | formatDate }}</p>
			最近回复的主题
			<ul>
				<li v-for="item in userinfo.recent_replies">{{item.title}}</li>
			</ul>
			最近创建的主题
			<ul>
				<li v-for="item in userinfo.recent_topics">{{item.title}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'UserInfo',
	  data () {
	    return {
	      userinfo: {},
	      loading:false
	    }
	  },
	  methods: {
	  	getData(){
			this.$http({
	            url: `https://cnodejs.org/api/v1/user/${this.$route.params.name}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
	            method: 'get',
	          })
			  .then( (response) => {
			  	if( response.data.success === true ){
			  		this.userinfo = response.data.data;
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
	
</style>