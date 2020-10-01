const mixins = require('vuetify/lib/util/mixins')
import BaseMixin from '../BaseMixin'
import { Area } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2plot-area',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    xField: String,
    yField: String,
    xAxis: {
      type: Object,
      default: () => {
        return {
          type: 'dateTime',
          tickCount: 5
        }
      }
    },
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
      const { data, xField, yField }: any = this;
      (this as any).chart = new Area((this as any).$refs.canvas, {
        width: (this as any).width,
        height: (this as any).height,
        data: data,
        padding: (this as any).padding,
        forceFit: (this as any).forceFit,
        title: (this as any).title,
        label: {
          visible: true,
          position: 'middle' // option: middle / top / bottom
        },
        xField: xField,
        yField: yField,
        xAxis: (this as any).xAxis
      });
      (this as any).chart.render()
    }
  },

  mounted() {
    (this as any).drawChart()
  }
})
