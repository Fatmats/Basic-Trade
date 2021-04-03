import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from './router'
import VueCookies from 'vue-cookies'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2)

library.add(faShoppingBasket)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCookies)

// set default config
Vue.$cookies.config('7d')

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
