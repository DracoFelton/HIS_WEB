<!--
 * @Author: your name
 * @Date: 2020-06-03 19:43:11
 * @LastEditTime: 2020-06-03 21:33:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HIS_WEB/src/views/other/withplay/index.vue
-->
<template>
  <div style="margin-top:50px;margin-left:50px">
    <div class="delate-step">
      <div style="width: 100%; height: 150px; display: table;">
        <div class="delate-step-lt" style="width:15%">
          <div key="1">2020年06月03日</div>
          <div style="margin-top:100px">2020年06月04日</div>
          <div style="margin-top:100px">2020年06月06日</div>
        </div>

        <div class="delate-step-rt">
          <el-steps direction="vertical" :active="delate_result">
            <el-step key="1" title="院长率援鄂医疗团队前往武汉" description="balab" />
            <el-step key="2" title="我院援助团队抵达武汉机场" description="balabala" />
            <el-step key="3" title="QAAAAAAAAAAA" description="balabala" />
            <el-step key="4" title="DDDDDDDDDDD" description="balabala" />
            <el-step key="5" title="CCCCCCCCCCCC" description="balabala" />
            <el-step key="6" title="AAAAAAASSSSS" description="balabala" />
            <el-step key="7" title="QQQQQQQQQQQQQQ" description="balabala" />
            <el-step key="8" title="TTTTTTTTTTTTT" description="balabala" />
            <el-step key="9" title="R" description="balabala" />
          </el-steps>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.delate-step-lt {
    width: 80px;
     color: #818181;
     font-size: 13px;
     display: table-cell;
     position: relative;

}
.delate-time {
          position: absolute;
    }
.delate-step-rt {
  display: table-cell;
}
</style>
<script>
export default {

}
</script>
