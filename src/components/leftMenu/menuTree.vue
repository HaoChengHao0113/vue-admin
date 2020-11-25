<template>
  <el-submenu v-if="menu.children && menu.children.length >= 1" :index="'' + menu.key">
    <template slot="title">
<!--      <i :class="menu.icon" ></i>-->
      <span slot="title">{{menu.title}}</span>
    </template>
    <menu-tree v-for="item in menu.children" :key="item.id" :menu="item"></menu-tree>
  </el-submenu>
  <el-menu-item v-else :index="(menu.path?menu.path:menu.key)">
<!--    <i :class="menu.icon"></i>-->
    <span slot="title">{{menu.title}}</span>
  </el-menu-item>
</template>


<script>
export default {
  name: "menuTree",
  props:{
    menu:{
      type:Object,
      default: ()=>{
        return {}
      }
    }
  },

}
</script>

<style scoped>

</style>