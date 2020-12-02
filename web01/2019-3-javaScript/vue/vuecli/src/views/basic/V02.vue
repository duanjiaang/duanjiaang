<template>
  <div>
    <div>
      <a href="/#/">返回首页</a>
    </div>
    {{ title }}
    <i class="iconfont">&#xe60a;</i>
    <div>
      <span v-for="f in iconfonts" :key="f">
        <i class="iconfont" v-html="f"></i>
        {{ f }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basic02',
  data() {
    return {
      title: 'vue基础复习二',
      iconfonts: ['&#xe7b5;', '&#xe60a;', '&#xe61b;', '&#xe637;', '&#xe689;', '&#xe798;', '&#xe799;']
    };
  }
};
</script>
