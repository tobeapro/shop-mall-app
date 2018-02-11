import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components//views/home.vue'
import Category from '../components/views/category.vue'
import ShopCar from '../components/views/shopCar.vue'
import User from '../components/views/user.vue'
Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/category',
      name:'category',
      component:Category
    },
    {
      path:'/shopCar',
      name:'shopCar',
      component:ShopCar
    },
    {
      path:'/user',
      name:'user',
      component:User
    }
  ]
})