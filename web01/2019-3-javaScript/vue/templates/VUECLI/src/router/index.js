import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
//路由配置
const routes = [
  {
    // path是地址栏访问url，component是path对应的真正vue页面
    // hash模式的访问路径#path，例如#/demo,#/,#/abc/def
    // http://localhost:8080/#/
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    // http://localhost:8080/#/bssic/v01
    path: '/bssic/v01',
    name: 'BasicV01',
    component: () => import('../views/basic/V01.vue')
  },
  {
    // http://localhost:8080/#/bssic/v02
    path: '/bssic/v02',
    name: 'BasicV02',
    component: () => import('../views/basic/V02.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
