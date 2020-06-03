<!--
 * @Author: your name
 * @Date: 2020-06-03 19:43:11
 * @LastEditTime: 2020-06-03 21:19:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HIS_WEB/src/views/other/remind/index.vue
-->
<template>
  <div style="margin-top:50px;margin-left:50px">
    <el-card shadow="hover" style="width:80%;height:120px">
      <el-container>
        <el-aside width="80%"><div class="text item">硝苯地平:3mg</div>
          <small> 温开水冲服 </small></el-aside>
        <el-main>
          <el-button :type="typ1" @click="onSubmit">完成</el-button></el-main>
      </el-container>
    </el-card>
    <el-card shadow="hover" style="width:80%;height:120px;margin-top:40px">
      <el-container>
        <el-aside width="80%"><div class="text item">硝苯地平:3mg</div>
          <small> 温开水冲服 </small></el-aside>
        <el-main>
          <el-button :type="typ2" @click="onSubmit">完成</el-button></el-main>
      </el-container>
    </el-card>
    <el-card shadow="hover" style="width:80%;height:120px;margin-top:40px">
      <el-container>
        <el-aside width="80%"><div class="text item">硝苯地平:3mg</div>
          <small> 温开水冲服 </small></el-aside>
        <el-main>
          <el-button :type="typ3" @click="onSubmit">完成</el-button></el-main>
      </el-container>
    </el-card>
  </div>
</template>
<style>
  .el-aside {
    background-color: #ffffff;
    color: #333;
  }
</style>
<script>
export default {
  data() {
    return {
      typ1: 'primary',
      typ2: 'primary',
      typ3: 'primary'
    }
  },
  methods: {
    onSubmit() {
      if (this.typ1 === 'primary') {
        this.typ1 = 'info'
      }
      if (this.typ2 === 'primary') {
        this.typ2 = 'info'
      }
      if (this.typ3 === 'primary') {
        this.typ3 = 'info'
      }
      this.$notify({
        title: 'Success',
        message: '完成',
        type: 'success',
        duration: 2000
      })
    }
  }
}
</script>
