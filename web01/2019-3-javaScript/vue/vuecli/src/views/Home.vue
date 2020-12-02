<template>
  <div class="main">
    <!-- data中的数据可以直接在页面上使用 -->
    {{ welcome }}
    <button @click="test">黑暗骑士</button>

    <a href="/#/basic/v01">基础复习一</a>
    |
    <a href="/#/basic/v02">基础复习二</a>
    <br />
    <!-- 通过数据生成菜单 -->
    <div>
      <!-- vuecli中会检测v-for循环是否配备不可重复的标识属性key -->
      <a v-for="m in menus" :key="m.link" :href="m.link">
        {{ m.text }}
      </a>
    </div>
    <!-- 路由api方式跳转页面 -->
    <div class="menus">
      <span v-for="m in routerMenus" :key="m.path" @click="toPage(m.path)">
        {{ m.text }}
      </span>
    </div>
  </div>
</template>

<script>
// js代码放置在script小节
// vue实例表达式转换为新版本js的exprot模式
export default {
  // 不在需要el，替换为name
  name: 'Home',
  // data变成function，返回值就是以前的data格式json数据
  data() {
    return {
      welcome: '欢迎使用vue脚手架路由项目',
      // 用json数据完成菜单的配置
      menus: [
        { link: '/#/basic/v01', text: 'vue复习知识一' },
        { link: '/#/basic/v02', text: 'vue复习知识二 ' }
      ],
      // 路由模式菜单
      routerMenus: [
        { path: '/basic/v01', text: 'vue复习知识一' },
        { path: '/basic/v02', text: 'vue复习知识二 ' }
      ]
    };
  },
  methods: {
    // 所有的function字段都可以简写掉function
    test() {
      window.open('https://huhuiyu.top');
    },
    // 路由跳转页面事件处理
    toPage(path) {
      // $router是vue实例内置对象
      // 用于路由的控制
      // push方法是路由跳转
      // 单一字符串参数表示要跳转的路由的路径
      // 合法值都是在router中配置的path
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
/* 带scoped属性的style是局部的，不会产生名称冲突 */
.main {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.menus > span {
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border: 2px solid #ff0000;
}

.menus > span:hover {
  border-color: transparent;
  color: #ff0000;
  cursor: pointer;
}
</style>
