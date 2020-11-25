<template>
<!--  <el-card style="width: 100%">-->
  <div style="width: 100%">
    <el-table
        :data="tableData"
        stripe
        border
        slot="empty"
        >
      <el-table-column
          label="日期"
          align="center"
          width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column
          label="姓名"
          align="center"
          width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column
          label="操作"
          align="left"
      >
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope)">编辑</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagintion :total="100"></pagintion>

    <p>{{$store.state.name}}</p>
    <button @click="changeName">+</button>
    <button>-</button>
  </div>
<!--  </el-card>-->
</template>

<script>
import Pagintion from '@components/Pagination'
import { getList } from "@/request/api";
// import router from '@/routes';

export default {
name: "index",
  data(){
    return{
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {
    Pagintion
  },
  created() {
    getList()
  },
  methods: {
    handleEdit(item) {
      console.log(item);
    },
    handleDelete(item) {
      console.log(item);
    },
    changeName(){
      // this.$store.commit('nameChange',"lisi")
      this.$store.dispatch({
       type: 'nameChange1',
       name: 'lisi'
      });
      this.$store.getters.getChangeName
    }
  }
}
</script>

<style scoped>

</style>