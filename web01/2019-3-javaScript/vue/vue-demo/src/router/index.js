import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    // path是地址栏访问url，component是path对应的真正vue页面
    // hash模式的访问路径#path，例如#/demo,#/,#/abc/def
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
    // （）==>...就是 function(){...}
    // 是js新版本语法，俗称箭头函数
  }
];

const router = new VueRouter({
  routes
});

export default router;
