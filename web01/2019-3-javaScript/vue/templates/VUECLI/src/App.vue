<template>
  <!-- 
  vue文件中template小节是html代码部分
  template中第一级子元素只能有一个！！！！
  App.vue是顶级页面
  所有其他试图都是通过router-view（路由视图）加载进来
  -->
  <div class="main-container">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
/* 样式写在style小节里面 */
body {
  margin: 0px;
}
.main-container {
  background-image: url('assets/bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.main-container > div {
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
