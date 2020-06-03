<!--
 * @Author: your name
 * @Date: 2020-06-03 19:43:11
 * @LastEditTime: 2020-06-03 20:16:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HIS_WEB/src/views/other/upload/index.vue
-->
<template>
  <div style="margin-top:50px;margin-left:50px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="病历号">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="选择诊室">
        <el-cascader
          size="medium"
          placeholder="请选择"
          :v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="就诊日期">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="其他说明">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus" />
        </el-upload>
      </el-form-item>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即上传</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [{
        value: 'zhinan',
        label: '内科',
        children: [{
          value: 'zhuajia',
          label: '心血管科'
        }, {
          value: 'putong',
          label: '泌尿内科'
        }, {
          value: 'jizhen',
          label: '血液科'
        }]
      }, {
        value: 'zujian',
        label: '外科',
        children: [{
          value: 'zhuajia',
          label: '骨科'
        }, {
          value: 'putong',
          label: '普外科'
        }]
      }, {
        value: 'guke',
        label: '其他',
        children: [{
          value: 'zhuajia',
          label: '不知道1'
        }, {
          value: 'putong',
          label: '不知道2'
        }]
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$notify({
        title: 'Success',
        message: '上传完成',
        type: 'success',
        duration: 2000
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }

  }
}
</script>
