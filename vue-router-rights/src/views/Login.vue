<template>
  <div class="login-wrap">
    <h2>登录页</h2>
    <div id="login">
      <div class="login-account">
        <span>账号：</span>
        <input type="text" placeholder="account" name="account" v-model.trim="account">
      </div>
      <div class="login-password">
        <span>密码：</span>
        <input type="password" placeholder="password" name="password" v-model.trim="password">
      </div>
      <p class="login-btn">
        <button id="loginBtn" @click="Login">登录</button>
      </p>
    </div>
  </div>
</template>

<script>
import { userLogin } from '../services/index'
import { genetateRouter } from '../libs/utils'
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    Login () {
      const that = this
      userLogin(this.account, this.password)
        .then(function (data) {
          // console.log('userlogin', data)
          that.$store.commit('setUserUid', data.userId)
          that.$store.commit('setUserName', data.account)
          that.$router.beforeEach(async (to, from, next) => {
            if (!that.$store.state.hasAuth) {
              console.log('loginbeforeeach')
              // setUserRouters 根据state的uid获取数据
              await that.$store.dispatch('setUserRouters')
              const newRoutes = genetateRouter(that.$store.state.userRouters)
              that.$router.addRoutes(newRoutes)
              next({ path: to.path })
            } else {
              next()
            }
          })
          that.$router.replace(data).catch(() => {})
        })
    }
  }
}
</script>

<style>

</style>
