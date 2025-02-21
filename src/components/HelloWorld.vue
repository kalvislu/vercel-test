<template>
  <v-container>
    <v-row class="text-center pa-5">
      <v-col cols="12">
        <e-logo />
      </v-col>
      <v-col class="mb-4">
        <h1 class="large-title">{{ $t('welcome_title') }}</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="mb-3">{{ $t('what_next') }}</h2>

        <e-button v-for="(next, i) in whatsNext" :key="i" :href="next.href" target="_blank" class="mx-3">
          {{ next.text }}
        </e-button>
      </v-col>
      <v-col class="mb-4">
        <h3>Vuex + Axios</h3>
        <br />
        {{ bitcoinCurrentPrice }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { mapActionsGeneral, mapGettersGeneral } from '@/store/modules/general'
import { getEnv } from '@env'

export default Vue.extend({
  name: 'HelloWorld',

  data() {
    return {
      whatsNext: [
        {
          text: 'Storybook',
          href: 'https://storybook.ekool.eu/',
        },
        {
          text: 'Vuetify',
          href: 'https://vuetifyjs.com/en/getting-started/installation/',
        },
        {
          text: 'i18n',
          href: 'https://kazupon.github.io/vue-i18n/introduction.html',
        },
        {
          text: 'Axios',
          href: 'https://axios-http.com/docs/intro',
        },
        {
          text: 'Vue cookbook',
          href: 'https://v2.vuejs.org/v2/cookbook/index.html',
        },
      ],
    }
  },

  mounted() {
    // use axios with vuex
    this.getBitcoinCurrentPrice()

    // env vars usage
    console.log('env', getEnv('VITE_APP_FRONTEND_PROJECT_NAME'))

    // Use axios directly
    this.$api.get('/v1/bpi/currentprice.json').then((response) => console.log('AXIOS:', response.data))
  },
  computed: {
    ...mapGettersGeneral({
      bitcoinCurrentPrice: 'bitcoinCurrentPrice',
    }),
  },
  methods: {
    ...mapActionsGeneral(['getBitcoinCurrentPrice']),
  },
})
</script>
