let app = new Vue({
  el: '#app',
  data: {
    title: '计算属性和监听',
    numa: 0,
    numb: 0,
    message: '',
    xing: '',
    ming: '',
    xm: ''
  },
  // 计算属性
  computed: {
    // 计算属性和data类似，都会自动监听data中的值变化
    // 自动调用计算过程，使用也和data一样
    add: function () {
      if (this.numa == '' || this.numb == '') {
        return '';
      }
      if (isNaN(this.numa)) {
        return '第一个不是数';
      }
      if (isNaN(this.numb)) {
        return '第二个不是数';
      }
      return parseFloat(this.numa) + parseFloat(this.numb);
    },
    // vue官方计算属性演示的for循环版本
    // 反转message的值
    reverse: function () {
      if (this.message == '') {
        return '';
      }
      let result = '';
      // for(变量初始化;循环是否继续的逻辑表达式;每次循环后要执行的代码)
      // 假如message是abc
      //i substr result
      //2 (2,1)=c c
      //1 (1,1)=b cb
      //0 (0,1)=a cba
      for (let i = this.message.length - 1; i >= 0; i--) {
        result += this.message.substr(i, 1);
      }
      return result;
    }
  },
  // 监听，作用是侦听值的变化
  watch: {
    // 要侦听的data中的变量名称:值变化后要执行的function
    // function中参数就是变量更新后的值
    xing: function (val) {
      console.log('xing:', val);
      this.xm = val + this.ming;
    },
    ming: function (val) {
      console.log('ming', val);
      this.xm = this.xing + val;
    }
  }
});
