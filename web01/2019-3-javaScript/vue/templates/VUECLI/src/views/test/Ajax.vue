<template>
  <div>
    <div>ajax测试页面</div>
    <hr />
    <div>
      <input type="text" v-model="echo" placeholder="echo参数" />
      <button @click="send">发送</button>
    </div>
    <hr />
    <div>
      <img :src="imgcode" />
      <a href="javascript:void(0)" @click="loadImgCode">刷新校验码</a>
    </div>
    <pre>{{ result }}</pre>
  </div>
</template>
<script>
import tools from '../../js/tools';

export default {
  name: 'TestAjax',
  data() {
    return {
      echo: '',
      imgcode: '',
      result: {}
    };
  },
  methods: {
    send() {
      let app = this;
      tools.ajax('/', { echo: this.echo }, function(data) {
        app.result = data;
      });
    },
    //加载图片校验码的方法
    loadImgCode() {
      let app = this;
      tools.ajax(
        '/tools/imageCode',
        {},
        function(data) {
          app.result = data;
          // 图片校验码请求的结果的message就是图片
          app.imgcode = data.message;
        },
        'get'
      );
    }
  }
};
</script>
