const mixins = require('vuetify/lib/util/mixins')
import BaseMixin from '../BaseMixin'
import { Line } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2-line',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    xField: String,
    yField: String,
    color: Array,
    colorField: String,
    // line width
    size: {
      type: Number,
      default: 2
    }
  },

  watch: {
    data: {
      handler(data: any) {
        if ((this as any).chart) {
          (this as any).chart.changeData(data)
            (this as any).chart.updateConfig({
              width: (this as any).width,
              height: (this as any).height
            })
            (this as any).chart.render()
        }
      },
      immediate: true
    }
  },

  data() {
    return {
      chart: null
    }
  },

  methods: {
    drawChart() {
      (this as any).chart = new Line((this as any).$refs.canvas, {
        width: (this as any).width,
        height: (this as any).height,
        data: (this as any).data,
        padding: (this as any).padding,
        forceFit: true,
        title: (this as any).title,
        description: (this as any).description,
        color: (this as any).color,
        colorField: (this as any).colorField,
        meta: (this as any).meta,
        label: {
          visible: true,
          position: 'middle' // option: middle / top / bottom
        },

        xField: (this as any).xField,
        yField: (this as any).yField,
        xAxis: {
          title: {
            visible: true
          }
        },
        yAxis: {
          title: {
            visible: true
          }
        },
        legend: {
          position: 'top-left'
        }
      } as any);

      (this as any).chart.render();
    }
  },

  mounted() {
    (this as any).drawChart();
  }
})
