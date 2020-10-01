const mixins = require('vuetify/lib/util/mixins')

import BaseMixin from '../BaseMixin'

import { Donut } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2-donut',

  props: {
    data: {
      type: Array,
      default: () => []
    },

    radius: {
      tyep: Number,
      default: 0.8
    },

    angleField: {
      type: String,
      default: 'value'
    },

    colorField: {
      type: String,
      default: 'type'
    }
  },

  data() {
    return {
      chart: null
    }
  },

  methods: {
    drawChart() {
      (this as any).chart = new Donut((this as any).$refs.canvas, {
        width: (this as any).width,
        height: (this as any).height,
        data: (this as any).data,

        padding: (this as any).padding,

        forceFit: (this as any).forceFit,

        // donut props

        radius: (this as any).radius,

        angleField: (this as any).angleField,

        colorField: (this as any).colorField
      });

      (this as any).chart.render()
    }
  },

  mounted() {
    (this as any).drawChart()
  }
})
