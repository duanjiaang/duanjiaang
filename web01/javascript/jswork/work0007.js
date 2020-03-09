console.log('执行work0007.js====>');
var jisuan = document.getElementById('jisuan');
var jieguo = document.getElementById('jieguo01');
var jieguo = document.getElementById('jieguo02');
var jieguo = document.getElementById('jieguo03');
var shuzi01 = document.getElementById('shuzi01');
var shuzi02 = document.getElementById('shuzi02');
var shuzi03 = document.getElementById('shuzi03');
var shuzi04 = document.getElementById('shuzi04');
var shuzi05 = document.getElementById('shuzi05');
var shuzi06 = document.getElementById('shuzi06');

jisuan.addEventListener('click', function() {
  jieguo01.innerHTML = parseFloat(shuzi01.value) - parseFloat(shuzi02.value);
  jieguo02.innerHTML = parseFloat(shuzi03.value) * parseFloat(shuzi04.value);
  jieguo03.innerHTML = parseFloat(shuzi05.value) / parseFloat(shuzi06.value);
});
