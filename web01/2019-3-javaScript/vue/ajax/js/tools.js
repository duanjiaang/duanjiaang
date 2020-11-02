// 公用js文件
let huhuiyu = {};
// 文档地址 https://huhuiyu.top/teach-demo-service/docs.html
// 后端api服务地址
huhuiyu.serverBaseUrl = 'https://huhuiyu.top/teach-demo-service';

// huhuiyu.top的后端需要处理保存和发送token
huhuiyu.tokenKey = 'huhuiyu.top.token';

// 保存应答信息中的token值
huhuiyu.saveToken = function (data) {
  if (data && data.token) {
    localStorage.setItem(huhuiyu.tokenKey, data.token);
  }
};

// 获取保存的token值
huhuiyu.loadToken = function () {
  let token = localStorage.getItem(huhuiyu.tokenKey);
  return token ? token : '';
};

// ajax请求
// url:后端api的地址，param：请求的json格式参数
// cb:应答回来之后的回调函数，method：请求的方式，默认post
huhuiyu.ajax = function (url, param, cb, method) {
  let promise = axios({
    // 请求的地址要补全完整服务器地址
    url: huhuiyu.serverBaseUrl + url,
    // 数据要通过Qs转换json成http协议的查询字符串
    data: Qs.stringify(param, { allowDots: true }),
    // method如果没有就用post
    method: method ? method : 'post',
    // 通过请求头发送token信息
    headers: {
      token: huhuiyu.loadToken()
    }
  });

  // axios请求返回的是Promise
  promise
    .then(function (resp) {
      console.log('应答结果', resp);
      // 保存token
      huhuiyu.saveToken(resp.data);
      // 应答的数据是data属性
      cb(resp.data);
    })
    .catch(function (err) {
      console.log('应答错误', err);
      cb({ code: 500, success: '请求失败', error: err });
    });
};

window.huhuiyu = huhuiyu;
