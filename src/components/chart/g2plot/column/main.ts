const Column = require('./main')

Column.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Column.name, Column)
}

export default Column
