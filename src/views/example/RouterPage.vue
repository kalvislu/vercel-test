<!-- EXAMPLE PAGE -->
<template>
  <div class="d-flex flex-column gap-4">
    <e-btn @click="goToHomePage"> Go to home page (composition API) </e-btn>
  </div>
</template>

<script setup>
/**
  packages:
  - vue-router
  - @vue/cli-plugin-router
 */

// https://github.com/vuejs/vue-router/blob/dev/CHANGELOG.md#360-2022-08-22 - vue-router-3 release withs composables
import { useRouter } from 'vue-router'
const router = useRouter()

const goToHomePage = () => {
  router.push({ name: 'Home' })
}
</script>
