import Vue from 'vue'
import Vuex from 'vuex'

import general, { NAMESPACE as GENERAL } from './modules/general'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: import.meta.env.VITE_APP_ENVIRONMENT === 'development',
})

store.registerModule(GENERAL, general)

export default store
