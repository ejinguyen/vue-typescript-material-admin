const mixins = require('vuetify/lib/util/mixins')
import BaseMixin from '../BaseMixin'
import { Liquid } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2plot-liquid',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      chart: null
    }
  },
  methods: {
    drawChart() {
      (this as any).chart = new Liquid((this as any).$refs.canvas, {
        width: (this as any).width,
        height: (this as any).height,
        data: (this as any).data,
        padding: (this as any).padding,
        forceFit: (this as any).forceFit,
        // donut props
        min: (this as any).min,
        max: (this as any).max,
        value: (this as any).value
      });
      (this as any).chart.render()
    }
  },

  mounted() {
    (this as any).drawChart()
  }
})
