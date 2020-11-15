<template>
  <div class="main">
    <!-- data中的数据可以直接在页面上使用 -->
    {{ welcome }}
    <button @click="test">布尔先森</button>

    <a href="/#/bssic/v01">基础复习一</a>
    |
    <a href="/#/bssic/v02">基础复习二</a>

  </div>
  
</template>

<script>
// js代码放置在script小节
// vue实例表达式转换为新版本js的export模式
export default {
  // 不在需要el，替换为name
  name: 'Home',
  // vue项目中的data必须是函数
  // data变成function，返回值就是以前的data格式json数据
  data() {
    return { welcome: '欢迎使用vue脚手架路由项目' };
  },
  methods: {
    // 所有的function字段都可以简写掉function
    test() {
      window.open('https://huhuiyu.top');
    }
  }
};
</script>

<style scoped>
/* 带scoped属性的style是局部的，不要会产生名称冲突 */
.main {
  color: #00ffff;
  font-size: 1rem;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
