const Sparkline = require('./main')

Sparkline.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Sparkline.name, Sparkline)
}

export default Sparkline
