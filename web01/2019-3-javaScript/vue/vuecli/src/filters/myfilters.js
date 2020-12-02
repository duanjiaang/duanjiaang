// src/filters/myfilters.js
// 自定义过滤器
// 需要导入vue核心api
import Vue from 'vue';
import tools from '../js/tools';

// 第一步：定义filter
Vue.filter('formatDate', function(value, format) {
  //过滤器的第一个参数就是vue页面传入的值（就是|前面的值）
  //2-n位置的参数通过页面过滤器(参数列表)传入
  console.log('myfilters formatDate:', value);
  return tools.formatDate(value, format);
});
