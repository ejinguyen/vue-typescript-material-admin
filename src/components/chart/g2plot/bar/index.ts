const mixins = require('vuetify/lib/util/mixins')
import BaseMixin from '../BaseMixin'
import { Bar } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2plot-bar',
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
      // const data = [
      //   { 地区: '华东', 销售额: 4684506.442 },
      //   { 地区: '中南', 销售额: 4137415.0929999948 },
      //   { 地区: '东北', 销售额: 2681567.469000001 },
      //   { 地区: '华北', 销售额: 2447301.017000004 },
      //   { 地区: '西南', 销售额: 1303124.508000002 },
      //   { 地区: '西北', 销售额: 815039.5959999998 }
      // ]
      // const xField = '销售额'
      // const yField = '地区'
      const { data, xField, yField }: any = this;
      (this as any).chart = new Bar((this as any).$refs.canvas, {
        width: (this as any).width,
        height: (this as any).height,
        data: data,
        padding: (this as any).padding,
        forceFit: (this as any).forceFit,
        label: {
          visible: true,
          position: 'middle' // option: middle / top / bottom
        },
        xField: xField,
        yField: yField
      });
      (this as any).chart.render()
    }
  },

  mounted() {
    (this as any).drawChart()
  }
})
