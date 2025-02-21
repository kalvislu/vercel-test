import { createNamespacedHelpers } from 'vuex'
import { api } from '../../api'
import * as types from '../types.js'

const NAMESPACE = 'general'

const {
  mapState: mapStateGeneral,
  mapMutations: mapMutationsGeneral,
  mapActions: mapActionsGeneral,
  mapGetters: mapGettersGeneral,
} = createNamespacedHelpers(NAMESPACE)

export { NAMESPACE, mapStateGeneral, mapMutationsGeneral, mapActionsGeneral, mapGettersGeneral }

export default {
  namespaced: true,
  state: () => ({
    bitcoinCurrentPrice: {},
    bitcoinCurrentPriceLoading: false,
  }),

  getters: {
    bitcoinCurrentPrice: (state) => state.bitcoinCurrentPrice,
    bitcoinCurrentPriceLoading: (state) => state.bitcoinCurrentPriceLoading,

    closeReasons: (state) => state.closeReasons,
    closeReasonsLoading: (state) => state.closeReasonsLoading,
  },

  mutations: {
    [types.SET_BITCOIN_CURRENT_PRICE]: (state, data = {}) => (state.bitcoinCurrentPrice = data),
    [types.SET_BITCOIN_CURRENT_PRICE_LOADING]: (state, loading) => (state.bitcoinCurrentPriceLoading = loading),
  },

  actions: {
    async getBitcoinCurrentPrice({ commit }) {
      try {
        commit(types.SET_BITCOIN_CURRENT_PRICE_LOADING, true)
        const data = await api.getBitcoinCurrentPrice()
        commit(types.SET_BITCOIN_CURRENT_PRICE, data)
      } catch (e) {
        console.error(e)
        throw e
      } finally {
        commit(types.SET_BITCOIN_CURRENT_PRICE_LOADING, false)
      }
    },
  },
}
