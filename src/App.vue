<template>
  <div class="app">
    <User />
    <div class="bottom-menu">
      <router-link to="/">首页</router-link>
      <router-link to="/category">分类</router-link>
      <router-link to="/shopCar">购物车</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import User from '../src/components/views/user.vue'
export default {
  name: 'app',
  computed:{
  },
  components: {
    User
  },
  methods:{
  }
}
</script>

<style lang="scss">
html,body,div,span,
applet,object,iframe,
h1,h2,h3,h4,h5,h6,p,blockquote,pre,
a,abbr,acronym,address,big,cite,code,
del,dfn,em,font,img,ins,kbd,q,s,samp,
small,strike,strong,sub,sup,tt,var,
dd,dl,dt,li,ol,ul,
fieldset,form,label,legend,select,
table,caption,tbody,tfoot,thead,tr,th,td,input,button,i,span{
	margin:0;
	padding:0;
	border:0;
	box-sizing: border-box;
}
html,body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
}
input,button,textarea,td,th,select{outline:none;}
table {border-collapse:collapse;border-spacing:0;}
ol,ul{list-style: none;}
a,a:visited,a:active,a:link{text-decoration:none;}
.clearfix:after{
	content:'';
	display:block;
	clear:both;
}
.clearfix{
	zoom:1;
}
.bottom-menu{
  position: fixed;
  bottom:0;
  width:100%;
  display:flex;
  background-color:#fff;
  border-top:1px solid #eee;
  a{
    flex:1;
    text-align:center;
    color:#000;
    &.router-link-exact-active{
      color:#006bf7;
    }
  }
}
</style>
