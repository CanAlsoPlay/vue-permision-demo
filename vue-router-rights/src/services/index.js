import axios from 'axios'
import qs from 'qs'
// axios 的请求拦截器，对每次请求都进行了取 token 放到 headers 中的操作
axios.interceptors.request.use(config => {
  if (localStorage.getItem('userLogintoken')) {
    const token = localStorage.getItem('userLogintoken')
    config.headers.common.Authorization = 'Bearer ' + token
    return config
  }
})
function getUserRouters (uid) {
  return axios({
    url: 'http://localhost:3000/user_router_auth',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({ uid })
  }).then(res => {
    return res.data
  }).catch(err => {
    throw err
  })
}
function userLogin (account, password) {
  return axios({
    url: 'http://localhost:3000/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({ account, password })
  }).then(res => {
    if (res.data.code === '200') {
      console.log('res200', res)
      localStorage.setItem('userLogintoken', res.data.token)
      localStorage.setItem('userLogintoken_exp', new Date().getTime())
      return new Promise((resolve, reject) => {
        resolve({
          path: '/home',
          userId: res.data.userId,
          account: res.data.account
        })
      })
    } else {
      console.log('res400', res.data.msg)
    }
  }).catch(err => {
    throw err
  })
}
export {
  getUserRouters,
  userLogin
}
