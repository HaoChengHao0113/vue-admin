<template>
  <div>
  <el-row class="leftmenu">
    <el-col :span="24">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="handleSelect"
         >
        <MenuTree v-for="item in menuList" :key="item.key" :menu="item"></MenuTree>
      </el-menu>
    </el-col>
  </el-row>
  </div>
</template>

<script>
const menuList = [
  {
  title: 'Element Ui',
  key: 'elementui',
  children: [
    {
      title: 'Table',
      key: 'table',
      path: 'table',
    },
    {
      title: 'Button',
      key: 'button',
      path: 'button'
    }
    ]
  },
  {
    title: 'ABC',
    key: 'abc',
    path: 'abc'
  },
  {
    title: '音乐播放器',
    key: 'music',
    path: 'music'
  },
];
import MenuTree from './menuTree.vue';
export default {
  name: 'leftmenu',
  data(){
    return {
      menuList
    }
  },
  components: {
    MenuTree
  },
  methods: {
    handleSelect(index){
      console.log(index)
      this.$router.push(index);
    }
  }
}
</script>
<style scoped lang="less">
.leftmenu{
  width: 200px;
  height: 100vh;
  border-right: 1px solid #e0e0e0;
}
</style>