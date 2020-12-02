<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <div>
        省份：
        <!-- 省份变化触发城市的查询，这是联动的核心 -->
        <select v-model="pid" @change="loadCity">
          <option v-for="p in plist" :key="p.pid" :value="p.pid">
            {{ p.province }}
          </option>
        </select>
        城市：
        <select v-model="cid">
          <option v-for="c in clist" :key="c.cid" :value="c.cid">
            {{ c.city }}
          </option>
        </select>
      </div>
      <pre>
      {{ pid }}
      <!-- {{ plist }} -->
      {{cid}}
      <!-- {{clist}} -->
      </pre>
    </div>
  </div>
</template>
<script>
// 作业：完成部门员工和班级学生联动
import tools from '../../js/tools';

export default {
  name: 'Link',
  data() {
    return {
      title: 'ajax省份城市联动',
      // 选中的省份编号
      pid: -1,
      // 省份的列表
      plist: [],
      // 城市信息
      cid: -1,
      clist: []
    };
  },
  methods: {
    // 加载省份列表
    loadProvice() {
      // this关键字默认指向是当前function
      // vue将this关键字指向了当前vue实例
      let app = this;
      console.log('回调前this：', this);
      tools.ajax('/linkinfo/queryAllProvince', {}, function(data) {
        // 回调会造成this关键字指向当前function
        console.log('回调后this：', this);
        if (!data.success) {
          alert(data.message);
          return;
        }
        app.plist = data.resultData.list;
        // 默认选中第一项
        app.pid = app.plist[0].pid;
        // 立即查询对应城市信息
        app.loadCity();
      });
    },
    loadCity() {
      let app = this;
      tools.ajax(
        '/linkinfo/queryCityByProvince',
        {
          'tbCity.pid': this.pid
          // tbCity:{pid:this.pid}
        },
        function(data) {
          if (!data.success) {
            alert(data.message);
            return;
          }
          app.clist = data.resultData.list;
          app.cid = app.clist[0].cid;
        }
      );
    }
  },
  created() {
    this.loadProvice();
  }
};
</script>
