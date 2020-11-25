<template>
  <el-pagination
      :background="background"
      layout="prev,pager,slot,next,total"
      :pager-count ='pagercount'
      :total="total">
  </el-pagination>
</template>

<script>
export default {
name: "index",
  props: {
    background :{
     type: Boolean,
      default: true
    },
    total : {
      type: Number
    },
    pagercount: {
      type : Number
    }
  }
}
</script>

<style scoped>

</style>