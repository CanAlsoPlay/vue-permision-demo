<template>
  <div id="app">
    <mheader />
    <page-board />
    <side-bar />
  </div>
</template>
<script>
import Mheader from './components/Mheader.vue'
import PageBoard from './components/PageBoard.vue'
import SideBar from './components/SideBar.vue'
import { getUserRouters } from './services/index'
export default {
  components: { Mheader, PageBoard, SideBar },
  async mounted () {
    const data = await getUserRouters(5)
    console.log(data)
  }
}
</script>
<style>
</style>
