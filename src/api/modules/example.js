import axios from '../../plugins/axios'

// Useful tool to test app with fake data if backend is down or doesn't exist
import fakeApi from '@/api/fakeApi'

export const getDataFromApi = async () => {
  const { data } = await axios.get(`/v1/ip/country.json`)
  return data
}

export const getDataFromFakeApi = async () => {
  const { data } = await fakeApi.get(`/v1/ip/country.json`)
  return data
}
