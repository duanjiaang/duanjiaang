let list = [
  { id: 100, name: '绿甲龙', sex: 'm' },
  { id: 101, name: '吕佳龙', sex: 'm' },
  { id: 102, name: '沈娇', sex: 'f' },
];

let tbData = document.getElementById('tbData');
// 循环生成表格的内容
for (let i = 0; i < list.length; i++) {
  let data = list[i];
  console.log(data);
  let tr = document.createElement('tr');
  let td;
  // 编号
  td = document.createElement('td');
  td.append(data.id);
  tr.append(td);
  // 姓名
  td = document.createElement('td');
  td.append(data.name);
  tr.append(td);
  // 性别（要转换）
  td = document.createElement('td');
  td.append(data.sex == 'm' ? '男' : '女');
  tr.append(td);

  tbData.append(tr);
}
