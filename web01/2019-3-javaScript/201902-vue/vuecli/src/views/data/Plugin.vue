<template>
  <div>
    <div>{{ title }}</div>
    <div> 插件名称：{{ plugName }} </div>
    <div>
      <input type="text" v-model="info" />
      {{ md5info }}
    </div>
  </div>
</template>
<script>
import tools from '../../js/tools';

export default {
  name: 'DataPlugin',
  data() {
    return {
      title: 'vue自定义插件',
      plugName: '',
      info: ''
    };
  },
  computed: {
    md5info() {
      return tools.md5(this.info);
    }
  },
  created() {
    // 插件的内容可以直接用vue实例访问！！！
    this.plugName = this.$mypluginsName;
    this.$testPlugin('测试信息');
    this.$testThis('this问题', function(info) {
      console.log('解决' + info, this);
    });
  }
};
</script>
