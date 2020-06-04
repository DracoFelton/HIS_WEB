<!--
 * @Author: your name
 * @Date: 2020-06-03 19:43:11
 * @LastEditTime: 2020-06-04 19:44:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HIS_WEB/src/views/other/indexmoniter/index.vue
-->
<template>
  <el-container>
    <el-aside width="200px">
      <el-container>
        <el-header>
          <el-progress type="circle" :percentage="process" />
        </el-header>
        <el-footer style="margin-left:10px">
          <el-button type="primary" @click="btn_event">开始评分</el-button>
        </el-footer>
      </el-container>
    </el-aside>
    <el-container>
      <el-main>
        <el-card shadow="hover" header="健康监测报告" style="width:90%">
          <el-alert
            title="不饮酒"
            :type="tp0"
            :closable="false"
          />
          <el-alert
            title="不抽烟"
            :type="tp1"
            :closable="false"
          />
          <el-alert
            title="勤锻炼"
            :type="tp2"
            :closable="false"
          />
          <el-alert
            title="不吃野味"
            :type="tp3"
            :closable="false"
          />
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-aside {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 200px;
    margin-top: 40px;
  }
</style>

<script>
export default {
  data() {
    return {
      process: 0,
      tp0: 'info',
      tp1: 'info',
      tp2: 'info',
      tp3: 'info'
    }
  },
  methods: {
    btn_event() {
      this.tp0 = 'info'
      this.tp1 = 'info'
      this.tp2 = 'info'
      this.tp3 = 'info'
      this.sleep(1000).then(() => {
        this.tp0 = 'success'
        this.process = 25
        this.sleep(1000).then(() => {
          this.tp1 = 'success'
          this.process = 50
          this.sleep(1000).then(() => {
            this.tp2 = 'success'
            this.process = 75
            this.sleep(1000).then(() => {
              this.tp3 = 'success'
              this.process = 100
              this.$alert('您的健康状态为 100分', '健康评估结果', {
                confirmButtonText: '确定'
              })
            })
          })
        })
      })
    },
    sleep(ms) {
      return new Promise(resolve =>
        setTimeout(resolve, ms)
      )
    }

  }
}
</script>
