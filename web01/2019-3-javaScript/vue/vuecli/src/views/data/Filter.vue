<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <input type="text" v-model="echo" />
      <button @click="send">发送</button>
      <button @click="query">查询省份</button>
      <div v-if="result.resultData">
        {{ result.resultData.time }}
        <!-- 计算属性显示和data中的一样 -->
        {{ echoTime }}
      </div>
      <table>
        <tr v-for="p in plist" :key="p.pid">
          <td>{{ p.pid }}</td>
          <td>{{ p.province }}</td>
          <!-- 通过 {{值 | 过滤器名称}} 使用过滤器功能 -->
          <td>{{ p.lastupdate | formatDate('yyyy年MM月dd日 hh:mm:ss') }}</td>
        </tr>
      </table>

      <pre>
        {{ result }}
      </pre>
    </div>
  </div>
</template>
<script>
import tools from '../../js/tools';

export default {
  name: 'DataFilter',
  data() {
    return {
      title: '过滤器',
      echo: '',
      result: '',
      plist: []
    };
  },
  methods: {
    send() {
      let app = this;
      tools.ajax('/', { echo: this.echo }, function(data) {
        app.result = data;
      });
    },
    query() {
      let app = this;
      tools.ajax('/linkinfo/queryAllProvince', {}, function(data) {
        if (data.success) {
          app.plist = data.resultData.list;
        }
      });
    }
  },
  // 计算属性
  computed: {
    echoTime() {
      // 计算属性只能运算data中定义的数据
      return tools.formatDate(this.result.resultData.time);
    }
  }
};
</script>
