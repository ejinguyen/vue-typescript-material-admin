/**
 * ECharts Vue Wrapper
 * Michael Wang
 */
import colors from 'vuetify/es5/util/colors'
const _object = require('lodash/object')

const ECharts = (window as any).echarts || undefined
if (ECharts === undefined) {
  console.error('ECharts is not defined')
}
// set color palette
const colorPalette = []
Object.entries(colors).forEach((item) => {
  if (item[1].base) {
    colorPalette.push(item[1].base)
  }
})
  ; (function () {
    const throttle = function (type: any, name: any, obj?: any) {
      obj = obj || window
      let running = false
      let func = function () {
        if (running) {
          return
        }
        running = true
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name))
          running = false
        })
      }
      obj.addEventListener(type, func)
    }
    /* init - you can init any event */
    throttle('resize', 'optimizedResize')
  })()
export default {
  name: 'v-echart',

  render(h: (arg0: string, arg1: { staticClass: string; style: any; ref: string; on: any }) => any) {
    const data = {
      staticClass: 'v-echart',
      style: (this as any).canvasStyle,
      ref: 'canvas',
      on: (this as any).$listeners
    }
    return h('div', data)
  },

  props: {
    // args of  ECharts.init(dom, theme, opts)
    width: { type: String, default: 'auto' },
    height: { type: String, default: '400px' },
    merged: {
      type: Boolean,
      default: true
    },
    // instace.setOption
    pathOption: [Object, Array],
    option: Object,
    // general config
    textStyle: Object,
    title: Object,
    legend: [Object, Array],
    tooltip: Object,
    grid: { type: [Object, Array] },
    xAxis: [Object, Array],
    yAxis: [Object, Array],
    series: [Object, Array],
    axisPointer: Object,
    dataset: {
      type: [Object, Array],
      default() {
        return {}
      }
    }, // option.dataSet
    colors: Array, // echarts.option.color
    backgroundColor: [Object, String],
    toolbox: { type: [Object, Array] },
    // resize delay
    widthChangeDelay: {
      type: Number,
      default: 450
    }
  },
  data: () => ({
    chartInstance: null,
    clientWidth: null,
    allowedOptions: [
      'textStyle',
      'title',
      'legend',
      'xAxis',
      'yAxis',
      'series',
      'tooltip',
      'axisPointer',
      'grid',
      'dataset',
      'colors',
      'backgroundColor'
    ],
    _defaultOption: {
      tooltip: {
        show: true
      },
      title: {
        show: true,
        textStyle: {
          color: 'rgba(0, 0, 0 , .87)',
          fontFamily: 'sans-serif'
        }
      },
      grid: {
        containLabel: true
      },
      xAxis: {
        show: true,
        type: 'category',
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0 , .54)',
            type: 'dashed'
          }
        },
        axisTick: {
          show: true,
          alignWithLabel: true,
          lineStyle: {
            show: true,
            color: 'rgba(0, 0, 0 , .54)',
            type: 'dashed'
          }
        },
        axisLabel: {
          show: false
        }
      },
      yAxis: {
        show: true,
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0 , .54)',
            type: 'dashed'
          }
        },
        axisLabel: {
          show: false
          // color: 'rgba(0, 0, 0 , .54)'
        },
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            show: true,
            color: 'rgba(0, 0, 0 , .54)',
            type: 'dashed'
          }
        }
      },
      series: [
        {
          type: 'line'
        }
      ]
    }
  }),
  computed: {
    canvasStyle() {
      return {
        width: (this as any).width,
        height: (this as any).height
      }
    }
  },
  methods: {
    init() {
      //const { widthChangeDelay } = this
      // set
      if ((this as any).pathOption) {
        (this as any).pathOption.forEach((p: any[]) => {
          _object.set((this as any).$data._defaultOption, p[0], p[1])
        })
      }
      (this as any).chartInstance = ECharts.init((this as any).$refs.canvas, 'material')
        (this as any).chartInstance.setOption(
          _object.merge((this as any).option, (this as any).$data._defaultOption)
        )
      window.addEventListener('optimizedResize', () => {
        setTimeout(() => {
          (this as any).chartInstance.resize();
        }, (this as any).widthChangeDelay)
      })
    },

    resize() {
      (this as any).chartInstance.resize()
    },
    clean() {
      window.removeEventListener('resize', (this as any).chartInstance.resize);
      (this as any).chartInstance.clear()
    }
  },
  mounted() {
    (this as any).init();
  },

  beforeDestroy() {
    (this as any).clean();
  }
}
