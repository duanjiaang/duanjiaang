<template>
  <div>
    <div>{{ title }}</div>
    <!-- 数据表格 -->
    <table>
      <tr>
        <th>部门名称</th>
        <th>部门信息</th>
        <th>最后修改时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="d in list" :key="d.deptId">
        <td>{{ d.deptName }}</td>
        <td>{{ d.deptInfo }}</td>
        <td>{{ d.lastupdate | formatDate }}</td>
        <td>
          <button>删除</button>
        </td>
      </tr>
    </table>

    <!-- 分页信息 -->
    <div>
      当前页/总页数/记录数：
      {{ page.pageNumber }}/{{ page.pageCount }}/{{ page.total }}
    </div>
    <pre>
      <!-- {{ list }} -->
      {{ page }}
    </pre>
  </div>
</template>
<script>
import tools from '../../js/tools';

export default {
  name: 'Dept',
  data() {
    return {
      title: '部门管理',
      page: {
        pageNumber: 1,
        pageSize: 5
      },
      list: [],
      message: ''
    };
  },
  methods: {
    query() {
      let app = this;
      tools.ajax(
        '/dept/query',
        {
          page: this.page
        },
        function(data) {
          if (!data.success) {
            app.message = data.message;
            return;
          }
          // 以服务器返回的page信息为准
          app.page = data.resultData.page;
          // 部门列表
          app.list = data.resultData.list;
        }
      );
    }
  },
  created() {
    this.query();
  }
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid #000000;
}
td {
  text-align: right;
}
table {
  width: 100%;
}
td:not(:last-child):hover {
  background-color: #dcdcdc;
}
</style>
