export default Vue.extend({
  data: () => ({
    msg: 'World!'
  }),

  methods: {
    sayHi() {
      console.log('Hi~');
    }
  },

  // render(h) {
  //   return h('div', {
  //     on: {
  //       click: this.sayHi
  //     }
  //   }, ['Hello ', this.msg]);
  // }

  render(h) {
    return (
      <div on-click={ this.sayHi }>Hello { this.msg }</div>
    )
  }

  // template: `
  // <div @click="sayHi">Hello {{ msg }}</div>
  // `
});
