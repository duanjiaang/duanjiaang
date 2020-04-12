console.log('进入work0003.js');

var spIf = document.getElementById('spIf');
var divIf01 = document.getElementById('divIf01');
var divIf02 = document.getElementById('divIf02');
var divIf03 = document.getElementById('divIf03');
var divIf04 = document.getElementById('divIf04');
var ipt01 = document.getElementById('ipt01');
var ipt02 = document.getElementById('ipt02');
var ipt03 = document.getElementById('ipt03');
var ipt04 = document.getElementById('ipt04');
var stnInfo = document.getElementById('stnInfo');

var count = 1;
spIf.addEventListener('click', function() {
  var Ipt01 = ipt01.value.replace(/\s/g, '');
  var Ipt02 = ipt02.value.replace(/\s/g, '');
  var Ipt03 = ipt03.value.replace(/\s/g, '');
  var Ipt04 = ipt04.value.replace(/\s/g, '');

  if (Ipt01.length != 11) {
    ipt01.setAttribute('class', 'error');
    divIf01.setAttribute('class', 'fs02');
    return;
  } else {
    ipt01.setAttribute('class', '');
    divIf01.setAttribute('class', 'fs01');
  }

  if (Ipt02.length < 6 || Ipt02.length > 16) {
    ipt02.setAttribute('class', 'error');
    divIf02.setAttribute('class', 'fs02');
    return;
  } else {
    ipt02.setAttribute('class', '');
    divIf02.setAttribute('class', 'fs01');
  }
  if (Ipt03 != Ipt02) {
    ipt03.setAttribute('class', 'error');
    divIf03.setAttribute('class', 'fs02');
    return;
  } else {
    ipt03.setAttribute('class', '');
    divIf03.setAttribute('class', 'fs01');
  }
  if (Ipt04 == 0) {
    ipt04.setAttribute('class', 'error');
    divIf04.setAttribute('class', 'fs02');
    return;
  } else {
    ipt04.setAttribute('class', '');
    divIf04.setAttribute('class', 'fs01');
    stnInfo.innerHTML = '注册成功！';
  }
});
