<template>
	<div class="ArticleSection">
	    <div class="loading" v-if="loading">
	        Loading...
	    </div>
	    <div class="article" v-else>
			<h1>{{post.title}}</h1>
			<ul>
				<li>分类：{{ post.tab }}</li>
				<li>访问：{{ post.visit_count }}</li>
				<li>发布于：{{ post.create_at | formatDate }}</li>
				<li>
					作者：
					<router-link :to="{ name:'user_info',params:{name:post.author.loginname }}">{{ post.author.loginname }}</router-link>
				</li>
			</ul>
			<div v-html="post.content" id="content"></div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: '',
	  data () {
	    return {
	      post: {                   
	      	author: {
                loginname: 'temp',//设置默认值，防止Vue在axios未被调用前报错
               }
	      },
  	      loading:false
	    }
	  },
  	  methods: {
	  	getData(){
			this.$http({
	            url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
	            method: 'get',
	            params:{
	            	mdrender:true
	            }
	          })
			  .then( (response) => {
			  	if( response.data.success === true ){
			  		this.post = response.data.data;
			  		this.loading = false;
			  	}
			  })
			  .catch(function (error) {
			  	console.log(error);
			  });
	  	}
	  },
	    beforeMount() {
	    	this.loading = true;
	        this.getData();
	    }
	}
</script>

<style>
/*scoped属性导致css仅对当前组件生效，而html绑定渲染出的内容可以理解为是子组件的内容，子组件不会被加上对应的属性，所以不会应用css.
解决的话把scoped属性去掉就行了*/
	@import url("../assets/markdown-github.css");
	.ArticleSection {
		width: 60%;
		box-sizing: border-box;
		display: inline-block;
	}
	.ArticleSection #content {
		margin: 2rem auto 2rem auto;
		padding: 2rem 1rem 2rem 1rem;
		border: 1px solid #ddd;
		line-height: 1.6;
		padding-bottom: 1rem;
		background: #EFF2F7;
	}
	/*.AuthorSection #content  h1:first-of-type {
		display:none;
	}*/
	.ArticleSection > h1 {
		font-size: 1em;
	}
</style>