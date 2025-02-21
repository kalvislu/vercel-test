<template>
  <div>
    <h3 class="text-center mb-4"> Useful links </h3>
    <div class="d-flex gap-4 align-center flex-wrap">
      <e-btn v-for="link in links" :key="link.id" :href="link.href" target="_blank">
        {{ link.name }}
      </e-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const links = ref([
  { id: 0, href: 'https://v3-migration.vuejs.org/', name: 'Vue 3 Migration guide' },
  { id: 1, href: 'https://vuejs.org/guide/extras/composition-api-faq.html', name: 'Composition API FAQ' },
  { id: 2, href: 'https://vuetifyjs.com/en/', name: 'Vuetify' },
  { id: 3, href: 'https://kazupon.github.io/vue-i18n/introduction.html', name: 'i18n' },
  { id: 4, href: 'https://axios-http.com/docs/intro', name: 'Axios' },
  { id: 5, href: 'https://www.codeandweb.com/babeledit', name: 'BabelEdit' },
])
</script>
