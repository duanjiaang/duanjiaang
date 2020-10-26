let app = new Vue({
  // 将vue实例和页面元素绑定，后面是css选择器表达式
  el: '#app',
  // 页面使用的数据定义小节
  data: {
    // 前面的key为自定义名称，后面为对应的数据
    welcome: '欢迎-',
    info: '黑暗骑士',
    // 复杂对象
    user: {
      name: '',
      password: ''
    },
    //带html内容的数据
    htmlinfo: '<h1 onclick="alert(1)">哈哈哈<br>嘻嘻嘻</h1>'
  },
  // 事件处理小节
  methods: {
    // 定义处理事件的function
    ok: function () {
      // 确定按钮点击事件处理
      // this关键字会在回调函数中丢失引用，不靠谱
      // app是vue的实例变量，所以比较稳定
      console.log(this.user, app.user);
    },
    reset: function () {
      // 重置登陆数据
      this.user = { name: '', password: '' };
      // 等效代码
      this.user.name = '';
      this.user.password = '';
    }
  }
});
