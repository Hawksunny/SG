import axios from 'axios'

export function request(config) {
  // 为了网络请求框架的可替换性(目前使用axios), 在外层多加了一层 promise
  return new Promise((resolve, reject) => {
    // 1. 创建 axios 实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000,
    })

    // 2. axios 拦截器
    // 2.1 请求拦截
    instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        console.log(err)
      }
    )
    // 2.2 响应拦截
    instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        console.log(err)
      }
    )

    // 3. 发送真正的网络请求
    instance(config)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
