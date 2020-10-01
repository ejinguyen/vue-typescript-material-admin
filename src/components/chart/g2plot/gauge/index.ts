const mixins = require('vuetify/lib/util/mixins')
import BaseMixin from '../BaseMixin'
import { Gauge } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2-gauge',
  props: {
    title: Object,
    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: 100
    },
    color: {
      type: Array,
      default: () => {
        return ['#39B8FF', '#52619B', '#43E089', '#C0EDF3']
      }
    },
    range: {
      type: Array,
      default: () => {
        return [0, 25, 50, 75, 100]
      }
    },
    rangeSize: {
      type: Number,
      default: 24
    },

    value: {
      default: 60
    },
    statistic: Object
  },

  data() {
    return {
      chart: null
    }
  },

  methods: {
    drawChart() {
      (this as any).chart = new Gauge((this as any).$refs.canvas, {
        width: (this as any).width,
        height: (this as any).height,
        padding: (this as any).padding,
        forceFit: (this as any).forceFit,

        // title: this.title,

        // Gauge props

        value: (this as any).value,

        min: (this as any).min,

        max: (this as any).max,

        color: (this as any).color,

        range: (this as any).range,

        rangeSize: (this as any).rangeSize,

        statistic: (this as any).statistic

        // axis: {

        //   offset: -15,

        //   tickLine: {

        //     visible: true,

        //     length: 10

        //   },

        //   label: {

        //     visible: false

        //   }

        // },

        // pivot: {

        //   visible: true,

        //   thickness: 5,

        //   pointer: {

        //     visible: true,

        //     style: {

        //       fill: '#e25869'

        //     }

        //   },

        //   pin: {

        //     visible: false,

        //     style: {

        //       fill: '#e8e6ea'

        //     }

        //   }

        // }
      });

      (this as any).chart.render()
    }
  },

  mounted() {
    this.drawChart()
  }
})
