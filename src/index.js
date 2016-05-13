import send from './component/send.js';
import receive from './component/receive.js';
import string from './component/string.js';

new Vue({
  el: '#app',

  components: {
    send,
    receive,
    string
  }
});
