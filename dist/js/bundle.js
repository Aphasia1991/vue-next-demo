'use strict';

var Bus = new Vue();

var send = Vue.extend({
  template: '\n  <div @click="sendEvent">Say Hi</div>\n  ',

  methods: {
    sendEvent: function sendEvent() {
      Bus.$emit('setMsg', 'Hi Vue!');
    }
  }
});

var receive = Vue.extend({
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

var string = Vue.extend({
  template: "\n  <div>\n    <span>Hello</span>\n    <span>World</span>\n    <span>!</span>\n  </div>\n  "
});

Vue.config.preserveWhitespace = false;

Vue.component('xtpl', {
  props: ['index', 'item'],

  template: '#x-tpl'
});

new Vue({
  el: '#app',

  components: {
    send: send,
    receive: receive,
    string: string
  },

  data: {
    list: ['H', 'i', ',', 'V', 'u', 'e', '!']
  }
});