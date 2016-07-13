import Tab from './tab.js';

export default Vue.extend({
  template: `
  <div>
    <ul>
      <li @click="toggle('first')">first</li>
      <li @click="toggle('second')">second</li>
      <li @click="toggle('third')">third</li>
    </ul>

    <component :is="current" keep-alive></component>
  </div>
  `,

  components: {
    'first': Tab,
    'second': Tab,
    'third': Tab
  },

  data: () => ({
    current: 'first'
  }),

  methods: {
    toggle(target) {
      this.current = target;
    }
  }
});
