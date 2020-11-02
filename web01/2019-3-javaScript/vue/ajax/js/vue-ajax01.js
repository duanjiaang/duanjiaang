let app = new Vue({
  el: '#app',
  data: {
    title: 'Vue和ajax（axios+qs）',
    result: {}
  },
  methods: {
    test: function () {
      huhuiyu.ajax('/', {}, function (data) {
        app.result = data;
      });
    }
  }
});
