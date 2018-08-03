import axios from 'axios'
import qs from 'qs'
import config from './config'

const service = axios.create(config)

// get 传参格式化
service.interceptors.request.use(
  config => {
    if (config.method === 'get') config.params = qs.stringify(config.params)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回结果处理
service.interceptors.response.use(
  res => {
    // 这里可根据实际情况做一些操作
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  // post function
  post (url, data) {
    console.log('post request url', url)
    return service({
      method: 'post',
      url,
      data
    })
  },
  // get function
  get (url, data) {
    console.log('get request url', url)
    return service({
      method: 'get',
      url,
      params: data
    })
  },
  // delete function
  delete (url, data) {
    console.log('delete request url', url)
    return service({
      method: 'delete',
      url,
      params: data
    })
  }
}
