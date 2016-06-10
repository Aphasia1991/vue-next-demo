import Tab from './tab.js';
import Part from './part.js';

export default Vue.extend({
  template: `
  <div>
    <ul>
      <li @click="toggle('tab')">tab</li>
      <li @click="toggle('part')">part</li>
    </ul>

    <component :is="current" keep-alive></component>
  </div>
  `,

  components: {
    Tab,
    Part
  },

  data: () => ({
    current: 'tab'
  }),

  methods: {
    toggle(target) {
      this.current = target;
    }
  }
});
