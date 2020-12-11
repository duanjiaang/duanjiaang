console.log('in ajax04.js...');

// 放置服务器查询数据表格
let fentbData = document.getElementById('tbData');

// 使用ajax查询后端接口api提供的数据
// 分页查询的参数
let page = {
  pageNumber: 1,
  pageSize: 10,
};
function query() {
  huhuiyu.ajax(
    '/exam/goods/queryAll',
    {
      page: page,
    },
    function (data) {
      console.log('查询的数据：', data);
      // 请求数据检测！！！
      if (!data.success) {
        // 如果没有正确应答结果，就不要继续操作，显示错误的原因
        alert(data.message);
        return;
      }
      // data.resultData.list就是服务器返回的商品信息（数组）
      let list = data.resultData.list;
      console.log('商品的信息数组：', list);
      // 清除掉原有的数据再添加新的
      tbData.innerHTML = '';
      for (let i = 0; i < list.length; i++) {
        let goods = list[i];
        console.log('单一商品信息：', goods);
        // 一个商品信息就是表格中的一行
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        tr.append(td);
        td.append(goods.gname);

        td = document.createElement('td');
        tr.append(td);
        td.append(goods.info);

        td = document.createElement('td');
        tr.append(td);
        td.append(goods.price);

        td = document.createElement('td');
        tr.append(td);
        td.append(goods.amount);

        // 特别的单元格，里面是操作元素
        td = document.createElement('td');
        tr.append(td);
        let button = document.createElement('button');
        button.append('删除');
        td.append(button);

        // 添加到表格中
        tbData.append(tr);
        /*
         <tr>
      <td>可口可乐</td>
      <td>可口可乐啊</td>
      <td>1.9</td>
      <td>10000</td>
      <td>
        <button>删除</button>
      </td>
    </tr>
        */
      }
    }
  );
}
let selPageSize = document.getElementById('selPageSize');
selPageSize.addEventListener('change', function () {
  // 修改分页面信息
  page.pageSize = selPageSize.nodeValue;
  page.pageNumber = 1;
  query();
});
selPageSize.value = page.pageSize;
query();
