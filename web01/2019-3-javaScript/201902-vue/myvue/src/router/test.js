// 测试相关路由配置
const routers = [
  {
    path: '/test',
    name: 'TestHome',
    component: () => import('../views/test/Home.vue')
  },
  {
    path: '/test/tools',
    name: 'TestTools',
    component: () => import('../views/test/Tools.vue')
  },
  {
    path: '/test/filter',
    name: 'TestMyFilters',
    component: () => import('../views/test/MyFilters.vue')
  }
];

export default routers;
