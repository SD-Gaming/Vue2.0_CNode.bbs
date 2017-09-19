<template>
	<div class="PostList">
	    <div class="loading" v-if="loading">
	        Loading...
	    </div>
	    <div class="posts" v-else>
			<ul>
				<li v-for="post in posts">
					<router-link :to="{ name: 'user_info', params: { name: post.author.loginname }}" :title="post.author_id">
						<img :src="post.author.avatar_url" :title="post.author.loginname"/>
					</router-link>
					<span>
						{{ post.reply_count }}/{{ post.visit_count }}
					</span>
					<router-link :to="{ name: 'post_content', params: { id: post.id }}" :title="post.title">
						{{ post.title }}
					</router-link>
					<span class="last_reply">
						{{ post.last_reply_at | formatDate}}
					</span>
				</li>
			</ul>
	    </div>
	</div>
</template>

<script>
	export default {
	  name: 'PostList',
	  data () {
	    return {
	      posts:{},
	      loading:false
	    }
	  },
      filters: {
        timeStyle(createTime) {
            return String(createTime).match(/.{10}/)[0];
        }
    },
	  methods: {
	  	getData(){
			this.$http({
                url: 'https://cnodejs.org/api/v1/topics',
                method: 'get',
                params: {
                    page: 1,
                    limit:20,
                }
              })
			  .then( (response) => {
			  	if( response.data.success === true ){
			  		this.posts = response.data.data;
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

<style scoped>
	.PostList .posts li {
		list-style: none;
		margin-bottom: 15px;
	}
	.PostList .posts ul li img {
		width: 30px;
		height: 30px;
	}
	.PostList .posts li span {
		display: inline-block;
		text-align: center;
		width: 70px;
		font-size: 12px;
		margin: 0 10px;
	}
	.PostList .posts a {
		text-decoration: none;
		color: inherit;
	}
	.last_reply {
		float: right;
	}
</style>