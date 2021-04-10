import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
// import { genetateRouter } from './libs/utils'

Vue.config.productionTip = false
// router.beforeEach(async (to, from, next) => {
//   if (!store.state.hasAuth) {
//     await store.dispatch('setUserRouters')
//     const newRoutes = genetateRouter(store.state.userRouters)
//     console.log(newRoutes)
//     router.addRoutes(newRoutes)
//     next({ path: to.path })
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
