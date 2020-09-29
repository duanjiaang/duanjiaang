console.log('in ajax03.js...');
console.log('依赖对象：', Qs, axios, huhuiyu);

let txtEcho = document.getElementById('txtEcho');
let btnEcho = document.getElementById('btnEcho');
let preResult = document.getElementById('preResult');

btnEcho.addEventListener('click', function () {
  huhuiyu.ajax(
    '/',
    {
      echo: txtEcho.value
    },
    function (data) {
      preResult.innerHTML = JSON.stringify(data, null, 2);
    }
  );
});