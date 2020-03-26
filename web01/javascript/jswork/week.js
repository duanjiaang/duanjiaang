console.log('执行work.js====>');

var btn = document.getElementById('btn');
var yangshi = document.getElementById('yangshi');
// var mode = 'sun';
// btn.addEventListener('click', function() {
//   if (mode == 'sun') {
//     mode = 'moon';
//     yangshi.setAttribute('class', 'moon');
//     return;
//   }
//   mode = 'sun';
//   yangshi.setAttribute('class', 'sun');
// });
var mode = 1;
btn.addEventListener('click', function() {
  mode = mode + 1;
  if (mode % 2 == 0) {
    yangshi.setAttribute('class', 'sun');
    return;
  }
  yangshi.setAttribute('class', 'moon');
});

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var divymd = document.getElementById('divymd');
var divhms = document.getElementById('divhms');
console.log(year, month, day, hour, minute, second);
setInterval(function() {
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  second = second < 10 ? '0' + second : '' + second;
  minute = minute < 10 ? '0' + minute : '' + minute;
  hour = hour < 10 ? '0' + hour : '' + hour;
  month = month < 10 ? '0' + month : '' + month;
  day = day < 10 ? '0' + day : '' + day;
  divymd.innerHTML = year + '年' + month + '月' + day + '日';
  divhms.innerHTML = hour + ':' + minute + ':' + second;
}, 1000);

var stnInfo = document.getElementById('stnInfo');
var Info = document.getElementById('Info');
Info = ' talk is cheap show me the code.        ';
var index01 = 0;
setInterval(function() {
  index01 = index01 + 1;
  stnInfo.innerHTML = stnInfo.innerHTML + Info.charAt(index01);
  if (index01 == Info.length) {
    stnInfo.innerHTML = '';
    index01 = 0;
  }
}, 200);

var main = document.getElementById('main');
Info01 =
  ' JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。 ';
var index02 = 0;
setInterval(function() {
  index02 = index02 + 1;
  main.innerHTML = main.innerHTML + Info01.charAt(index02);
  if (index02 == Info01.length) {
    main.innerHTML = '';
    index02 = 0;
  }
}, 200);

var qiang = document.getElementById('qiang');
var tb01 = document.getElementById('tb01');
var shuzi01 = document.getElementById('shuzi01');
var ling = 0;
shuzi01.innerHTML = '0';
qiang.addEventListener('click', function() {
  ling = ling + 1;
  shuzi01.innerHTML = ling;
});
tb01.addEventListener('click', function() {
  tb01.setAttribute('class', 'animated shake');
  setTimeout(function() {
    tb01.setAttribute('class', '');
    console.log('===>延时执行代码');
  }, 300);
});
var ruo = document.getElementById('ruo');
var tb01 = document.getElementById('tb01');
var shuzi02 = document.getElementById('shuzi02');
var ling01 = 0;
shuzi02.innerHTML = '0';
ruo.addEventListener('click', function() {
  tb02.setAttribute('class', 'animated bounce');
  ling01 = ling01 + 1;
  shuzi02.innerHTML = ling01;
});
tb02.addEventListener('click', function() {
  tb02.setAttribute('class', 'animated bounce');
  setTimeout(function() {
    tb02.setAttribute('class', '');
    console.log('===>延时执行代码');
  }, 500);
});
