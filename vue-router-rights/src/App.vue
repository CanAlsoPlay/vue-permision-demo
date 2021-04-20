<template>
  <div id="app">
    <div v-if="$route.path != '/login'">
      <mheader />
      <side-bar />
      <page-board />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Mheader from './components/Mheader'
import SideBar from './components/SideBar'
import PageBoard from './components/PageBoard'
import { genetateRouter } from './libs/utils'

export default {
  name: 'app',
  components: {
    Mheader,
    SideBar,
    PageBoard
  },
  async mounted () {
    if (this.$route.path !== '/login' && this.$store.state.uid === '') {
      this.$store.commit('getUserName')
      this.$store.commit('getUserUid')
      if (this.$store.state.name !== '' && this.$store.state.uid !== '') {
        await this.$store.dispatch('setUserRouters')
        const newRoutes = genetateRouter(this.$store.state.userRouters)
        this.$router.addRoutes(newRoutes)
        setTimeout(() => {
          // console.log('beforeEachapp', this.$route)
          this.$router.replace(this.$route.path)
        }, 100)
      } else {
        this.$router.replace('/login')
      }
    }
  }
}
</script>

<style>
</style>
