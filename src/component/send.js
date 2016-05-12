import Bus from './bus.js';

export default Vue.extend({
  template: `
  <div @click="sendEvent">Say Hi</div>
  `,

  methods: {
    sendEvent() {
      Bus.$emit('setMsg', 'Hi Vue!');
    }
  }
});
