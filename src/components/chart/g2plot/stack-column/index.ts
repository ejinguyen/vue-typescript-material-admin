const mixins = require('vuetify/lib/util/mixins')
import BaseMixin from '../BaseMixin'
import { StackedColumn } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2plot-stack-column',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    xField: String,
    yField: String,
    // line width
    stackField: {
      type: String,
      default: 'type'
    },
    color: [Object, Array],
    columnStyle: Object,
    events: {
      type: Object
    }
  },
  data() {
    return {
      chart: null
    }
  },
  methods: {
    drawChart() {
      (this as any).chart = new StackedColumn((this as any).$refs.canvas, {
        width: (this as any).width,
        height: (this as any).height,
        data: (this as any).data,
        padding: (this as any).padding,
        forceFit: true,
        description: (this as any).description,
        meta: (this as any).meta,
        stackField: (this as any).stackField,
        color: (this as any).color,
        label: {
          visible: true,
          position: 'middle' // option: middle / top / bottom
        },
        columnStyle: (this as any).columnStyle,
        legend: {
          position: 'top-left'
        },
        xField: (this as any).xField,
        yField: (this as any).yField,
        xAxis: {
          title: {
            visible: false
          }
        },
        yAxis: {
          title: {
            visible: false
          }
        },
        interactions: [
          {
            type: 'slider'
          }
        ] as any[],
        events: (this as any).events
      });
      (this as any).chart.render()
    }
  },

  mounted() {
    (this as any).drawChart()
  }
})
