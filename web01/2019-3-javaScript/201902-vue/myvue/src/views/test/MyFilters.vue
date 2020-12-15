<template>
  <div>
    <div>{{ title }}</div>
    <div> 过滤器：{{ date | formatDate }} {{ date | formatDate('yyyy年MM月dd日') }} </div>
    <div>
      自定义指令：
      <input type="text" v-focus="focusInfo.name" />
      <input type="password" v-focus="focusInfo.pwd" />
      <button @click="changeFocus">切换焦点</button>
    </div>
    <div>
      插件md5加密：
      <input type="text" v-model="info" />
      {{ md5info }}
    </div>
    <div>
      <table border="1">
        <tr>
          <td>1.1</td>
          <td colspan="2">1.2</td>
          <!-- <td>1.3</td> -->
        </tr>
        <tr>
          <td rowspan="2">2.1</td>
          <td>2.2</td>
          <td>2.3</td>
        </tr>
        <tr>
          <!-- <td>3.1</td> -->
          <td>3.2</td>
          <td>3.3</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestMyFilters',
  data() {
    return {
      title: '自定义指令和过滤器',
      date: new Date(),
      focusInfo: { name: true, pwd: false },
      info: ''
    };
  },
  computed: {
    md5info() {
      return this.$md5(this.info);
    }
  },
  methods: {
    changeFocus() {
      this.focusInfo.name = !this.focusInfo.name;
      this.focusInfo.pwd = !this.focusInfo.pwd;
    }
  }
};
</script>
