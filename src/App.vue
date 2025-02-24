<template>
  <v-app>
    <v-main>
      <div class="d-flex justify-center flex-grow-1">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { validLocales } from '@/i18n'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { useLocale, useTheme } from 'vuetify'

const { locale } = useI18n()
const theme = useTheme()
const vuetifyLocale = useLocale()
const router = useRouter()
const route = useRoute()

const parentUrl = ref('')
const themeValue = ref(route.query.theme || 'light')

const changeTheme = (v) => {
  router.push({ query: { theme: v } })
}

router.beforeEach(async (to, from, next) => {
  // get parent URL to send messages to parent when app is in iframe
  if (to.query.parentUrl) {
    parentUrl.value = `https://${to.query.parentUrl}`
  }

  // set locales according to query (check language tab for more info)
  const queryLocale = String(to.query.locale || to.query.lang)
  if (queryLocale && validLocales.includes(queryLocale) && locale.value !== queryLocale) {
    locale.value = queryLocale
    vuetifyLocale.current.value = queryLocale
  }

  // set theme according to query
  const queryTheme = to.query.theme
  if (queryTheme) {
    theme.global.name.value = queryTheme
  }
  next()
})
</script>

<style lang="scss">
.logo {
  position: absolute;
}
</style>
