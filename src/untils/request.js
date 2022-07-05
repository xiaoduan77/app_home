import store from '@/store'
import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 60000
})

instance.interceptors.request.use(function(config) {
  if (store.state.user && store.state.user.token) {
    config.headers = {
      Authorization: store.state.user.token
    }
  }
  return config
}, function(error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function(response) {
  return response
}, function(error) {
  return Promise.reject(error)
})
export default instance
