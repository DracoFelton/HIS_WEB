<!--
 * @Author: your name
 * @Date: 2020-05-14 14:59:41
 * @LastEditTime: 2020-05-16 16:37:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-element-admin/src/views/form/index.vue
 -->
<template>
  <div class="app-container">
    <el-divider content-position="left">读取就诊卡号</el-divider>
    <div class="components-container">
      <el-input v-model="card_no" disabled />
      <el-button type="primary" style="margin-top:10px" @click="dialogTableVisible = true">确认读取</el-button>
      <el-dialog
        v-el-drag-dialog
        :visible.sync="dialogTableVisible"
        title="查询完成"
        center
        @dragDialog="handleDrag"
      >
        <el-form :inline="true" class="demo-form-inline" :model="form_dig">
          <el-divider content-position="left">用户信息</el-divider>
          <el-form-item label="姓名: ">{{ form_dig.patient_name }}</el-form-item>
          <el-form-item label="年龄: ">{{ form_dig.patient_age }}</el-form-item>
          <el-form-item label="现居住: ">{{ form_dig.patient_addr }}</el-form-item>
          <el-form-item label="联系方式: ">{{ form_dig.patient_phone }}</el-form-item>
          <el-form-item label="职业: ">{{ form_dig.patient_job }}</el-form-item>
          <el-form-item label="民族: ">{{ form_dig.patient_nation }}</el-form-item>
          <el-form-item label="婚姻状况: ">{{ form_dig.patient_marry }}</el-form-item>
          <el-form-item label="联系人姓名: ">{{ form_dig.patient_contact_name }}</el-form-item>
          <el-form-item label="联系人电话: ">{{ form_dig.patient_contact_phone }}</el-form-item>
          <el-form-item label="联系人关系: ">{{ form_dig.patient_contact_relation }}</el-form-item>
          <el-form-item label="联系人地址: ">{{ form_dig.patient_contact_addr }}</el-form-item>
          <el-divider content-position="left">处方信息(进行中)</el-divider>
          <el-form-item label="处方单号: ">{{ form_dig.number }}</el-form-item>
          <el-form-item label="诊断结果: ">{{ form_dig.result }}</el-form-item>
          <el-form-item label="负责医生: ">{{ form_dig.doctor }}</el-form-item>
          <el-form-item label="处方生成日期: ">{{ form_dig.date }}</el-form-item>
          <el-form-item label="处方类别: ">{{ form_dig.category }}</el-form-item>
          <el-form-item label="处方状态: ">
            <el-tag type="success">{{ form_dig.status }}</el-tag>
          </el-form-item>
          <el-divider content-position="left">物品清单</el-divider>
          <el-table :data="drugs" style="width: 100%">
            <el-table-column prop="code" label="编号" width="200" />
            <el-table-column prop="name" label="物品" width="200" />
            <el-table-column prop="format" label="件数" />
          </el-table>
          <el-form-item class="dialog-footer">
            <el-button type="primary" @click="dialogTableVisible = false,is_content_hidden=false">确认</el-button>
            <el-button @click="dialogTableVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
    <el-divider content-position="left">确认处方</el-divider>
    <div id="content" class="filter-container" :hidden="is_content_hidden">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名:">{{ form_dig.patient_name }}</el-form-item>
        <el-form-item v-model="form.price" label="类型">{{ form.cate }}</el-form-item>
        <el-form-item v-model="form.price" label="物品总数">{{ form.number }}</el-form-item>
        <el-form-item>
          <el-button type="primary" @click="obSubmit">确认耗材</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui

export default {
  name: 'DragDialogDemo',
  directives: { elDragDialog },
  data() {
    return {
      is_content_hidden: true,
      dialogTableVisible: false,
      other_hidden: true,
      form_dig: {
        patient_name: '张三',
        patient_age: '23',
        patient_addr: '南京市栖霞区',
        patient_phone: '189xxxxxxxx',
        patient_job: '工人',
        patient_nation: '汉',
        patient_marry: '未婚',
        patient_contact_name: '张三',
        patient_contact_phone: '189xxxxxxxx',
        patient_contact_relation: '本人',
        patient_contact_addr: '*',
        number: '1002312031231',
        result: '上呼吸道感染',
        doctor: '李四',
        date: '2020年05月30日17:51:54',
        category: '耗材',
        status: '进行中'
      },
      card_no: '12315',
      form: {
        region: '',
        date1: '',
        date2: '',
        cate: '耗材',
        delivery: false,
        type: [],
        number: 3
      },
      drugs: [{ 'code': '26979474000208', 'name': '纱布垫', 'format': '1块' },
        { 'code': '26979474000209', 'name': '绷带', 'format': '1卷' },
        { 'code': '26979474000208', 'name': '止血钳', 'format': '1把' }
      ]
    }
  },
  methods: {
    // v-el-drag-dialog onDrag callback function
    handleDrag() {
      this.$refs.select.blur()
    },
    price_cul(val) {
      this.form.price = this.form.price_raw * val
    },
    obSubmit() {
      this.$notify({
        title: 'Success',
        message: '确认成功',
        type: 'success',
        duration: 2000
      })
      this.other_hidden = false
    }
  }
}

</script>
