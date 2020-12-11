// src/plugins/myplugins.js
// 自定义插件

let myplugins = {};

// 必须要实现install方法，参数是Vue原型
myplugins.install = function(Vue) {
  // 对Vue原型扩展
  Vue.prototype.$mypluginsName = '黑暗骑士的vue插件';
  Vue.prototype.$testPlugin = function(info) {
    console.log('插件测试方法：', info, this);
  };
  // vue插件解决this指向问题
  Vue.prototype.$testThis = function(info, cb) {
    // 这里的this还是vue实例对象
    let app = this;
    // 直接回调会丢失this
    cb(info);
    //function对象.call(this指向的对象，参数);
    //可以修改function调用时的this对象的指向
    cb.call(app, info);
  };
};

export default myplugins;
