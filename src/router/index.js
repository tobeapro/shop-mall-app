import Vue from 'vue'
import Router from 'vue-router'
import Acomponent from '../components/ca.vue'
import Bcomponent from '../components/cb.vue'
import Ccomponent from '../components/cc.vue'
Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'/',
      name:'ca',
      component:Acomponent
    },
    {
      path:'/cb',
      name:'cb',
      component:Bcomponent
    },{
      path:'/cc',
      name:'cc',
      component:Ccomponent
    }
  ]
})