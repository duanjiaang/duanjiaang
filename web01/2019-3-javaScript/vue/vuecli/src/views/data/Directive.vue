<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <input type="text" v-focus />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DataDirective',
  data() {
    return { title: '自定义指令' };
  }
};
</script>
