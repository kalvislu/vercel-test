<!-- EXAMPLE PAGE -->
<template>
  <div class="d-flex flex-column gap-4">
    <e-hint variant="warning" size="small" title="It's better not to use store for small projects at all" />
    <e-btn @click="store.increment"> Store's action (increment) </e-btn>
    state: {{ store.count }} <br />
    computed: {{ store.doubleCount }}

    <e-btn @click="store.getDataFromApi"> Store's action (get country) </e-btn>
    {{ store.country }}
  </div>
</template>

<script setup>
/**
 * packages:
 * - pinia
 */

// https://pinia.vuejs.org/getting-started.html - pinia documentation
import { useExampleStore } from '@/store'
const store = useExampleStore()
</script>
