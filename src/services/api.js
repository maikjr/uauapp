import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { TOKEN_KEY } from './auth'

const api = axios.create({
  // baseURL: 'http://192.168.0.103:4545'
  baseURL: 'https://api-uau.hitips.me'
})

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem(TOKEN_KEY)
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

export default api
