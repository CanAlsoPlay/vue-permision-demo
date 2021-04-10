<template>
  <div id="app">
    <router-view />
    <div v-if="this.$route.path !== '/login'">
      <mheader />
      <page-board />
      <side-bar />
    </div>
  </div>
</template>
<script>
import Mheader from './components/Mheader.vue'
import PageBoard from './components/PageBoard.vue'
import SideBar from './components/SideBar.vue'

export default {
  components: { Mheader, PageBoard, SideBar }
}
</script>
