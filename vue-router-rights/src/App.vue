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
export default {
  components: { Mheader, PageBoard, SideBar }
}
</script>
<style>
</style>
