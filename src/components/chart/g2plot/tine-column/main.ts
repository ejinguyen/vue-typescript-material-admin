const TineColumn = require('./main')

TineColumn.install = function(Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(TineColumn.name, TineColumn)
}

export default TineColumn
