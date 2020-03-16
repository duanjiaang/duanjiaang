console.log('执行work001.js====>');
var shuzi01 = document.getElementById('shuzi01');
var shuzi02 = document.getElementById('shuzi02');
var shuzi03 = document.getElementById('shuzi03');
var shuzi04 = document.getElementById('shuzi04');
var shuzi05 = document.getElementById('shuzi05');
var shuzi06 = document.getElementById('shuzi06');
var shuzi07 = document.getElementById('shuzi07');
var shuzi08 = document.getElementById('shuzi08');
var shuzi09 = document.getElementById('shuzi09');
var shuzi010 = document.getElementById('shuzi010');
var jieguo01 = document.getElementById('jieguo01');
var jieguo02 = document.getElementById('jieguo02');
var jieguo03 = document.getElementById('jieguo03');
var jieguo04 = document.getElementById('jieguo04');
var jieguo05 = document.getElementById('jieguo05');
var jisuan = document.getElementById('jisuan');
var divIf = document.getElementById('divIf');
divIf.innerHTML = '必须输入数才能计算';
jisuan.addEventListener('click', function() {
  jieguo01.innerHTML = parseFloat(shuzi01.value) + parseFloat(shuzi02.value);
  jieguo02.innerHTML = shuzi03.value - shuzi04.value;
  jieguo03.innerHTML = shuzi05.value * shuzi06.value;
  jieguo04.innerHTML = shuzi07.value / shuzi08.value;
  jieguo05.innerHTML = shuzi09.value % shuzi010.value;
  divIf.innerHTML = '';
});

var txtNum = document.getElementById('txtNum');
var btnNum = document.getElementById('btnNum');
var spIf = document.getElementById('spIf');
btnNum.addEventListener('click', function() {
var num = txtNum.value;

  if (isNaN(num)) {
    spIf.innerHTML = '输入的不是一个数！';
    return;
  }

  num = parseFloat(num);
  if (num % 2 == 0) {
    spIf.innerHTML = num + '====>"是偶数！"';
  } else {
    spIf.innerHTML = num + '====>"是奇数！"';
  }
  
  setTimeout(function() {
    spIf.innerHTML = '';
  }, 3000);
});
