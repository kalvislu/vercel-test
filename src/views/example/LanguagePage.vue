<!-- EXAMPLE PAGE -->

<!-- Packages:
vue-i18n
vue-i18n-composable
js-cookie
-->

<template>
  <div class="d-flex flex-column gap-4">
    <e-select v-model="language" :items="validLocales" @update:model-value="setLanguage" />
    <div
      >There are two ways to handle locale
      <ol class="ml-10">
        <li>Set and get it from cookies by using <b>js-cookie</b> package and <i>pageLanguage</i> key</li>
        <li>Get it from query params: <i>lang</i></li>
      </ol>
    </div>
  </div>
</template>

<script setup>
/**
 *  packages
 *  - vue-i18n
 *  - js-cookie
 *  - vuetify
 */
import Cookie from 'js-cookie'
import { onBeforeMount, ref } from 'vue'

import { validLocales } from '@/i18n'
import { useI18n } from 'vue-i18n'
import { useLocale } from 'vuetify'

const vuetifyLocale = useLocale()
const { locale } = useI18n()

const language = ref(Cookie.get('pageLanguage') || 'en')

const setLanguage = (val) => {
  Cookie.set('pageLanguage', val, { domain: '.ekool.dev' })

  // change app locale
  locale.value = val
  // change vuetify locale
  vuetifyLocale.current.value = val
}

onBeforeMount(() => {
  setLanguage(language.value)
})
</script>
