<!--
 * @Author: your name
 * @Date: 2020-06-03 19:43:11
 * @LastEditTime: 2020-06-03 21:30:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HIS_WEB/src/views/other/indexmoniter/index.vue
-->
<template>
  <div style="margin-top:50px;margin-left:50px">
    <el-card shadow="hover" style="width:90%">
      <el-table :data="row" fit highlight-current-row>
        <el-table-column prop="id" label="医保情况" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="姓名" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="就诊日期" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card shadow="hover" style="width:90%;margin-top:30px">
      <el-table :data="row" fit highlight-current-row>
        <el-table-column prop="id" label="医保情况" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="姓名" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="就诊日期" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card shadow="hover" style="width:90%;margin-top:30px">
      <el-table :data="row" fit highlight-current-row>
        <el-table-column prop="id" label="医保情况" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="姓名" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="就诊日期" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      row: [{
        id: 'xxxxxxx',
        name: 'alb',
        date: '2020年06月03日21:25:39'
      }, {
        id: 'xxxxxxx',
        name: 'abk',
        date: '2020年06月03日21:25:39'
      }, {
        id: 'xxxxxxx',
        name: 'qcr',
        date: '2020年06月03日21:25:39'
      }, {
        id: 'xxxxxxx',
        name: 'zcx',
        date: '2020年06月03日21:25:39'
      }]
    }
  }
}
</script>
