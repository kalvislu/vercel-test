import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api } from '@/api'

// https://pinia.vuejs.org/core-concepts/#setup-stores
export default defineStore('counter', () => {
  const count = ref(0)
  const country = ref(null)
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }
  const getDataFromApi = async () => {
    country.value = await api.getDataFromApi()
  }

  return { count, name, doubleCount, increment, getDataFromApi, country }
})
