<template>
  <div>
    <el-carousel height="200px" direction="vertical" :autoplay="false">
      <el-carousel-item v-for="url in urls" :key="url">
        <el-image :src="url" lazy />
      </el-carousel-item>
    </el-carousel>
    <el-row style="padding:10px">
      <el-col v-for="(o, index) in 3" :key="o" :span="7" :offset="index > 0 ? 3 : 0" style="margin-right:-100px">
        <el-card :body-style="{ padding: '2px' }">
          <img src="https://www.puh3.net.cn/images/yygk/yyjs/2015/8/10/C22A86240D3F4E7F86DF7B482EBD9981.jpg" class="image">
          <div style="padding: 14px;">
            <span>article1</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button" @click="drawer = true">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding:10px">
      <el-col v-for="(o, index) in 5" :key="o" :span="4" :offset="index > 0 ? 5 : 0" style="margin-right:-220px">
        <el-card :body-style="{ padding: '2px' }">
          <img src="https://www.puh3.net.cn/images/bak/kstk/2010/2/23/B93464AF420F48DE8E41845DB218953A.jpg" class="image">
          <div style="padding: 14px;">
            <span>article2</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button" @click="drawer = true">操作按钮</el-button>
              <el-drawer
                title="我是标题"
                :visible.sync="drawer"
                :with-header="false"
                style="padding:10px"
              >
                <br>
                <span style="padding:10px">内容页</span>
              </el-drawer>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
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
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
      ],
      currentDate: new Date(),
      drawer: false
    }
  }
}
</script>
