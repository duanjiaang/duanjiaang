console.log('进入demo0005.js');
// 复合的数据结构json
// json对象格式{属性1:属性值... }
var teacher = {
  name: '黑暗骑士',
  salary: 3000,
  address: '湖南常德',
};
console.log(teacher.name, teacher.salary);
console.log(teacher);
// 可以任意位置和时机去扩展、修改里面的属性定义
teacher.aihao = '游戏，读书';
console.log(teacher);
// 删除某一个属性
delete teacher.aihao;
console.log(teacher);
// 通过界面收集json的信息
var user = { name: '', password: '', xb: '' };
var txtUsername = document.getElementById('txtUsername');
var txtPassword = document.getElementById('txtPassword');
var xb01 = document.getElementById('xb01');
var xb02 = document.getElementById('xb02');
var btnJson = document.getElementById('btnJson');
console.log(txtUsername, txtPassword, xb01, xb02, btnJson);

//相同的代码块可以通过function定义出来反复调用！！！！
// 获取输入的信息的方法
function getUserInfo() {
  user.name = txtUsername.value;
  user.password = txtPassword.value;
  // if (xb01.checked) {
  //   user.xb = xb01.value;
  // } else {
  //   user.xb = xb02.value;
  // }
  //?:是三元表达式 逻辑表达式?为true时执行的代码:为false时执行的代码
  user.xb = xb01.checked ? xb01.value : xb02.value;
  console.log(user);
}

btnJson.addEventListener('click', function () {
  //调用function，直白理解就是执行对应名称的function里面代码
  getUserInfo();
});

// 输入的值变化就立即开始收集信息
// 监听值变化事件change
xb01.addEventListener('change', function () {
  // 输入框的change事件不会在值变化后立即触发，要焦点离开之后才会触发
  getUserInfo();
});

xb02.addEventListener('change', function () {
  getUserInfo();
});

txtUsername.addEventListener('change', function () {
  getUserInfo();
});

txtPassword.addEventListener('change', function () {
  getUserInfo();
});

// 事件演示部分================================================
var txtEvent = document.getElementById('txtEvent');
var divEvent = document.getElementById('divEvent');
// 元素获取焦点的事件
txtEvent.addEventListener('focus', function () {
  divEvent.innerHTML = '焦点来到了有故事的输入框';
});
// 元素丢失焦点的事件
txtEvent.addEventListener('blur', function () {
  divEvent.innerHTML = '离开了有故事的输入框';
});
// 元素键盘按键释放的事件(这个事件可以添加一个event参数，来获取按键的值)
txtEvent.addEventListener('keyup', function (event) {
  console.log('按键的编码：', event.keyCode);
  divEvent.innerHTML = '开始讲故事了：' + txtEvent.value;
});
// 键盘按下
txtEvent.addEventListener('keydown', function (event) {
  console.log('按键按下:', event.keyCode);
});

// 第二课====================================================================================
// 鼠标移动(手机不支持该事件)
var divMouseEvent = document.getElementById('divMouseEvent');
divMouseEvent.addEventListener('mousemove', function (event) {
  console.log(event);
  divMouseEvent.innerHTML = '鼠标移动:' + event.clientX + ',' + event.clientY;
});

// 鼠标按下
divMouseEvent.addEventListener('mousedown', function (event) {
  console.log(event);
  divMouseEvent.innerHTML = '鼠标按下:' + event.clientX + ',' + event.clientY;
});
divMouseEvent.addEventListener('mouseup', function (event) {
  console.log(event);
  divMouseEvent.innerHTML = '鼠标释放:' + event.clientX + ',' + event.clientY;
});

// 手机版本的事件（只有手机模式下才有效）

divMouseEvent.addEventListener('touchmove', function (event) {
  console.log(event);
  // event.touches[0]表示第一个触点
  divMouseEvent.innerHTML =
    '触摸移动中:' + event.touches[0].clientX + ',' + event.touches[0].clientY;
});

divMouseEvent.addEventListener('touchstart', function (event) {
  divMouseEvent.innerHTML = '开始触摸';
});

divMouseEvent.addEventListener('touchend', function (event) {
  divMouseEvent.innerHTML = '触摸结束';
});
//作业：将以前注册信息的表单改版成用json记录表单的数据
// 注册信息的校验修改成焦点丢失或者是值变化就开始检测
