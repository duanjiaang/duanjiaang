import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 导入自定义filters
import './filters/myfilters';
// 导入自定义指令
import './directives/mydirectives';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
