<template>
  <div>
    <div>
      <a href="/#/">返回首页</a>
    </div>
    {{ title }}
    <i class="iconfont">&#xe682;</i>
    <div>
      <span v-for="f in iconfonts" :key="f">
        <i class="iconfont" v-html="f">{{f}}</i>
        {{f}}
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
      iconfonts: ['&#xeb5c;', '&#xe602;', '&#xe667;', '&#xeb89;', '&#xe682;', '&#xe600;','&#xe646;']
    };
  }
};
</script>
