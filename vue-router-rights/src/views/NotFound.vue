<template>
  <div v-if="flag">notfound</div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      flag: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.flag = true
    }, 111)
  }
}
</script>

<style>

</style>
