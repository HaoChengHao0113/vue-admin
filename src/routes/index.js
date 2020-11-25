// 路由配置
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
      {
          path: '/',
          component: () => import('../components'),
          children: [
              {
                  path: 'table',
                  component: () => import('@components/Table')
              }
          ]
      },

  ]
})

