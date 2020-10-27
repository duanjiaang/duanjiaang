let app = new Vue({
  el: '#app',
  data: {
    title: 'vue套用bootstrap样式',
    user: {
      name: '',
      pwd: ''
    },
    error: {
      name: false,
      pwd: false
    }
  },
  methods: {
    login: function () {
      // 输入校验
      // 重置错误
      this.error.name = false;
      this.error.pwd = false;
      if (this.user.name.trim() == '') {
        this.error.name = true;
        return;
      }
    }
  }
});
