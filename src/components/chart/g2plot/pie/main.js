import Pie= require('./main')

Pie.install = function(Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Pie.name, Pie)
}

export default Pie
