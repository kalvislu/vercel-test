import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { config } from '@k12tech/ekool-vue-framework/src/main'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  ...config,
})

export default vuetify
