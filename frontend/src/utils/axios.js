import axios from 'axios'

export const API_BASE_URL = import.meta.env.VITE_BACKEND || 'http://localhost:3000'

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosInstance
