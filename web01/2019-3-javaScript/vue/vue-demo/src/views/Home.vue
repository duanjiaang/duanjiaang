<template>
  <div class="main">
    {{ welcome }}
    <img src="../assets/logo.png" alt="">
    <!-- 使用vue路由路径跳转页面 -->
    <a href="#/about">关于</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // vue项目中的data必须是函数
  data() {
    return { welcome: '欢迎使用vue脚手架路由项目' };
  }
};
</script>
<style scoped>
.main {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
</style>
