import Bus from './bus.js';

export default Vue.extend({
  template: `
  <div>{{msg}}</div>
  `,

  data: () => ({
    msg: 'Hello World!'
  }),

  created() {
    Bus.$on('setMsg', content => {
      this.msg = content;
    });
  }
});
