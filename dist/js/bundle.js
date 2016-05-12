'use strict';

var Bus = new Vue();

var Send = Vue.extend({
  template: '\n  <div @click="sendEvent">Say Hi ?</div>\n  ',

  methods: {
    sendEvent: function sendEvent() {
      Bus.$emit('setMsg', 'Hi Vue!');
    }
  }
});

var Receive = Vue.extend({
  template: '\n  <div>{{msg}}</div>\n  ',

  data: function data() {
    return {
      msg: 'Hello World!'
    };
  },

  created: function created() {
    var _this = this;

    Bus.$on('setMsg', function (content) {
      _this.msg = content;
    });
  }
});

new Vue({
  el: '#app',

  components: {
    'receive': Receive,
    'send': Send
  }
});