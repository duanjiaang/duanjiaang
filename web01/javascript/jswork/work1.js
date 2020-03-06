console.log('执行work1.js');

document.getElementById('sp01').addEventListener('click', function() {
  document.getElementById('ani-div').setAttribute('class', 'animated shake');
});

document.getElementById('sp02').addEventListener('click', function() {
  document.getElementById('ani-div').setAttribute('class', 'animated flash');
});

document.getElementById('sp03').addEventListener('click', function() {
  document.getElementById('ani-div').setAttribute('class', 'animated myani');
});

document.getElementById('sp04').addEventListener('click', function() {
  document.getElementById('ani-div').setAttribute('class', 'animated pulse');
});

document.getElementById('sp05').addEventListener('click', function() {
  document.getElementById('ani-div').setAttribute('class', 'animated bounce');
});
