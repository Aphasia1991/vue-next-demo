import Send from './component/send.js';
import Receive from './component/receive.js';

new Vue({
  el: '#app',

  components: {
    'receive': Receive,
    'send': Send
  }
});
