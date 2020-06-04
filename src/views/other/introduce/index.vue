<!--
 * @Author: your name
 * @Date: 2020-06-04 15:49:36
 * @LastEditTime: 2020-06-04 16:37:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HIS_WEB/src/views/other/introduce/index.vue
-->
<template>
  <div style="padding: 20px;">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="url in urls" :key="url">
        <el-image :src="url" />
      </el-carousel-item>
    </el-carousel>
    <div id="ttt" style="padding: 40px;">
      <h1>医院简介</h1>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;智慧医院为明基友达集团本着回馈社会、服务民众的精神，经国家卫生部批准投资设立的中外合资合作医院。医院依据国家三级综合医院标准建立，占地600亩。工程分三期，其中一期投资16亿元人民币，主要以开展普通医疗与特需医疗服务为目标，建成1,500床；二、三期将增加科研实验、临床教学及健康促进等医疗项目，将发展至3,000床规模。</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;医院设有内、外、妇、儿、中医、急诊等一级临床科室，配备检验、影像、病理、实验室等医技科室，高水平配置内镜中心、重症监护病房(ICU)、国际医疗中心、心脏中心、肿瘤放疗中心、血液净化中心、康复医学中心等，提供普通医疗、特需医疗、健康管理等综合医疗服务，开展医疗、康复、预防保健、科研、教学等医学活动。拥有众多台湾、海外及大陆医疗专家为民众提供优质的医疗服务。
        在省市各项政策扶持下，依托集团强有力的支持、南京丰富的高校及医疗资源和地域优势，智慧医院10年发展战略：以优质医疗服务为基础，以诚信为准则，以整合集成资源为手段，全面创建集医疗服务、生物科技研发、转化医学研究为一体的明基医疗中心BenQ Medical Center.</p>
    </div>
  </div>
</template>
<style>
  #ttt{
    background-color: ghostwhite;
  }
  #ttt h1{
      text-align: center;
      color: rgb(29, 29, 29);
  }
  #ttt p{
    color: rgb(55, 54, 54);
    line-height: 1.5;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<script>
export default {
  data() {
    return {
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
      ]
    }
  }
}
</script>
