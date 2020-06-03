/*
 * @Author: your name
 * @Date: 2020-05-16 09:04:01
 * @LastEditTime: 2020-05-18 09:46:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-element-admin/src/router/modules/charge.js
 */
import Layout from '@/layout'

const prescriptionRouter = {
  path: '/prescription',
  component: Layout,
  redirect: '/prescription/menu1/menu1-1',
  name: 'prescription',
  meta: {
    title: '处方',
    icon: 'form'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/prescription/western/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: '西药处方' }
    }, {
      path: 'menu2',
      component: () => import('@/views/prescription/chinese/index'), // Parent router-view
      name: 'Menu2',
      meta: { title: '中药处方' }
    }, {
      path: 'menu3',
      component: () => import('@/views/prescription/consume/index'), // Parent router-view
      name: 'Menu3',
      meta: { title: '耗材处方' }
    }, {
      path: 'menu4',
      component: () => import('@/views/prescription/treatment/index'), // Parent router-view
      name: 'Menu4',
      meta: { title: '诊疗处方' }
    }
    //   path: 'menu3',
    //   component: () => import('@/views/charge/paper/index'), // Parent router-view
    //   name: 'Menu3',
    //   meta: { title: '打印收费凭据' }
    // }
  ]
}

export default prescriptionRouter
