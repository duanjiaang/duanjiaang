// src/directives/mydirectives.js
// 自定义指令

import Vue from 'vue';

// 第一步：自定义指令
Vue.directive('focus', {
  inserted(el) {
    console.log('mydirectives focus:', el);
    el.focus();
    el.setAttribute('placeholder', '指令带来的请输入');
  }
});
