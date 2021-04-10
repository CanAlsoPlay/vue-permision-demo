<template>
  <aside class="side-bar">
    <ul>
      <li><router-link to="/">首页</router-link></li>
    </ul>
    <template v-for="(item, index) of $store.state.userRouters">
      <menu-item :item="item" :key="index"/>
    </template>
  </aside>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  components: {
    MenuItem
  }
}
</script>

<style scoped>
.side-bar {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  background-color: rgb(111, 109, 194);
  color: white;
  left: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 90px;
}
</style>
