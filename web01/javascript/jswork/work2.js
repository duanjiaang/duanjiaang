console.log('执行work2.js');

var now = new Date();
console.log(now);
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log(year, month, day);
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
console.log(hour, minute, second);

document.getElementById('sptime').innerHTML =
  year +
  '年' +
  month +
  '月' +
  day +
  '日' +
  ' ' +
  hour +
  '时' +
  minute +
  '分' +
  second +
  '秒';
setInterval(function() {
  console.log(new Date());
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  document.getElementById('sptime').innerHTML =
    year +
    '年' +
    month +
    '月' +
    day +
    '日' +
    ' ' +
    hour +
    '时' +
    minute +
    '分' +
    second +
    '秒';
}, 1000);
//作业：将时间显示成xxxx年xx月xx日 xx时xx分xx秒，思考：不显示秒，但是一分钟更新
