const Cloud = require('./main')

Cloud.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Cloud.name, Cloud)
}

export default Cloud
