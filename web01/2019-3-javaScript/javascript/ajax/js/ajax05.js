console.log('in ajax05.js...');

let txt01 = document.getElementById('txt01');
let txt02 = document.getElementById('txt02');
let txt03 = document.getElementById('txt03');
let btn01 = document.getElementById('btn01');

console.log(txt01, txt02, txt03, btn01);

btn01.addEventListener('click', function () {
  let username = txt01.value.trim();
  let password = txt02.value.trim();
  let nickname = txt03.value.trim();
  console.log('输入的信息：', username, password, nickname);
  if (username == '') {
    alert('用户名必须填写');
    txt01.focus();
    return;
  }
  if (password == '') {
    alert('密码必须填写');
    txt02.focus();
    return;
  }
  if (nickname == '') {
    alert('昵称必须填写');
    txt03.focus();
    return;
  }
  // 提交数据到后端完成注册
  huhuiyu.ajax(
    '/user/reg',
    {
      tbUser: {
        username: username,
        password: password,
        nickname: nickname,
      },
    },
    function (data) {
      alert(data.message);
      if (data.success) {
        txt01.value = '';
        txt02.value = '';
        txt03.value = '';
      }
    }
  );
});

//登录部分
let txt04 = document.getElementById('txt04');
let txt05 = document.getElementById('txt05');
let btn02 = document.getElementById('btn02');
let divInfo = document.getElementById('divInfo');

console.log(txt04, txt05, btn02, divInfo);
btn02.addEventListener('click', function () {
  let user = {
    username: txt04.value,
    password: txt05.value,
  };
  huhuiyu.ajax(
    '/user/login',
    {
      tbUser: user,
    },
    function (data) {
      divInfo.innerHTML = data.message;
    }
  );
});
