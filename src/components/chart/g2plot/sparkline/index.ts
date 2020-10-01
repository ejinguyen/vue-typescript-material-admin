const mixins = require('vuetify/lib/util/mixins')
import BaseMixin from '../BaseMixin'
import { TinyLine } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2plot-sparkline',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    xField: String,
    yField: String,
    // line width
    size: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      chart: null
    }
  },
  methods: {
    drawChart() {
      (this as any).chart = new TinyLine((this as any).$refs.canvas, {
        width: (this as any).width,
        height: (this as any).height,
        data: (this as any).data,
        padding: (this as any).padding,
        forceFit: (this as any).forceFit,
        xField: (this as any).xField,
        yField: (this as any).yField,
        tooltip: (this as any).tooltip
      });
      (this as any).chart.render()
    }
  },

  mounted() {
    this.drawChart()
  }
})
