const Gauge = require('./main')

Gauge.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Gauge.name, Gauge)
}

export default Gauge
