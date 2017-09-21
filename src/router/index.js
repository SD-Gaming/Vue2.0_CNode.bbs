import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import SideBar from '@/components/SideBar'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
      	main:PostList
      }
    },
    {
    	path:'/topic/:id&auther=:name',
    	name:'post_content',
    	components:{
    		main:Article,
    		sidebar:SideBar
    	},
	  	beforeRouteUpdate (to, from, next) {
	    // 在当前路由改变，但是该组件被复用时调用
	    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
	    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
	    // 可以访问组件实例 `this`
	     next();
	 	 },
    },
    {
    	path:'/user/:name',
    	name:'user_info',
    	components:{
    		main:UserInfo,
    	}
    }
  ]
})
