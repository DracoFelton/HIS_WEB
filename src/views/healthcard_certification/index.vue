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
    <el-divider content-position="left">电子健康卡认证</el-divider>
    <div id="content" class="filter-container">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="持卡人姓名:" style="width: 30%;">
          <el-input v-model="temp.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="身份证号:" style="width: 30%;">
          <el-input v-model="temp.id" placeholder="请输入身份证" />
        </el-form-item>
        <el-form-item label="民族:" style="width: 30%;">
          <el-input v-model="temp.from" placeholder="请输入民族" />
        </el-form-item>
        <el-form-item label="手机号码:" style="width: 30%;">
          <el-input v-model="temp.tel" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="性别:" style="width: 30%;">
          <el-radio-group v-model="form.feibie">
            <el-radio label="男" />
            <el-radio label="女" />
            <el-radio label="其他" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期:">
          <el-date-picker v-model="temp.date" placeholder="出生日期" style="width: 23.5%;" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="obSubmit">确认申领</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<!--<el-date-picker
    v-model="addCouponForm.termOfValidity"
    value-format="yyyy-MM-dd"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :picker-options="expireTimeOption"
    @change="selectRangeTime">
</el-date-picker>-->
<!-- 使用expireTimeOption方法 -->
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
        date: '2020年05月16日10:54:54',
        status: '进行中'
      },
      temp: {
        name: 'tt',
        from: '汉',
        id: undefined,
        tel: undefined,
        date: undefined
      },
      card_no: '12315',
      form: {
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        yibao: '自费',
        feibie: '普通',
        price: 89.72,
        price_raw: 89.72
      },
      drugs: [{ 'code': '86979474000208', 'name': '注射用甲氨喋呤', 'format': '1g×1支', 'price': '15.73', 'unit': '支' },
        { 'code': '86979474000209', 'name': '氟康唑氯化钠注射液', 'format': '200mg×100ml/瓶', 'price': '7.01', 'unit': '瓶' },
        { 'code': '86979474000208', 'name': '50%葡萄糖注射液', 'format': '10:20ml×1支', 'price': '25.16', 'unit': '支' },
        { 'code': '86979474000209', 'name': '盐酸特比萘芬阴道泡腾片', 'format': '50mg×7片/盒', 'price': '40.62', 'unit': '盒' }
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
        message: '申领成功',
        type: 'success',
        duration: 2000
      })
      this.other_hidden = false
    }
  }
}

</script>
