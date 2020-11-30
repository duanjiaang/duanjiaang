<template>
  <div>
    {{ title }}
    <div>
      <a class="pd010 mr05" href="/#/">返回首页</a>
      <button @click="test">测试工具类</button>
      {{ result01 }} --- {{ result02 }}
    </div>
  </div>
</template>

<script>
// 导入其它的js
import tools from '../../js/tools';

export default {
  name: 'Basic01',
  data() {
    return {
      title: 'vue基础复习一：' + tools.name,
      result01: '',
      result02: ''
    };
  },
  methods: {
    test() {
      this.result01 = tools.formatDate(new Date());
      this.result02 = tools.formatDate(new Date().getTime(), 'hh:mm:ss');
      // 错误的参数
      tools.formatDate('ddd');
    }
  }
};
</script>

<style scoped>
/* 导入其它的css文件 */
@import '../../css/common.css' ;

a {
  display: inline-block;
  border: 1px solid #ff0000;
  text-decoration: none;
}
</style>
