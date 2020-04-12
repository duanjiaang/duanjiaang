// 控制台显示信息，确认js已经被导入，要在浏览器控制台查看
console.log('进入zy0002.js====>');
/*
功能说明，点击计算按钮之后
要求文本框中必须输入的是数
如果不是就显示错误信息
如果是就计算结果
*/
// 第一步，获取页面计算按钮和输入框，以及提示信息的元素
var jisuan = document.getElementById('jisuan'); // 计算的按钮
var n01 = document.getElementById('n01'); // 加法的第一个输入框
var n02 = document.getElementById('n02'); // 加法的第二个输入框
var jieguo01 = document.getElementById('jieguo01'); // 加法的结果

var n03 = document.getElementById('n03'); // 加法的第三个输入框
var n04 = document.getElementById('n04'); // 加法的第四个输入框
var jieguo02 = document.getElementById('jieguo02'); // 减法的结果

var n05 = document.getElementById('n05'); // 乘法的第一个输入框
var n06 = document.getElementById('n06'); // 乘法的第二个输入框
var jieguo03 = document.getElementById('jieguo03'); // 乘法的结果

var n07 = document.getElementById('n07'); // 除法的第一个输入框
var n08 = document.getElementById('n08'); // 除法的第二个输入框
var jieguo04 = document.getElementById('jieguo04'); // 除法的结果

var n09 = document.getElementById('n09'); // 取模的第一个输入框
var n010 = document.getElementById('n010'); // 取模的第二个输入框
var jieguo05 = document.getElementById('jieguo05'); // 取模的结果

var sperr = document.getElementById('sperr'); // 错误提示信息
// 显示元素是不是正确
console.log(
  jisuan,
  n01,
  n02,
  jieguo01,
  n03,
  n04,
  jieguo02,
  n05,
  n06,
  jieguo03,
  n07,
  n08,
  jieguo04,
  n09,
  n010,
  jieguo05,
  sperr
);
// 第二步：计算按钮的单击动作
jisuan.addEventListener('click', function() {
  console.log('点击计算按钮');
  // 第三步：校验输入的数是不是数
  var num01 = parseFloat(n01.value); //获取n01（加法的第一个输入框）的输入值
  // parseFloat转换参数成为数值，如果参数是数值类型就会成功转换，否则返回NaN==>not a number
  // isNaN判断参数是不是非数，不是数就返回true真，是数就返回false假
  console.log(n01.value, '是不是非数：', isNaN(parseFloat(num01)));
  // 判断n01的值是不是数
  if (isNaN(num01)) {
    sperr.innerHTML = '加法的第一个输入不是数！';
    return;
  }
  // 第二个数
  var num02 = parseFloat(n02.value);
  if (isNaN(num02)) {
    sperr.innerHTML = '加法的第二个输入不是数！';
    return;
  }
  // 第四步，计算并显示结果
  // 执行到这里，说明输入的都是数，（说明数值输入了）
  sperr.innerHTML = ''; //清空错误信息

  // 加法结果
  jieguo01.innerHTML = num01 + num02;

  // 第三个数
  var num03 = parseFloat(n03.value);
  if (isNaN(num03)) {
    sperr.innerHTML = '减法的第一个输入不是数！';
    return;
  }
  // 第四个数
  var num04 = parseFloat(n04.value);
  if (isNaN(num04)) {
    sperr.innerHTML = '减法的第二个输入不是数！';
    return;
  }
  // 减法结果
  jieguo02.innerHTML = num03 - num04;

  // 第五个数
  var num05 = parseFloat(n05.value);
  if (isNaN(num05)) {
    sperr.innerHTML = '乘法的第一个输入不是数！';
    return;
  }
  // 第六个数
  var num06 = parseFloat(n06.value);
  if (isNaN(num06)) {
    sperr.innerHTML = '乘法的第二个输入不是数！';
    return;
  }
  // 乘法结果
  jieguo03.innerHTML = num05 * num06;

  // 第七个数
  var num07 = parseFloat(n07.value);
  if (isNaN(num07)) {
    sperr.innerHTML = '除法的第一个输入不是数！';
    return;
  }
  // 第八个数
  var num08 = parseFloat(n08.value);
  if (isNaN(num08)) {
    sperr.innerHTML = '除法的第二个输入不是数！';
    return;
  }
  // 除法结果
  jieguo04.innerHTML = num07 / num08;

  // 第九个数
  var num09 = parseFloat(n09.value);
  if (isNaN(num09)) {
    sperr.innerHTML = '取模的第一个输入不是数！';
    return;
  }
  // 第十个数
  var num010 = parseFloat(n010.value);
  if (isNaN(num010)) {
    sperr.innerHTML = '取模的第二个输入不是数！';
    return;
  }
  // 取模结果
  jieguo05.innerHTML = num09 % num010;
});
