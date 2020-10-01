const StackColumn = require('./main')

StackColumn.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(StackColumn.name, StackColumn)
}

export default StackColumn
