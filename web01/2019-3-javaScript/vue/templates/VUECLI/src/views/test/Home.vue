<template>
  <div> {{ title }}</div>
</template>

<script>
import test from '../../js/test';

export default {
  name: 'TestHome',
  data() {
    return {
      title: '测试首页'
    };
  },
  created() {
    test.show();
  }
};
</script>
