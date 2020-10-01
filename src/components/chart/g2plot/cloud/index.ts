const mixins = require('vuetify/lib/util/mixins')
import BaseMixin from '../BaseMixin'
import { WordCloud } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2-cloud',
  props: {
    /**
     *  {
     *    word: 'test'，
     *    weight: 10
     *  }
     */
    data: {
      type: Array,
      default: () => []
    },
    xField: String
  },

  data() {
    return {
      chart: null
    }
  },

  methods: {
    drawChart() {
      (this as any).chart = new WordCloud((this as any).$refs.canvas, {
        width: (this as any).width,
        height: (this as any).height,
        data: (this as any).data,
        padding: (this as any).padding,
        forceFit: (this as any).forceFit,
        title: (this as any).title,
        maskImage:
          'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
        wordStyle: {
          rotation: [-Math.PI / 2, Math.PI / 2],
          rotationSteps: 4,
          fontSize: [10, 60],
          color: (word: any, weight: any) => {
            return (this as any).getRandomColor()
          },
          active: {
            shadowColor: '#333333',
            shadowBlur: 10
          },
          gridSize: 8
        },
        shape: 'circle',
        backgroundColor: '#fff',
        // onWordCloudHover: (e) => {
        //   console.log(e)
        // },
        tooltip: {
          visible: true
        },
        onWordCloudClick: (e: any) => {
          console.log(e)
        }
      } as any);

      (this as any).chart.render()
    },

    getRandomColor() {
      const arr = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#E8684A',
        '#6DC8EC',
        '#9270CA',
        '#FF9D4D',
        '#269A99',
        '#FF99C3'
      ]

      return arr[Math.floor(Math.random() * (arr.length - 1))]
    }
  },

  mounted() {
    (this as any).drawChart()
  }
})
