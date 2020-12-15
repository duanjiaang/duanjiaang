let routers = [
  {
    path: '/employee/dept',
    name: 'Dept',
    component: () => import('../views/employee/Dept.vue')
  }
];

export default routers;
