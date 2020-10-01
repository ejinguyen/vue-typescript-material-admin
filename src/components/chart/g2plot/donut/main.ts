const Donut = require('./main')

Donut.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Donut.name, Donut)
}

export default Donut
