//axios封装
import axios from 'axios'

const request = (option) => {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    //axios拦截器

    //请求拦截
    //1. 比如config中一些信息不符合服务器要求，可以拦截后修改信息再发送
    //2. 比如每次发送网络请求时，希望在界面中显示等待请求的图标
    //3. 某些请求需要携带一些特殊信息，比如登录token，可以拦截后验证是否有该信息，没有的话直接跳转登录页面让用户登录
    // instance.interceptors.request.use(config => {
    //   console.log('请求拦截：')
    //   console.log(config);
    //   return config
    // }, err => {
    //   console.log(err);
    // })
    //响应拦截
    //可以对服务器返回的数据进行加工，比如只取出我们需要的data数据，丢弃其他没用的数据
    instance.interceptors.response.use(config => {
      // console.log('响应拦截：')
      // console.log(config)
      return config.data
      // return config
    }, err => {
      console.log(err);
    })


    instance(option).then((res) => {
      // console.log('最终返回数据：');
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export default request