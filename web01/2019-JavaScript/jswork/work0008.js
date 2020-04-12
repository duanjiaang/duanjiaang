console.log('执行work0008.js====>');
var xl = 100000;
var cdrs = 0;
var blood = document.getElementById('blood');
var btnJoin = document.getElementById('btnJoin');
var peoJoin = document.getElementById('peoJoin');
document.getElementById('peoJoin').innerHTML = '加入战斗的热血青年：' + cdrs;
btnJoin.addEventListener('click', function() {
  cdrs = cdrs + 1;
  peoJoin.innerHTML = '加入战斗的热血青年: ' + cdrs;
});

setInterval(function() {
  xl = xl - cdrs * 2500;
  blood.innerHTML = xl;
  if (xl <= 0) {
    blood.innerHTML = '恭喜，boss已经击败！';
  }
}, 1000);
