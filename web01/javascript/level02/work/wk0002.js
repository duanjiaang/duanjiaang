console.log('进入wk0002.js====>');

// 获取页面相关信息
var Info01 = document.getElementById('Info01'); //第一个输入框
var Info02 = document.getElementById('Info02'); //第二个输入框
var btnIf = document.getElementById('btnIf'); //开始判断的按钮
var divResult = document.getElementById('divResult'); //显示结果的div
// 显示元素是不是正确
console.log(Info01, Info02, btnIf, divResult);

// 判断按钮点击动作
btnIf.addEventListener('click', function() {
  // *获取输入框中的内容
  var val01 = Info01.value; //第一个值
  var val02 = Info02.value; //第二个值
  divResult.innerHTML = '第一个值是：' + val01 + '<br>';
  divResult.innerHTML += '第二个值是：' + val02 + '<br>';

  // *要有输入才能判断（去掉空白字符）
  val01 = val01.replace(/\s*/g, '');
  val02 = val02.replace(/\s*/g, '');

  if (val01.length == 0) {
    // 没有第一个值输入，就中断执行并显示错误提示
    divResult.innerHTML += '第一个值没有输入有效信息！';
    Info01.focus();
    return;
  }

  if (val02.length == 0) {
    // 没有第二个值输入，就中断执行并显示错误提示
    divResult.innerHTML += '第二个值没有输入有效信息！';
    Info02.focus();
    return;
  }
  // 逻辑表达式的测试结果
  // 大于的判断
  divResult.innerHTML += '大于的判断结果：' + (val01 > val02) + '<br>';
  // 小于的判断
  divResult.innerHTML += '小于的判断结果：' + (val01 < val02) + '<br>';
  // 等于的判断
  divResult.innerHTML += '等于的判断结果：' + (val01 == val02) + '<br>';
  // 不等于的判断
  divResult.innerHTML += '不等于的判断结果：' + (val01 != val02) + '<br>';
  // 大于等于的判断
  divResult.innerHTML += '大于等于的判断结果：' + (val01 >= val02) + '<br>';
  // 小于等于的判断
  divResult.innerHTML += '小于等于的判断结果：' + (val01 <= val02) + '<br>';

  // 判断两个文本框中输入的信息的长度哪一个更长
  divResult.innerHTML += '第一个值的内容更长:' + (val01.length > val02.length);
});
