export default Vue.extend({
  template: `
  <div>{{ random }}</div>
  `,

  data: () => ({
    random: ''
  }),

  created() {
    this.random = Math.random();
  }
});
