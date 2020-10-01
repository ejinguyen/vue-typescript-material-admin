const Area = require('./main')

Area.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Area.name, Area)
}

export default Area
