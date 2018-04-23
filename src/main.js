// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'

// font
import fonts from '@/assets/iconfont/material-icons.css'

// MuseUI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// ripple
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
Vue.use(VueTouchRipple, {
  color: '#000',
  opacity: 0.1,
  speed: 1,
  transition: 'ease'
})

// vue-cookie
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
