import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
import VueEkoolPlugin from '@k12tech/ekool-vue-framework'
import '@/scss/main.scss'
import { axios } from './api'

Vue.prototype.$api = axios
Vue.config.productionTip = false

const context = {
  vuetify,
  router,
  store,
  i18n,
}
Vue.use(VueEkoolPlugin, { context })

new Vue({
  ...context,
  render: (h) => h(App),
}).$mount('#app')
