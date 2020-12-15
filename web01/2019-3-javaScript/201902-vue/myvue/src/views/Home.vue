<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <a href="/#/employee/dept">部门管理</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return { title: '黑暗骑士的vue项目' };
  }
};
</script>
