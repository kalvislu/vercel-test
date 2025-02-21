// axios
import axios from 'axios'

const axiosInstance = axios.create({
  // You can add your headers here
  // ================================
  // withCredentials: true,
  baseURL: process.env.VUE_APP_FRONTEND_API_URL,
  // timeout: 1000,
  // headers: {
  // 'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Headers': '*',
  // 'Access-Control-Allow-Credentials': 'true',
  // },
})

axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const accessToken = new URL(window.location.href).searchParams.get('token')

    // eslint-disable-next-line no-param-reassign
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`

    return config
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
