const Bullet = require('./main')

Bullet.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Bullet.name, Bullet)
}

export default Bullet
