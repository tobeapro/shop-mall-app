<template>
  <div class="app">
    <div class="bottom-menu">
      <router-link to="/"><img src="./assets/img/home.png">首页</router-link>
      <router-link to="/category"><img src="./assets/img/category.png">分类</router-link>
      <router-link to="/shopCar"><img src="./assets/img/shopcar.png">购物车</router-link>
      <router-link to="/user"><img src="./assets/img/user.png">我的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
    }
  },
  computed:{
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
  font-size:12px;
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
  z-index:1;
  bottom:0;
  padding:6px 0;
  width:100%;
  height:60px;
  display:flex;
  background-color:#fff;
  box-shadow:0 -1px 10px #ddd;
  a{
    flex:1;
    display:flex;
    flex-direction: column;
    align-items:center;
    text-align:center;
    color:#000;
    font-weight:bold;
    img{
      margin-bottom:6px;
      filter: grayscale(100%);
    }
    &.router-link-exact-active{
      color:#1296db;
      img{
        filter: grayscale(0);
      }
    }
  }
}
</style>
