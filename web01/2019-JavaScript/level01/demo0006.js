console.log('执行demo0006.js');
// 获取当前的时间
// var 变量名=变量值; new Date()就是获取当前的日期时间
var now = new Date();
console.log(now);
// 获取时间的某一个部分
//小时，分钟，秒
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
console.log('小时：', hour);
console.log('分钟：', minute);
console.log('秒：', second);
//年月日,月份是0-11,表示1-12月
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log(year, month, day);
hour = hour < 10 ? '0' + hour : '' + hour;
minute = minute < 10 ? '0' + minute : '' + minute;
second = second < 10 ? '0' + second : '' + second;
document.getElementById('spTime').innerHTML =
  year +
  '年' +
  month +
  '月' +
  day +
  '日' +
  ' &nbsp;' +
  hour +
  ':' +
  minute +
  ':' +
  second;

//反复间隔时间执行代码
//第一个参数是要执行的代码，第二个参数是间隔的毫秒值,1000就是一秒

// setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。

// setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。

setInterval(function () {
  // console.log(new Date());
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  hour = hour < 10 ? '0' + hour : '' + hour;
  minute = minute < 10 ? '0' + minute : '' + minute;
  second = second < 10 ? '0' + second : '' + second;
  document.getElementById('spTime').innerHTML =
    year +
    '年' +
    month +
    '月' +
    day +
    '日' +
    '&nbsp;&nbsp;' +
    hour +
    ':' +
    minute +
    ':' +
    second;
}, 1000);
//作业：将时间显示成xxxx年xx月xx日 xx时xx分xx秒，思考：不显示秒，但是一分钟更新
