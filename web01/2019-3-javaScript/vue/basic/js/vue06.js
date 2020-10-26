let app = new Vue({
  el: '#app',
  data: {
    user: { name: '', pwd: '' },
    //错误信息控制变量
    //为name表示姓名错误
    //为pwd表示密码错误
    //为check表示登录错误
    error: '',
  },
  methods: {
    login: function () {
      app.error = '';
      //vue最大的特色就是只要控制变量
      //不需要直接控制页面显示逻辑
      //只要数据变化，通过页面相关指令和表达式完成显示
      if (app.user.name == '') {
        app.error = 'name';
        return;
      }
      if (app.user.pwd == '') {
        app.error = 'pwd';
        return;
      }
      if (app.user.name != 'buer' || app.user.pwd != '520') {
        app.error = 'check';
        return;
      }
      alert('欢迎使用vue！');
    },
  },
});
