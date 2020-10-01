import VG2Column from '@/components/chart/g2plot/column'
import VG2Line from '@/components/chart/g2plot/line'
import VG2Gauge from '@/components/chart/g2plot/gauge'
import VG2Donut from '@/components/chart/g2plot/donut'
import VG2Cloud from '@/components/chart/g2plot/cloud'
import VG2Bullet from '@/components/chart/g2plot/bullet'
export default {
  name: 'PageChartG2',
  components: {
    VG2Column,
    VG2Line,
    VG2Gauge,
    VG2Donut,
    VG2Cloud,
    VG2Bullet
  },
  data() {
    return {
      chart: {
        column: {
          data: [
            {
              type: 'Toy',
              sales: 38
            },
            {
              type: 'Woman Fasion',
              sales: 52
            },
            {
              type: 'Men Fasion',
              sales: 61
            },
            {
              type: 'Phone',
              sales: 145
            },
            {
              type: 'Computer',
              sales: 48
            },
            {
              type: 'Electronics',
              sales: 38
            },
            {
              type: 'Watches',
              sales: 38
            },
            {
              type: 'Bag & Shoes',
              sales: 38
            }
          ],
          xField: 'type',
          yField: 'sales',
          title: {
            visible: true,
            text: 'Basic column chart'
          },
          colorField: 'type',
          actions: [
            {
              text: 'Show Lengend',
              click: (this as any).showColumnLengend
            }
          ]
        },
        line: {
          data: [
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 }
          ],
          xField: 'year',
          yField: 'value',
          title: {
            visible: true,
            text: 'Basic line chart'
          },
          actions: [
            {
              text: 'Show Lengend',
              click: (this as any).showColumnLengend
            }
          ]
        },
        gauge: {
          title: {
            visible: true,
            text: 'Gauge'
          }
        },
        donut: {
          data: [
            {
              type: 'United States',
              value: 27
            },
            {
              type: 'China',
              value: 25
            },
            {
              type: 'Russia',
              value: 18
            },
            {
              type: 'France',
              value: 15
            },
            {
              type: 'Spanish',
              value: 10
            },
            {
              type: 'Other',
              value: 5
            }
          ],
          title: {
            visible: true,
            text: 'Donut chart'
          }
        },
        cloud: {
          title: {
            visible: true,
            text: 'Tag Cloud'
          },
          data: [
            {
              weight: 12,
              word: 'VMA'
            },
            {
              weight: 9,
              word: 'Vue'
            },
            {
              weight: 8,
              word: 'Material'
            },
            {
              weight: 8,
              word: 'Chart'
            },
            {
              weight: 8,
              word: 'vuex'
            },
            {
              weight: 8,
              word: 'G2'
            },

            {
              weight: 3,
              word: 'Echart'
            },
            {
              weight: 10,
              word: 'Laravel'
            },
            {
              weight: 6,
              word: 'Data Vis'
            }
          ]
        },
        bullet: {
          title: {
            visible: true,
            text: 'Bullet'
          },
          data: [
            {
              title: 'GUI',
              measures: [83],
              targets: [90]
            },
            {
              title: 'REST API',
              measures: [13],
              targets: [90]
            },
            {
              title: 'Websocket',
              measures: [45],
              targets: [80]
            },
            {
              title: 'SSR',
              measures: [83],
              targets: [70]
            }
          ]
        }
      }
    }
  },
  methods: {
    //column
    showColumnLengend() {
      (this as any).chart.column.colorField = 'type'
    }
  }
}
