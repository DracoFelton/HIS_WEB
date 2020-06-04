<!--
 * @Author: your name
 * @Date: 2020-06-03 19:43:11
 * @LastEditTime: 2020-06-04 20:16:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HIS_WEB/src/views/other/search/index.vue
-->
<template>
  <div style="margin-top:50px;margin-left:50px">
    <el-input
      placeholder="查询内容"
      style="width: 200px;"
      class="filter-item"
    />
    <el-button
      v-waves
      class="filter-item"
      type="primary"
      icon="el-icon-search"
    >按条件搜索</el-button>
    <el-container style="margin-top:20px">
      <el-tabs v-model="activeName" type="border-card" stretch @tab-click="handleClick">
        <el-tab-pane label="穴位百科" name="first">穴位百科</el-tab-pane>
        <el-tab-pane label="偏方百科" name="second">
          <el-row>
            <el-col :span="10" :offset="0">
              <el-card class="box-card" header="养生食疗" shadow="hover">
                <p class="content">减肥食疗  祛痘食疗    便秘食疗    失眠食疗</p>
                <p class="content">补血食疗   口臭食疗    壮阳食疗    补肾食疗</p>
                <p class="content">美白食疗</p>
              </el-card>
            </el-col>
            <el-col :span="12" :offset="1">
              <el-card class="box-card" header="疾病食疗" shadow="hover">
                <p class="content">前列腺炎食疗   糖尿病食疗  高血压食疗  高血脂食疗</p>
                <p class="content">冠心病食疗 中风食疗    肠炎食疗    痛经食疗</p>
                <p class="content">肝硬化食疗 贫血食行    腹泻食疗    遗精食疗</p>
              </el-card>
            </el-col>
            <el-col :span="10" :offset="0">
              <el-card class="box-card" header="内科偏方" shadow="hover">
                <p class="content">腹泻偏方   口臭偏方    肾虚偏方    感冒偏方</p>
                <p class="content">咳嗽偏方    头痛偏方    鼻炎偏方    哮喘偏方</p>
                <p class="content">肺炎偏方    便秘偏方    胃病偏方</p>
              </el-card>
            </el-col>
            <el-col :span="12" :offset="1">
              <el-card class="box-card" header="外科偏方" shadow="hover">
                <p class="content">肩周炎偏方 颈椎病偏方  痔疮偏方    牙疼偏方</p>
                <p class="content">阑尾炎偏方  骨折偏方    风湿性关节炎偏方    口腔溃疡偏方</p>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="方剂百科" name="third">方剂百科</el-tab-pane>
        <el-tab-pane label="中药百科" name="fourth">中药百科</el-tab-pane>
        <el-tab-pane label="体质养生百科" name="fifth">体质养生百科</el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<style>
.content{
  font-size: 14px;
  color:#2276ef;
}
</style>

<script>
export default {
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
