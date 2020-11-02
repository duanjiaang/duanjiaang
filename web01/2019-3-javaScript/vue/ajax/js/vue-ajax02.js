let app = new Vue({
  el: '#app',
  data: {
    title: 'vue和ajax数据联动',
    // 省份数组
    provinceList: [],
    // 城市数组
    cityList: [],
    // 选中的省份
    province: { pid: 0 },
    // 选中的城市
    city: { cid: 0 },
    // 应答结果
    result: {}
  },
  methods: {
    // 查询省份信息
    queryProvince: function () {
      huhuiyu.ajax('/linkinfo/queryAllProvince', {}, function (data) {
        if (!data.success) {
          alert('查询发生错误:', data.message);
          return;
        }
        app.result = data;
        // 省份列表
        app.provinceList = data.resultData.list;
        // 默认选中省份
        // 让选中的省份（province对象）的pid值
        // 是省份列表中的一个
        // 选中第一个
        app.province.pid = app.provinceList[0].pid;
        // 选中中间值的算法
        // let index = parseInt(app.provinceList.length / 2);
        // app.province.pid = app.provinceList[index].pid;
        // 省份确定后要查询城市
        app.queryCity();
      });
    },
    // 通过省份查询城市信息
    queryCity: function () {
      huhuiyu.ajax(
        '/linkinfo/queryCityByProvince',
        {
          // 联动的关键点，选中的省份作为查询的参数
          tbCity: { pid: app.province.pid }
        },
        function (data) {
          if (!data.success) {
            alert('查询数据错误：', data.message);
            return;
          }
          app.result = data;
          app.cityList = data.resultData.list;
          // 默认项
          let index = parseInt(app.cityList.length / 2);
          app.city.cid = app.cityList[index].cid;
        }
      );
    }
  },
  // 声明周期方法，当vue被创建时调用
  created: function () {
    console.log('vue实例被创建');
    // 调用查询省份的方法
    this.queryProvince();
  }
});
