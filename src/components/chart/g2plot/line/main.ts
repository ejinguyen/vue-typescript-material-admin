const Chart = require('./main')

Chart.install = function (Vue: any) {
  Vue.component(Chart.name, Chart)
}

export default Chart
