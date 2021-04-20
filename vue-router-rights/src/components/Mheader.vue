<template>
  <header class="m-header">mheader
    <div class="userinfo">{{$store.state.name}}
      <el-button type="text" @click="quit">退出登录</el-button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Mheader',
  methods: {
    quit () {
      this.$confirm('确认退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.replace('/login')
        // 清空缓存数据
        this.$store.commit('deleteUserRouters')
        localStorage.removeItem('userName')
        localStorage.removeItem('uid')
        localStorage.removeItem('userLogintoken')
        localStorage.removeItem('userLogintoken_exp')
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped>
.m-header {
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 2;
  background-color: antiquewhite;
  color: white;
  left: 0;
  top: 0;
}
.userinfo {
  position: fixed;
  vertical-align: middle;
  right: 60px;
  color: black;
}
.userinfo el-button {
  background-color: #eee;
  color: black;
}
</style>
