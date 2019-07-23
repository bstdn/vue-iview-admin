import Vue from 'vue'

import iView from 'iview'

import './index.less'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
