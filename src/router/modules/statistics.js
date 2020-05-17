/*
 * @Author: your name
 * @Date: 2020-05-15 15:52:32
 * @LastEditTime: 2020-05-17 09:39:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-element-admin/src/router/modules/statistics.js
 */
import Layout from '@/layout'

const statisticsRouter = {
  path: '/statistics',
  component: Layout,
  redirect: '/statistics/menu1/menu1-1',
  name: 'statistics',
  meta: {
    title: '统计核算',
    icon: 'chart'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/statistics/register_number/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: '挂号数据统计' }
    }, {
      path: 'menu2',
      component: () => import('@/views/statistics/dept/index'), // Parent router-view
      name: 'Menu2',
      meta: { title: '科室数据统计' }
    }, {
      path: 'menu3',
      component: () => import('@/views/statistics/staff_workload/index'), // Parent router-view
      name: 'Menu3',
      meta: { title: '工作量统计' }
    }
  ]
}

export default statisticsRouter
