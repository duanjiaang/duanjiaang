// 引入npm安装的qs库
import qs from 'qs';
import axios from 'axios';
import tools from './tools';

//测试用js
let test = {
  show() {
    console.log('测试用js', qs.stringify({ info: '布尔先森' }), axios);
    //ajax方法的动态参数获取
    // tools.ajax('abc', 1);
    // tools.ajax();
    //正确的三个格式
    tools.ajax({
      url: '/',
      params: { echo: 'abc' },
      callback:function(data) {
        console.log(data);
      }
    });
    tools.ajax(
      '/',
      {},
      function(data) {
        console.log(data);
      },
    );
  }
};

export default test;
