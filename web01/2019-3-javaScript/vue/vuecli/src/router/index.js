import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// 路由配置
const routes = [
  {
    // path是地址栏访问url,component是path对应的真正vue页面
    // hash模式的访问路径是#path，例如#/demo,#/,#/abc/def
    // http://localhost:8080/#/
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    //http://localhost:8080/#/basic/v01
    path: '/basic/v01',
    name: 'BasicV01',
    component: () => import('../views/basic/V01.vue')
  },
  {
    //http://localhost:8080/#/basic/v02
    path: '/basic/v02',
    name: 'BasicV02',
    component: () => import('../views/basic/V02.vue')
  },
  {
    //http://localhost:8080/#/test
    path: '/test',
    name: 'TestHome',
    component: () => import('../views/test/Home.vue')
  },
  {
    //http://localhost:8080/#/test/ajax
    path: '/test/ajax',
    name: 'TestAjax',
    component: () => import('../views/test/Ajax.vue')
  },
  {
    //http://localhost:8080/#/data/link
    path: '/data/link',
    name: 'Link',
    component: () => import('../views/data/Link.vue')
  },
  {
    //http://localhost:8080/#/data/filter
    path: '/data/filter',
    name: 'DataFilter',
    component: () => import('../views/data/Filter.vue')
  },
  {
    //http://localhost:8080/#/data/directive
    path: '/data/directive',
    name: 'DataDirective',
    component: () => import('../views/data/Directive.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
