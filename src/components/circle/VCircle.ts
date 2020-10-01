import Vue from 'vue'
import './VCircle.sass'
const Colorable = require('vuetify/es5/mixins/colorable')

export default Vue.extend({
  mixins: [Colorable],

  props: {
    text: String,
    small: Boolean,
    large: Boolean,
    medium: Boolean,
    dot: Boolean,
    pill: Boolean,
    ring: Boolean
  },
  computed: {
    classes() {
      const classes = {
        'circle-sm': this.small,
        'circle-lg': this.medium,
        'circle-xl': this.large,
        'circle-ring': this.ring,
        'circle-dot': this.dot,
        'circle-pill': this.pill,
        'theme--light': (this as any).light,
        'theme--dark': (this as any).dark
      };
      (classes as any)[(this as any).color] = true
      return classes
    }
  },
  render(h) {
    const data = {
      staticClass: 'circle',
      class: (this as any).classes,
      attrs: { tabindex: (this as any).disabled ? -1 : 0 },
      on: this.$listeners
    }

    return h('span', data, [this.$slots.default])
  }
})
