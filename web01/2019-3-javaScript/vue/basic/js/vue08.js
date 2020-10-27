let app = new Vue({
  el: '#app',
  data: {
    title: 'vue样式控制',
    class1: 'style2',
    //控制样式是否出现的变量
    styleEnable: false,
    style3: true,
    style4: false,
  },
  methods: {
    changeStyle: function () {
      app.style3 = !app.style3;
      app.style4 = !app.style4;
    },
  },
});
