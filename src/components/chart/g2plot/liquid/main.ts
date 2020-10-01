const Liquid = require('./main')

Liquid.install = function(Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Liquid.name, Liquid)
}

export default Liquid
