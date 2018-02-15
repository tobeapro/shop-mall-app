import Vue from 'vue'
import Vuex from 'vuex'
import shop from './modules/shop'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    addCount(state){
      state.count++
    }
  },
  modules:{
    shop
  }
})