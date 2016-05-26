import send from './component/send.js';
import receive from './component/receive.js';
import string from './component/string.js';
import './component/xtpl.js';

new Vue({
  el: '#app',

  components: {
    send,
    receive,
    string
  },

  data: {
    list: ['H', 'i', ',', 'V', 'u', 'e', '!']
  }
});
