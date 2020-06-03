/*
 * @Author: your name
 * @Date: 2020-05-16 09:04:01
 * @LastEditTime: 2020-05-18 09:46:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-element-admin/src/router/modules/charge.js
 */
import Layout from '@/layout'

const otherRouter = {
  path: '/other',
  component: Layout,
  redirect: '/other/menu1/menu1-1',
  name: 'other',
  meta: {
    title: '其他',
    icon: 'guide'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/other/introduce/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: '医院介绍' }
    }, {
      path: 'menu2',
      component: () => import('@/views/other/news/index'), // Parent router-view
      name: 'Menu2',
      meta: { title: '健康资讯' }
    }, {
      path: 'menu3',
      component: () => import('@/views/other/search/index'), // Parent router-view
      name: 'Menu3',
      meta: { title: '健康百科' }
    }, {
      path: 'menu4',
      component: () => import('@/views/other/control/index'), // Parent router-view
      name: 'Menu4',
      meta: { title: '健康监测' }
    }, {
      path: 'menu5',
      component: () => import('@/views/other/remind/index'), // Parent router-view
      name: 'Menu5',
      meta: { title: '用药提醒' }
    }, {
      path: 'menu6',
      component: () => import('@/views/other/indexmoniter/index'), // Parent router-view
      name: 'Menu6',
      meta: { title: '指标监控' }
    }, {
      path: 'menu7',
      component: () => import('@/views/other/upload/index'), // Parent router-view
      name: 'Menu7',
      meta: { title: '上传病历' }
    }, {
      path: 'menu8',
      component: () => import('@/views/other/withplay/index'), // Parent router-view
      name: 'Menu8',
      meta: { title: '随访互动' }
    }
    //   path: 'menu3',
    //   component: () => import('@/views/charge/paper/index'), // Parent router-view
    //   name: 'Menu3',
    //   meta: { title: '打印收费凭据' }
    // }
  ]
}

export default otherRouter
