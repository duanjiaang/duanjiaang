console.log('进入h0002.js====>');
/*
展示逻辑表达式的计算结果
>, <, ==, !=, >=, <=
点击开始判断按钮就比对两个文本框中输入的信息，结果放在div中
*/
// 第一步，获取页面相关信息
var info01 = document.getElementById('info01'); //第一个输入框
var info02 = document.getElementById('info02'); //第二个输入框
var btnIf = document.getElementById('btnIf'); //判断按钮
var divResult = document.getElementById('divResult'); //显示结果的div
console.log(info01, info02, btnIf, divResult);

// 第二步，判断按钮点击动作
btnIf.addEventListener('click', function() {
  console.log('开始做判断');
  //获取输入框中输入的内容
  var val01 = info01.value; //第一个值
  var val02 = info02.value; //第二个值

  console.log('输入的值:', val01, val02, val01.length, val02.length);

  divResult.innerHTML = '第一个值是：' + val01 + '<br>';
  divResult.innerHTML = divResult.innerHTML + '第二个值是：' + val02 + '<br>';
  // 要有输入才能继续判断
  // 去掉空白字符在判断输入的情况 /\s*/g表示任意的空白字符
  val01 = val01.replace(/\s*/g, '');
  val02 = val02.replace(/\s*/g, '');

  console.log('去点空格之后的值：', +val01, val02, val01.length, val02.length);

  if (val01.length == 0) {
    // 没有第一个值输入就中断执行并显示错误提示
    divResult.innerHTML =
      divResult.innerHTML + '第一个信息没有输入有效内容<br>'; 
    // 页面元素.****focus()表示元素获取焦点****
    info01.focus();
    return;
  }
  if (val02.length == 0) {
    divResult.innerHTML = divResult.innerHTML + '第二个要输入<br>';
    info02.focus();
    return;
  }
  // 大于的判断 逻辑判断表达式只有两种结果，true,false
  // a=b表示让a的值为b a=100表示如果a的值是100返回true，否则false
  divResult.innerHTML =
    divResult.innerHTML + '大于的判断结果：' + (val01 > val02) + '<br>';
  divResult.innerHTML =
    divResult.innerHTML + '大于或等于的判断结果：' + (val01 >= val02) + '<br>';
  // a+=b;就是a=a+b;  !是not
  divResult.innerHTML += '不相等测试的结果' + (val01 != val02) + '<br>';
  divResult.innerHTML += '取反操作不相等测试的结果' + (val01 == val02) + '<br>';
  // 作业1：完成剩下的逻辑表达式的测试结果
  // >大于，<小于，==等于，!=不等于，>=大于等于，<=小于等于
  // 作业2：判断两个文本框中输入的信息的长度哪一个更长
});
