<template>
  <div class="hello">
    <left-menu></left-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftMenu from './leftMenu'
export default {
name: "index",
  components: {
    LeftMenu
  }
}
</script>

<style scoped>
.hello{
  display: flex;
}
</style>