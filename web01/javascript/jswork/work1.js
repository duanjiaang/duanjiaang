console.log('执行work1.js');

var sp01 = document.getElementById('sp01');
var sp02 = document.getElementById('sp02');
var sp03 = document.getElementById('sp03');
var sp04 = document.getElementById('sp04');
var sp05 = document.getElementById('sp05');
var anidiv = document.getElementById('anidiv');
sp01.addEventListener('click', function() {
  anidiv.setAttribute('class', 'animated shake');
  setTimeout(function() {
    anidiv.setAttribute('class', '');
    console.log('===>延时执行代码');
  }, 1000);
});

sp02.addEventListener('click', function() {
  anidiv.setAttribute('class', 'animated flash');
  setTimeout(function() {
    anidiv.setAttribute('class', '');
    console.log('===>延时执行代码');
  }, 1000);
});

sp03.addEventListener('click', function() {
  anidiv.setAttribute('class', 'animated myani');
  setTimeout(function() {
    anidiv.setAttribute('class', '');
    console.log('===>延时执行代码');
  }, 1000);
});

sp04.addEventListener('click', function() {
  anidiv.setAttribute('class', 'animated pulse');
  setTimeout(function() {
    anidiv.setAttribute('class', '');
    console.log('===>延时执行代码');
  }, 1000);
});

sp05.addEventListener('click', function() {
  anidiv.setAttribute('class', 'animated bounce');
  setTimeout(function() {
    anidiv.setAttribute('class', '');
    console.log('===>延时执行代码');
  }, 1000);
});
