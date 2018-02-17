import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)
Vue.use(Mint)
Vue.config.productionTip = false
Vue.prototype.$axios=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
