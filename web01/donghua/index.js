console.log('进入index.js=====>');

var spInfo = document.getElementById('spInfo');
var dh = document.getElementById('dh');
var color = document.getElementById('color');
var btnInfo01 = document.getElementById('btnInfo01');
var btnInfo02 = document.getElementById('btnInfo02');

btnInfo01.addEventListener('click', function () {
  var donghua = dh.value;
  spInfo.style.animationName = donghua;
  console.log(donghua);
  spInfo.innerHTML = '动画效果：' + donghua;
  spInfo.setAttribute('class', 'animated ' + donghua);
  setTimeout(function () {
    spInfo.setAttribute('class', '');
  }, 1000);
});
btnInfo02.addEventListener('click', function () {
  var yanse = color.value;
  spInfo.style.color = yanse;
  console.log(yanse);
  spInfo.innerHTML = '动画效果：' + donghua;
  spInfo.setAttribute('class', yanse);
});
