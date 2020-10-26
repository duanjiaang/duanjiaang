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

// 不论使用什么框架处理ajax请求，都有如下的特征
// 第一点：要请求的api服务url地址，比如https://huhuiyu.cn/ddd
// 第二点：要发送给api服务的请求参数
//   不论什么框架最终都会将请求参数转换成标准的查询字符串格式
//   abc=123&name=admin这样的
//   我们的ajax封装使用了Qs.js来将json格式转换成标准格式
// 第三点：ajax请求会返回结果，可能会有两种情况
//    1：服务正确返回的情况
//    2：请求发生错误的情况
//    不论哪一种情况都需要调用者自行处理结果
//    所以主流的框架都会让你传入一个function来处理
//    因为应答会有数据返回，所以该function需要一个参数获取数据
//    为了区分正确和错误的情况
//    axios将正确的function放在then里面
//    错误的function放在catch里面
//    其实这个是Promise的结构
//    而jquery是通过success和fail来区分