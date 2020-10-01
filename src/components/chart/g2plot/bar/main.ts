const Bar = require('./main')

Bar.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Bar.name, Bar)
}

export default Bar
