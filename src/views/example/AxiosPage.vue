<!-- EXAMPLE PAGE -->

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex justify-center gap-4">
      <e-btn :loading="loading" @click="fetchData"> Fetch </e-btn>
      <e-btn :loading="loadingFake" @click="fetchDataFake"> Fetch from fake api </e-btn>
    </div>
    <div>
      {{ dataFromApi }}
    </div>
  </div>
</template>

<script setup>
/**
 *  packages
 *  - axios
 */

// https://axios-http.com/docs/intro - axios documentation
import { api } from '@/api'
import { ref } from 'vue'

const dataFromApi = ref(null)
const loading = ref(false)
const loadingFake = ref(false)

const fetchData = async () => {
  loading.value = true
  dataFromApi.value = await api.getDataFromApi()
  loading.value = false
}

const fetchDataFake = async () => {
  loadingFake.value = true
  dataFromApi.value = await api.getDataFromFakeApi()
  loadingFake.value = false
}
</script>
