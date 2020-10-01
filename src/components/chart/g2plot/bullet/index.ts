const mixins = require('vuetify/lib/util/mixins')

import BaseMixin from '../BaseMixin'

import { Bullet } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2-bullet',

  props: {
    /**
     *  schema
     *  {
     *      title: 'Task',
     *       measures: [83],
     *       targets: [90],
     *       ranges: [0, 0.6, 0.9, 1],
     *  }
     */
    data: {
      type: Array,
      default: () => []
    },
    rangeColors: {
      type: Array,
      default: () => []
    },

    rangeMax: {
      type: Number,
      default: 100
    }
  },

  data() {
    return {
      chart: null
    }
  },

  methods: {
    drawChart() {
      const { data, rangeColors, rangeMax }: any = this;
      (this as any).chart = new Bullet((this as any).$refs.canvas, {
        width: (this as any).width,
        height: (this as any).height,
        data: data,
        padding: (this as any).padding,
        forceFit: (this as any).forceFit,
        rangeMax: rangeMax,
        rangeColors: rangeColors
      });
      (this as any).chart.render()
    }
  },

  mounted() {
    (this as any).drawChart()
  }
})
