/*
 * @Author: your name
 * @Date: 2020-05-16 09:04:01
 * @LastEditTime: 2020-05-18 09:46:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-element-admin/src/router/modules/charge.js
 */
import Layout from '@/layout'

const healthRouter = {
  path: '/healthcard_certification',
  component: Layout,
  redirect: '/healthcard_certification/menu1/menu1-1',
  name: 'healthcard_certification',
  meta: {
    title: '健康卡认证',
    icon: 'edit'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/healthcard_certification/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: '健康卡认证' }
    }
  ]

}

export default healthRouter

