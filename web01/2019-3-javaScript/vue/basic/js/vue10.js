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
    },
    success: false,
    list: [
      { id: 100, name: '绿甲龙', sex: 'm' },
      { id: 101, name: '吕佳龙', sex: 'm' },
      { id: 102, name: '沈娇', sex: 'f' }
    ]
  },
  methods: {
    login: function () {
      // 输入校验
      // 重置错误
      this.error.name = false;
      this.error.pwd = false;
      this.success = false;
      if (this.user.name.trim() == '') {
        this.error.name = true;
        return;
      }
      if (this.user.pwd.trim() == '') {
        this.error.pwd = true;
        return;
      }
      this.success = true;
    }
  }
});
