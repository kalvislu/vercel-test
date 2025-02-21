<template>
  <div>
    <Example />
  </div>
</template>

<script setup>
import Example from '@/components/ExampleComponent.vue'
import { getEnv } from '@env' // @ is an alias to /src

console.log('env', getEnv('VUE_APP_FRONTEND_PROJECT_NAME'))
</script>
