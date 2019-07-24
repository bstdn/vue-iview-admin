import axios from 'axios'
import { getToken } from '@/libs/util'

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      const { data, status } = res
      return { data, status }
    }, error => {
      return Promise.reject(error)
    })
  }

  request(options) {
    const instance = axios.create()
    const apiAuth = getToken()
    if (apiAuth === false) {
      options = Object.assign({
        baseURL: this.baseUrl,
        headers: {}
      }, options)
    } else {
      options = Object.assign({
        baseURL: this.baseUrl,
        headers: {
          apiAuth
        }
      }, options)
    }
    this.interceptors(instance)
    return instance(options)
  }
}

export default HttpRequest
