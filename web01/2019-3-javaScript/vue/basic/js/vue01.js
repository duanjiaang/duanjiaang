// 初始化vue对象，和页面指定id的元素绑定
// new Vue(配置的json)
// el就是要绑定的页面元素的选择器表达式
// data是数据小节，可以和页面的元素同步关联！！！
// 这个非常的关键，也是vue被称为mvvm框架的重要原因
// mvvm表示model-view view-model
// 意思是数据和视图双向绑定
// methods是事件小节，用于页面元素的事件处理
// 和addEventListener功能一样
// 为什么不直接原生事件？因为需要获取data中绑定的数据
new Vue({
  el: '#app',
  data: {
    username: ''
  },
  methods: {
    showName: function () {
      alert(this.username);
    }
  }
});
