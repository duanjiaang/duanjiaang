import qs from 'qs';
import axios from 'axios';

//公用js文件
let tools = {
  name: '布尔先森的工具类',
  //格式化日期的方法,
  // date参数是要格式化的日期对象，可以是Date对象，也可以是时间戳
  // format是格式，可选，默认是yyyy-mm-dd hh：mm：sss
  formatDate(date, format) {
    //第一参数必须存在
    if (!date) {
      return '';
    }
    format = format ? format : 'yyyy-mm-dd hh：mm：ss';
    console.log('tools.formatDate', date, format);

    // typeof 对象，返回的是对象类型
    // 对象 instanceof 类型，判断对象是否是指定的类型
    console.log('类型判断：', typeof date, date instanceof Date, date);
    // 判断数据类型，必须是日期或者时间戳（number）
    if (!(date instanceof Date) && typeof date != 'number') {
      console.log(date + '不是日期或者时间戳');
      return '';
    }
    // 统一转换Date
    if (typeof date == 'number') {
      let time = new Date();
      time.setTime(date);
      date = time;
    }
    console.log('转换后的date', date);
    // 格式化部分
    let result = format.replace('yyyy', date.getFullYear());
    result.result.replace('MM', date.getMonth() + 1);
    result.result.replace('dd', date.getDate());
    result.result.replace('hh', date.getHours());
    result.result.replace('mm', date.getMinutes());
    result.result.replace('ss', date.getSeconds());

    return result;
  },
  //后端api地址
  serverUrl: 'https://huhuiyu.top/teach-demo-service',
  // 本地后端地址
  // serverUrl: 'http://127.0.0.1:20000',
  //本地存储的token键值
  tokenkey: 'huhuiyu.top.ajax.key',
  // 保存token到本地
  saveToken(data) {
    if (data && data.token) {
      localStorage.setItem(tools.tokenkey, data.token);
    }
  },
  //读写本地保存的token
  loadToken() {
    let token = localStorage.getItem(tools.tokenkey);
    return token ? token : '';
  },
  //ajax请求封装过程
  ajax() {
    //arguments是function内置对象，表示调用function传入参数
    console.log('动态获取参数：', arguments);
    //ajax请求需要四个参数，动态封装成三种格式
    //四个参数分别为：url，后端api地址，params，请求参数
    //callback，应答回来后的信息处理function，method，请求的方式（非必须）
    //1、单一参数，必须是json，格式为{url：'',params:{}}
    //2、三个参数就是url，params，callback
    //3、四个参数就是url，params，callback，method
    let ajaxInfo = {}; //将参数统一转换成json格式
    let count = arguments.length;
    if (count == 3 || count == 4) {
      //三参数的情况
      //第一个是url
      ajaxInfo.url = arguments[0];
      ajaxInfo.params = arguments[1];
      ajaxInfo.callback = arguments[2];
    }
    if (count == 4) {
      //四个参数多一个method
      ajaxInfo.method = arguments[3];
    }
    if (count == 1) {
      //一个参数本来就是吻合格式的json
      ajaxInfo = arguments[0];
    }
    //method默认post处理
    ajaxInfo.method = ajaxInfo.method ? ajaxInfo.method : 'post';
    // console.log('ajax请求的参数信息：', ajaxInfo);
    //json对象的信息获取
    console.log('ajax请求的参数信息：');
    for (let key in ajaxInfo) {
      console.log(key, '==>', ajaxInfo[key]);
      // ajaxInfo.url  等同代码  ajaxInfo.['url']
    }
    //ajax请求
    let promise = axios({
      url: tools.serverUrl + ajaxInfo.url,
      data: qs.stringify(ajaxInfo.params, { allowDots: true }),
      method: ajaxInfo.method,
      headers: {
        token: tools.loadToken()
      }
    });
    promise
      .then(function(resp) {
        tools.saveToken(resp.data);
        ajaxInfo.callback(resp.data);
      })
      .catch(function(error) {
        ajaxInfo.callback({
          code: 500,
          success: false,
          message: '请求失败',
          err: error
        });
      });
  }
};

// 新版本js的模板导出方式
export default tools;
