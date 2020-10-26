let app = new Vue({
  el: '#app',
  data: {
    title: '循环指令演示',
    list: [
      { id: 100, name: '布尔先森', sex: 'm' },
      { id: 101, name: '吕佳龙', sex: 'm' },
      { id: 102, name: '沈娇', sex: 'f' },
      { id: 103, name: '绿甲龙', sex: 'm' },
      { id: 104, name: '王军涛', sex: 'm' },
      { id: 105, name: '腾月', sex: 'f' },
      { id: 106, name: '吴珣', sex: 'f' },
    ],
    //记录点击数据
    clickData: {},
  },
  methods: {
    //事件可以接受参数！！！
    showInfo: function (info) {
      console.log('循环产生的元素事件处理', info);
      //记录事件点击的值
      app.clickData = info;
    },
  },
});
