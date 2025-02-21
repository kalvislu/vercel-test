import '@/scss/main.scss'
import { createApp } from 'vue'
import App from './App.vue'

// plugins
import VueGtag from 'vue-gtag-next'
import i18n from './plugins/i18n'
import pinia from './plugins/pinia'
import vuetify from './plugins/vuetify'
import router from './router'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(i18n)
app.use(pinia)
app.use(VueGtag, {
  property: {
    id: process.env.VUE_APP_FRONTEND_GTM_TAG_ID,
  },
})
app.mount('#app')
